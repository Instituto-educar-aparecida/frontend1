import { MdArrowBack, MdExploreOff } from "react-icons/md";
import { Link } from "react-router";

// src/pages/NotFoundPage.tsx - Versão sem scroll
export default function NotFoundPage() {
  return (
    <div className="h-screen w-screen flex flex-col bg-background text-on-background selection:bg-primary/30 overflow-hidden">
      {/* Conteúdo principal ocupa toda altura disponível */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 relative">
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]"></div>

        <div className="max-w-2xl w-full text-center z-10 flex flex-col items-center justify-center flex-1">
          {/* Icon - Reduzido para caber melhor */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 group-hover:bg-primary/30 transition-all duration-500"></div>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full glass-card flex items-center justify-center border border-gray-400/10 shadow-[0px_20px_40px_rgba(0,0,0,0.12)]">
                <span
                  className="material-symbols-outlined text-6xl md:text-7xl text-violet-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                  style={{ fontVariationSettings: "'wght' 200" }}
                >
                  <MdExploreOff />
                </span>
              </div>
            </div>
          </div>

          {/* Conteúdo central */}
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-highest text-violet-400 text-xs font-semibold tracking-wider uppercase border border-gray-400/10">
              Erro 404
            </span>
            <h1 className="text-3xl text-gray-400 md:text-5xl font-bold tracking-tight">
              Opa! Página não encontrada.
            </h1>
            <p className="text-base md:text-lg max-w-md mx-auto leading-relaxed text-gray-300">
              O conteúdo que você procura não existe ou foi movido.
            </p>
          </div>

          {/* Botão - Sempre visível */}
          <div className="mt-8 shrink-0">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-linear-to-r from-violet-600 to-violet-500 text-white font-semibold text-sm md:text-base shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
            >
              <span className="material-symbols-outlined mr-2 transition-transform group-hover:-translate-x-1">
                <MdArrowBack />
              </span>
              Voltar ao Início
            </Link>
          </div>
        </div>
      </main>

      {/* Footer fixo na base - Sempre visível */}
      <footer className="shrink-0 bg-secondary/70 w-full rounded-t-3xl shadow-[0px_-20px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto gap-4 text-xs">
          <div>
            <span className="font-bold text-violet-300">Instituto Educar</span>
            <span className="text-gray-400 ml-2">© 2026</span>
          </div>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-violet-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-violet-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-violet-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
