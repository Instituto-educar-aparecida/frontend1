// types/authSchema.ts
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ─── Login ────────────────────────────────────────────
export const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(1, "Senha obrigatória"),
});

export const loginResolver = zodResolver(loginSchema);

export type LoginFormData = z.infer<typeof loginSchema>;

export const loginDefaultValues: LoginFormData = {
  email: "",
  senha: "",
};

export const loginResponseSchema = z.object({
  token: z.string(),
});

export type LoginResponse = z.infer<typeof loginResponseSchema>;

// ─── Register ─────────────────────────────────────────
export const RegisterSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .max(45, "Nome deve ter no máximo 45 caracteres"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  role: z.enum(["admin", "aluno"]),
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;

export const registerResolver = zodResolver(RegisterSchema);

export const registerDefaultValues: RegisterFormData = {
  name: "",
  email: "",
  senha: "",
  role: "aluno",
};
