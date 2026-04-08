import { useLogin } from "../hooks/useLogin";

export const LoginForm = () => {
  const loginMutation = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Envia para o seu Backend (5173) via useLogin
    loginMutation.mutate(data);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Portal Instituto Educar</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br/>
          <input name="email" type="email" required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Senha:</label><br/>
          <input name="senha" type="password" required />
        </div>
        <button 
          type="submit" 
          disabled={loginMutation.isPending}
          style={{ width: '100%', padding: '10px', backgroundColor: '#6366f1', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          {loginMutation.isPending ? "Entrando..." : "Entrar"}
        </button>
      </form>
      {loginMutation.isError && <p style={{ color: 'red' }}>Usuário ou senha incorretos!</p>}
      <p>Não tem conta? <a href="/register">Cadastre-se aqui</a></p>
    </div>
  );
};

