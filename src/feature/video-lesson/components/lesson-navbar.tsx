import { BiArrowBack } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";

const LessonNav = () => {
  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-b-white/10 px-4 py-[15.8px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-label font-bold text-violet-600 uppercase tracking-widest">
              Módulo 02
            </span>
            <h1 className="text-base md:text-lg font-bold leading-tight text-white">
              Fundamentos da Educação Moderna
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3">
            <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[65%] h-full bg-violet-600 shadow-violet-400"></div>
            </div>
            <span className="text-xs font-medium text-gray-400">
              65% concluído
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-white/10 relative text-gray-400">
              <span className="material-symbols-outlined">
                <IoMdNotifications size={20} />
              </span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-violet-600 rounded-full border-2 border-primary"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-linear-to-tr from-violet-600 to-violet-400 flex items-center justify-center text-white text-xs font-bold ring-2 ring-violet-600/20">
              GA
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LessonNav;
