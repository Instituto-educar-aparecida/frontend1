import { useEffect, useState } from "react";
import { LoginForm } from "../components/login-form";
import AuthContainer from "../components/auth-container";
import FooterAuth from "../components/auth-footer";

export const LoginPage = () => {
  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("session_expired")) {
      setSessionExpired(true);
      localStorage.removeItem("session_expired");
    }
  }, []);

  return (
    <AuthContainer subtitle="Portal do Aluno e Professor">
      {sessionExpired && (
        <div className="bg-yellow/10 border border-yellow/20 rounded-lg px-3 py-2 mb-2">
          <p className="text-xs text-yellow text-center">
            Sua sessão expirou. Faça login novamente.
          </p>
        </div>
      )}
      <LoginForm />
      <FooterAuth
        link="/register"
        text="Não tem uma conta?"
        buttonText="Criar Conta"
      />
    </AuthContainer>
  );
};
