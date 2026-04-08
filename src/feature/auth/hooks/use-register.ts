import { useMutation } from "@tanstack/react-query";
import api from "../../../lib/axios";
import { type RegisterFormData, RegisterSchema } from "../types/authSchema";

interface RegisterResponse {
  message: string;
}

export function useRegister() {
  return useMutation({
    mutationFn: async (data: RegisterFormData): Promise<RegisterResponse> => {
      const response = await api.post<RegisterResponse>("/auth/register", data);
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data.message);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
}
