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
  const { mutate, isPending, loginError } = useLogin();
  const methods = useForm<LoginFormData>({
    resolver: loginResolver,
    defaultValues: loginDefaultValues,
  });

  const handleSubmit = (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className="space-y-4"
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

        {loginError && (
          <div className="bg-red/10 border border-red/20 rounded-lg px-3 py-2">
            <p className="text-xs text-red text-center">{loginError}</p>
          </div>
        )}

        <Button
          title={isPending ? "Entrando..." : "Entrar no sistema"}
          icon={MdArrowForward}
        />

        <div className="items-center justify-center flex text-gray-300 text-sm hover:text-violet-300">
          <a href="">Esqueceu a senha?</a>
        </div>
      </form>
    </FormProvider>
  );
};
