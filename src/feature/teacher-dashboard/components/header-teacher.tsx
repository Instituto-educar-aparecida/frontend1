import { Moon, Plus } from "lucide-react";

export const HeaderTeacher = () => {
  return (
    <header className="flex items-center justify-between relative self-stretch  px-5  ">
      <div className="inline-flex flex-col items-start  relative flex-[0_0_auto]">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Olá, Prof. Ricardo!
          </h1>
        </div>
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <p className="text-body text-gray-400 leading-relaxed">
            Bem-vindo ao seu painel de gestão educacional.
          </p>
        </div>
      </div>

      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
        {/* Theme Toggle */}
        <button className="inline-flex flex-col justify-center p-2 flex-[0_0_auto] rounded-xl border border-white/14 glass-card hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all duration-300 items-center cursor-pointer">
          <Moon className="w-4 h-4 text-gray-400 hover:text-violet-400 transition-colors" />
        </button>

        {/* CTA Button */}
        <button className="group all-[unset] cursor-pointer box-border inline-flex gap-2 px-6 py-3 flex-[0_0_auto] bg-violet-600 hover:bg-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/30 rounded-xl items-center relative shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
          {/* Shine effect */}
          <div className=" inset-0 bg-linear-to-r from-white/10 via-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 absolute top-1 left-2 w-32 h-8 animate-shimmer" />

          <div className="inline-flex flex-col items-center relative z-10 shrink-0">
            <Plus className="w-4.75 h-4.75 text-white" />
          </div>
          <span className="relative z-10 font-bold text-white text-base tracking-wide leading-none whitespace-nowrap">
            Cadastrar Nova Aula
          </span>
        </button>
      </div>
    </header>
  );
};
