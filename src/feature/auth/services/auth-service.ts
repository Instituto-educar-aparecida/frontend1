import { jwtDecode } from "jwt-decode";
import api from "@/lib/axios";
import {
  loginResponseSchema,
  type LoginFormData,
} from "@/feature/auth/types/authSchema";
import { useAuthStore } from "@/store/use-auth-store";

export interface JwtPayload {
  id: string;
  name: string;
  role: "admin" | "aluno" | "professor";
}

export const authService = {
  login: async (data: LoginFormData) => {
    console.log("Login data:", data);
    const response = await api.post("/auth/login", data);
    console.log("Login response:", response.data);

    const { token } = loginResponseSchema.parse(response.data);

    // decodifica o token pra extrair os dados do usuário
    const user = jwtDecode<JwtPayload>(token);

    useAuthStore.getState().setAuth(token, {
      id: user.id,
      name: user.name,
      role: user.role,
    });

    return user;
  },

  logout: () => {
    useAuthStore.getState().logout();
  },
};
