
// Imports
import { useForm } from "react-hook-form"; // Hook principal do formulário
import { classResolver, defaultClassValues, type ClassData } from "../types/classSchema";
// classResolver → conecta com o Zod; defaultClassValues → estado inicial; ClassData → tipo do formulário
import { FormProvider } from "react-hook-form";
import { MdFileUpload, MdAutorenew } from "react-icons/md";

// Ajuste o caminho abaixo conforme a localização real dos componentes Input e Button
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import ContainerCard from "../../../components/container-card";

export const ClassForm = () => {

    // Inicializa o hook do formulário
    const form = useForm<ClassData>({
        // Conecta o schema do Zod ao formulário
        // Toda validação vai passar por aqui
        resolver: classResolver,

        // Define os valores iniciais do formulário
        // Isso inicializa o estado interno do form
        defaultValues: defaultClassValues
    });


    // Função onSubmit
    const onSubmit = (data: ClassData) => {
        console.log(data);
    };

    // Utilitarios do form
    const { register, handleSubmit, formState } = form;

    // Log para depurar o formulário
    console.log("Erros Atuais do Formulário:", formState.errors);

    return (
        <main className="min-h-screen bg-primary flex items-center justify-center p-6">
            <ContainerCard  className="w-full max-w-lg p-8">
                <h2 className="text-xl font-bold text-whitemb-6">Nova Aula</h2>
                <FormProvider {...form}>
                    <form className="flex flex-col gap-5"onSubmit={handleSubmit(onSubmit)}>
                        <Input name="title" label="Título" placeholder="Ex: Introdução a Matematica"/>
                        <Input name="module" label="Módulo do Curso" placeholder="Ex: Módulo 1"/>
                        <Input name="videoUrl" label="URL do Vídeo" placeholder="Ex: https://www.youtube.com/watch?v=..."/>
                        <Input name="description" label="Descrição" placeholder="Ex: Descrição da aula"/>
                        <Button
                          icon={MdFileUpload}
                          loadingIcon={MdAutorenew}
                          title="Salvar Aula"
                          loadingTitle="Salvando..."
                          disabled={formState.isSubmitting}
                          isLoading={formState.isSubmitting}
                        />
                    </form>
                </FormProvider>
            </ContainerCard>
        </main>
    )
}