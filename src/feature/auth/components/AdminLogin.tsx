import { useLogin } from "../../auth/hooks/useLogin";
import { FaShieldAlt } from "react-icons/fa"; // Ícone de escudo para o Admin

export const AdminLogin = () => {
  const loginMutation = useLogin();

  const handleAdminLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Chama o seu hook de login (que já manda pro backend porta 5173)
    loginMutation.mutate(data, {
      onSuccess: (res) => {
        // SEGURANÇA: Se logar mas não for admin, a gente expulsa
        if (res.role !== 'admin') {
          localStorage.removeItem('jwt_token');
          alert("Acesso Negado: Esta página é exclusiva para administradores.");
          window.location.href = "/";
        } else {
          window.location.href = "/admin"; // Se for admin, vai pro painel
        }
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary bg-grid-pattern">
      <div className="w-full max-w-sm glass-card p-8 rounded-2xl text-white">
        <div className="flex flex-col items-center mb-6">
          <div className="p-3 bg-red-500/20 rounded-full mb-3">
            <FaShieldAlt className="text-3xl text-red-400" />
          </div>
          <h1 className="text-xl font-bold uppercase tracking-widest">Painel Administrativo</h1>
          <p className="text-gray-400 text-xs mt-1">Área Restrita do Instituto Educar</p>
        </div>

        <form onSubmit={handleAdminLogin} className="space-y-4">
          <input 
            name="email" type="email" placeholder="Email do Admin" required
            className="w-full p-3 bg-secondary rounded-xl border border-white/10"
          />
          <input 
            name="senha" type="password" placeholder="Senha" required
            className="w-full p-3 bg-secondary rounded-xl border border-white/10"
          />
          <button 
            type="submit" 
            className="w-full py-3 bg-red-500 hover:bg-red-600 rounded-xl font-bold transition-all"
          >
            {loginMutation.isPending ? "Validando..." : "Entrar no Painel"}
          </button>
        </form>
      </div>
    </div>
  );
};

