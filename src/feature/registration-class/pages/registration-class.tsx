// Imports
import { useForm } from "react-hook-form"; // Hook principal do formulário
import { classResolver, defaultClassValues, type ClassData } from "../types/classSchema";
// classResolver → conecta com o Zod; defaultClassValues → estado inicial; ClassData → tipo do formulário


export const RegistrationClass = () => {

    // Inicializa o hook do formulário
    const form: ReturnType<typeof useForm<ClassData>> = useForm<ClassData>({
        // Conecta o schema do Zod ao formulário
        // Toda validação vai passar por aqui
        resolver: classResolver,

        // Define os valores iniciais do formulário
        // Isso inicializa o estado interno do form
        defaultValues: defaultClassValues
    });

    // Utilitarios do form
    const { register, handleSubmit, formState } = form;

    return (
        <div>
            <h1>Registration Class</h1>
        </div>
    );
};