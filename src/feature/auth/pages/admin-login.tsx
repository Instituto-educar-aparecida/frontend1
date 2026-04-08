import { LoginForm } from "../components/login-form";
import AuthContainer from "../components/auth-container";

export const AdminLoginPage = () => {
  return (
    <AuthContainer subtitle="Portal do Administrador">
      <LoginForm />
    </AuthContainer>
  );
};
