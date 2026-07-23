import { useAuthStore } from "@/store/use-auth-store";
import { Search, User } from "lucide-react";
import { useState } from "react";
import { BiNotification } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { IoNotificationsCircle } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAuthStore();

  const handleSearch = ({ e }: any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="h-17.5 bg-primary border-b border-white/8 z-30 flex items-center justify-between px-4 min-[375px]:px-8">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-45 min-[375px]:max-w-md">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl pointer-events-none">
          <Search size={20} className="text-gray-400" />
        </span>
        <input
          className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-violet-600 focus:border-violet-600 outline-none text-gray-200 transition-all"
          placeholder="Pesquisar cursos, aulas..."
          type="text"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-2 min-[375px]:gap-6">
        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors group ml-auto min-[375px]:-mr-5.75">
          <span className="text-xl">
            <IoMdNotifications size={22} />
          </span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-primary animate-pulse "></span>
          <span className="absolute invisible group-hover:visible bg-red-500 text-white text-xs rounded-full px-1 py-0.5 -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            3 novas
          </span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 xs:gap-3 xs:pl-3 xs:border-l border-white/10 cursor-pointer group">
          <div className="text-right hidden min-[425px]:block">
            <p className="text-sm font-semibold text-violet-600 ">
              {user?.name || "Usuário"}
            </p>
            <p className="text-label font-medium text-gray-300 uppercase tracking-wider">
              {user?.role || "ADMIN"}
            </p>
          </div>
          <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-linear-to-br from-violet-500 to-violet-600 border-2 border-violet-500/30 flex items-center justify-center overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-white text-lg">
              <User />
            </span>
          </div>
        </div>

        {/* Mobile Menu Button - escondido no desktop */}
        {/* <button className="md:hidden p-2 text-gray-400 hover:text-white">
          <span className="material-symbols-outlined text-xl">
            <MdMenu />
          </span>
        </button> */}
      </div>
    </header>
  );
};

export default Navbar;
