import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const classSchema = z.object({
    title: z.string().min(2, "O título deve ter pelo menos 2 caracteres").max(100),
    module: z.string().min(2, "O módulo deve ter pelo menos 2 caracteres").max(100), // Campo de seleção de texto, para selecionar a opção correta
    videoUrl: z.string().url("Insira um link de vídeo válido ex:https://youtube.com/..."), // Campo de URL do vídeo
    description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres").max(500) // Campo de descrição
}); // Objeto de validação


// Infere automaticamente o tipo dos dados em TS com base no schema
export type ClassData = z.infer<typeof classSchema>;

// Conexão com o react hook form
// Define o zod como resolver, que vai trabalhar em cima do schema
export const classResolver = zodResolver(classSchema);

// Valores padrão para os campos
export const defaultClassValues: ClassData = {
    title: "",
    module: "",
    videoUrl: "",
    description: ""
};
