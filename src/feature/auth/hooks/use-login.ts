import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import {
  authService,
  type JwtPayload,
} from "@/feature/auth/services/auth-service";
import type { LoginFormData } from "@/feature/auth/types/authSchema";

export function useLogin() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginFormData): Promise<JwtPayload> =>
      authService.login(data),
    onSuccess: (user) => {
      // redireciona conforme o role
      user.role === "admin"
        ? navigate("/admin/dashboard")
        : user.role === "professor"
          ? navigate("/professor/dashboard")
          : navigate("/student/dashboard");
    },
    onError: () => {
      // erro tratado no componente via mutation.error
    },
  });
}

export function useLogout() {
  const navigate = useNavigate();

  return () => {
    authService.logout();
    navigate("/login");
  };
}
