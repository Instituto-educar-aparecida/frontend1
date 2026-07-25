import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { authService } from "@/feature/auth/services/auth-service";
import type { LoginFormData } from "@/feature/auth/types/authSchema";

export function useLogin() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: LoginFormData) => authService.login(data),
    onSuccess: (user) => {
      if (user.role === "ADMIN") navigate("/admin/dashboard");
      else if (user.role === "INSTRUCTOR") navigate("/professor/dashboard");
      else navigate("/student/dashboard");
    },
    onError: () => {},
  });
}

export function useLogout() {
  const navigate = useNavigate();
  return () => {
    authService.logout();
    navigate("/login");
  };
}
