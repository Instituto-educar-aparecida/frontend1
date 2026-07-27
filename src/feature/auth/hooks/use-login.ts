import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { authService } from "@/feature/auth/services/auth-service";
import type { LoginFormData } from "@/feature/auth/types/authSchema";
import { useState } from "react";

export function useLogin() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const mutation = useMutation({
    mutationFn: (data: LoginFormData) => authService.login(data),
    onSuccess: (user) => {
      setLoginError("");
      if (user.role === "ADMIN") navigate("/admin/dashboard");
      else if (user.role === "INSTRUCTOR") navigate("/professor/dashboard");
      else navigate("/student/dashboard");
    },
    onError: (error: Error) => {
      setLoginError(error.message || "Email ou senha incorretos.");
    },
  });

  return { ...mutation, loginError };
}

export function useLogout() {
  const navigate = useNavigate();
  return () => {
    authService.logout();
    navigate("/login");
  };
}
