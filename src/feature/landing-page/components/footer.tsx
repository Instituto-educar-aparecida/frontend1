import { LuGraduationCap } from "react-icons/lu";
import { MdMail, MdShare } from "react-icons/md";

// src/features/Footer/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-primary/70 backdrop-blur-2xl bg-linear-to-b from-primary/20 to-primary/80 w-full py-12 border-t border-white/5 font-inter text-xs text-slate-400 px-20 min-[375px]:px-10 leading-relaxed">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-2">
            <div className="bg-linear-to-br from-violet-300 to-violet-900 p-2 rounded-lg  shadow-lg shadow-violet-400/20 text-gray-200">
              <LuGraduationCap />
            </div>
            <span className="text-lg font-bold text-gray-200">
              Instituto Educar
            </span>
          </div>
          <p className="max-w-xs text-center text-gray-300 md:text-left">
            © 2024 Instituto Educar. Transformando vidas através da educação.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-gray-400">
          <a
            className="hover:text-violet-100 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Privacidade
          </a>
          <a
            className="hover:text-violet-100 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Termos de Uso
          </a>
          <a
            className="hover:text-violet-100 transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Contato
          </a>
        </div>

        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors border border-white/5"
            href="#"
          >
            <span className="text-gray-200 text-sm">
              <MdShare />
            </span>
          </a>
          <a
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors border border-white/5"
            href="#"
          >
            <span className="text-gray-200 text-sm">
              <MdMail />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
