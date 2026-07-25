// components/RegisterForm.tsx (Somente Estilização)
import { MdEmail, MdLockOutline, MdArrowForward } from "react-icons/md";
import { Input } from "../../../components/input";
import { useForm, FormProvider } from "react-hook-form";
import {
  loginDefaultValues,
  loginResolver,
  type LoginFormData,
} from "../types/authSchema";
import { useLogin } from "../hooks/use-login";
import { Button } from "../../../components/button";

export const LoginForm = () => {
  const loginMutation = useLogin();

  const methods = useForm<LoginFormData>({
    resolver: loginResolver,
    defaultValues: {
      email: "aluno2@ed.com",
      password: "",
    },
  });

  const handleSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
    methods.reset(loginDefaultValues);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className="space-y-4 "
      >
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="email@exemplo.com"
          icon={MdEmail}
        />

        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="••••••••"
          icon={MdLockOutline}
        />

        <Button title="Entrar no sistema" icon={MdArrowForward} />
        <div className="items-center justify-center flex text-gray-300 text-sm hover:text-violet-300">
          <a href="">Esqueceu a senha?</a>
        </div>
      </form>
    </FormProvider>
  );
};
