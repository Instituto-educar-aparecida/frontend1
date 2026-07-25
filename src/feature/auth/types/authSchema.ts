import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(1, "Senha obrigatória"),
});
export const loginResolver = zodResolver(loginSchema);
export type LoginFormData = z.infer<typeof loginSchema>;
export const loginDefaultValues: LoginFormData = {
  email: "",
  password: "",
};

export const loginResponseSchema = z.object({
  status: z.string(),
  data: z.object({
    token: z.string(),
    user: z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      role: z.string(),
    }),
  }),
});
export type LoginResponse = z.infer<typeof loginResponseSchema>;

export const RegisterSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").max(45, "Nome deve ter no máximo 45 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  role: z.enum(["ADMIN", "STUDENT"]),
});
export type RegisterFormData = z.infer<typeof RegisterSchema>;
export const registerResolver = zodResolver(RegisterSchema);
export const registerDefaultValues: RegisterFormData = {
  name: "",
  email: "",
  password: "",
  role: "STUDENT",
};
