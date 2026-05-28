import { jwtDecode } from "jwt-decode";
import api from "@/lib/axios";
import {
  loginResponseSchema,
  type LoginFormData,
} from "@/feature/auth/types/authSchema";
import { useAuthStore } from "@/store/use-auth-store";
import type { AxiosError } from "axios";
import { BackendRoutes } from "@/types/backend-routes";

export interface JwtPayload {
  id: string;
  name: string;
  role: "admin" | "aluno" | "professor";
}

export const authService = {
  login: async (data: LoginFormData) => {
    try {
      console.log("Login ", data);

      const response = await api.post(BackendRoutes.LOGIN, data);
      console.log("Login response:", response.data);

      const { token } = loginResponseSchema.parse(response.data);

      const user = jwtDecode<JwtPayload>(token);

      useAuthStore.getState().setAuth(token, {
        id: user.id,
        name: user.name,
        role: user.role,
      });

      return user;
    } catch (error: any) {
      // Log completo do erro
      console.error("Erro no login authService:", error);

      // Se for erro do axios, tenta extrair mensagem
      if (error) {
        const status = error.response?.status;
        const message =
          error.response?.data?.message ||
          error.response?.data?.error ||
          "Erro de autenticação";

        if (status === 401) {
          throw new Error(
            "Muitas tentativas. Aguarde um pouco e tente novamente.",
          );
        } else {
          throw new Error(message);
        }
      }

      throw new Error("Erro ao fazer login");
    }
  },

  logout: () => {
    useAuthStore.getState().logout();
  },
};
