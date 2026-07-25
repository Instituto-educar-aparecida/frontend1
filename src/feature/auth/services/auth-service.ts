import api from "@/lib/axios";
import {
  loginResponseSchema,
  type LoginFormData,
} from "@/feature/auth/types/authSchema";
import { useAuthStore } from "@/store/use-auth-store";
import { BackendRoutes } from "@/types/backend-routes";

export const authService = {
  login: async (data: LoginFormData) => {
    try {
      const response = await api.post(BackendRoutes.LOGIN, data);
      const parsed = loginResponseSchema.parse(response.data);
      const { token, user } = parsed.data;

      useAuthStore.getState().setAuth(token, {
        id: user.id,
        name: user.name,
        role: user.role as "ADMIN" | "STUDENT" | "INSTRUCTOR",
      });

      return user;
    } catch (error: any) {
      console.error("Erro no login authService:", error);
      const status = error.response?.status;
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Erro de autenticação";
      if (status === 401) {
        throw new Error("Muitas tentativas. Aguarde um pouco e tente novamente.");
      }
      throw new Error(message);
    }
  },
  logout: () => {
    useAuthStore.getState().logout();
  },
};
