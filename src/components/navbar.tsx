import { useAuthStore } from "@/store/use-auth-store";
import { LuSearch, LuUser } from "react-icons/lu";
import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useLogout } from "@/feature/auth/hooks/use-login";
import { useNavigate } from "react-router";

const roleLabel: Record<string, string> = {
  ADMIN: "Administrador",
  STUDENT: "Estudante",
  INSTRUCTOR: "Professor",
  SECRETARIA: "Secretaria",
};

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAuthStore();
  const logout = useLogout();
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/student/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="h-17.5 bg-primary border-b border-white/8 z-30 flex items-center justify-between px-4 min-[375px]:px-8">
      <div className="relative flex-1 max-w-45 min-[375px]:max-w-md">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl pointer-events-none">
          <LuSearch size={20} className="text-gray-400" />
        </span>
        <input
          className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-violet-600 focus:border-violet-600 outline-none text-gray-200 transition-all"
          placeholder="Pesquisar cursos, aulas..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      <div className="flex items-center gap-2 min-[375px]:gap-6">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors group ml-auto min-[375px]:-mr-5.75">
          <IoMdNotifications size={22} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-primary animate-pulse"></span>
        </button>

        <div className="flex items-center gap-3 pl-3 border-l border-white/10">
          <div className="text-right hidden min-[425px]:block">
            <p className="text-sm font-semibold text-violet-400">
              {user?.name || "Usuário"}
            </p>
            <p className="text-label font-medium text-gray-300 uppercase tracking-wider">
              {roleLabel[user?.role || ""] || ""}
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-violet-500 to-violet-600 border-2 border-violet-500/30 flex items-center justify-center shadow-lg">
            <LuUser className="text-white" size={16} />
          </div>
          <button
            onClick={logout}
            title="Sair"
            className="p-2 text-gray-400 hover:text-red transition-colors"
          >
            <MdLogout size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
