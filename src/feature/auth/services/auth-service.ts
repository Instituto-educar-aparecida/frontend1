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

      if (response.data.status === "error") {
        throw new Error(response.data.message || "Email ou senha incorretos.");
      }

      const parsed = loginResponseSchema.parse(response.data);
      const { token, user } = parsed.data;

      useAuthStore.getState().setAuth(token, {
        id: user.id,
        name: user.name,
        role: user.role as "ADMIN" | "STUDENT" | "INSTRUCTOR",
      });

      return user;
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Email ou senha incorretos.";
      throw new Error(message);
    }
  },

  logout: () => {
    useAuthStore.getState().logout();
  },
};
