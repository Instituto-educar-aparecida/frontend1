import { LuGraduationCap } from "react-icons/lu";
import { Link } from "react-router";

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 min-[375px]:px-6 md:px-13 bg-primary/70 backdrop-blur-2xl bg-linear-to-b from-primary/20 to-primary/80 border-b border-primary/30 shadow-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto h-20">
        <div className="flex items-center gap-3">
          <div className="bg-linear-to-br from-violet-300 to-violet-900 p-2 rounded-lg  shadow-lg shadow-violet-400/20 text-gray-200">
            <LuGraduationCap />
          </div>
          <span className="text-base min-[375px]:text-lg md:text-xl font-bold tracking-tight text-gray-100 font-headline">
            Instituto Educar
          </span>
        </div>

        <div className="hidden md:flex text-gray-50 items-center gap-8 font-inter antialiased text-sm font-medium tracking-wide">
          <Link
            className="hover:text-violet-100 font-semibold hover:border-b-2 hover:border-violet-100 pb-1"
            to="/"
          >
            Início
          </Link>
          <Link
            to="#"
            className="hover:text-violet-100 font-semibold hover:border-b-2 hover:border-violet-100 pb-1"
          >
            Sobre
          </Link>
          <Link
            to="#"
            className="hover:text-violet-100 font-semibold hover:border-b-2 hover:border-violet-100 pb-1"
          >
            Cursos
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 rounded-3xl bg-linear-to-br from-violet-700 to-violet-50 text-violet-800 font-semibold active:scale-95 duration-200 ease-out">
            <Link to="login">Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
