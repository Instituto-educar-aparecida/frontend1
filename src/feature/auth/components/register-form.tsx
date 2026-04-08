import {
  MdPerson,
  MdEmail,
  MdLockOutline,
  MdArrowForward,
} from "react-icons/md";
import { Input } from "../../../components/input";
import { useForm, FormProvider } from "react-hook-form";
import {
  registerDefaultValues,
  registerResolver,
  type RegisterFormData,
} from "../types/authSchema";
import { useRegister } from "../hooks/use-register";
import { Button } from "../../../components/button";

export const RegisterForm = () => {
  const registerMutation = useRegister();

  const methods = useForm<RegisterFormData>({
    resolver: registerResolver,
    defaultValues: registerDefaultValues,
  });

  const handleSubmit = (data: RegisterFormData) => {
    registerMutation.mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className="space-y-4">
        <Input
          name="name"
          label="Nome Completo"
          placeholder="Seu nome"
          icon={MdPerson}
        />

        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="email@exemplo.com"
          icon={MdEmail}
        />

        <Input
          name="senha"
          label="Senha"
          type="password"
          placeholder="••••••••"
          icon={MdLockOutline}
        />

        <Button title="Cadastrar" icon={MdArrowForward} />
      </form>
    </FormProvider>
  );
};
