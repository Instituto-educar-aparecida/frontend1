import { MdSkipNext } from "react-icons/md";
import LessonItem from "./lesson-item";

const NextLesson = () => {
  return (
    <div className="p-6 bg-white/2 border-t border-white/10">
      <span className="text-label font-bold text-gray-400 uppercase tracking-widest block mb-3">
        Próxima Aula
      </span>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <LessonItem
            title="05. Avaliação Continuada"
            duration="18:45"
            locked
          />
        </div>
        <button className="shrink-0 p-2.5 bg-violet-600/10 hover:bg-violet-600 text-violet-600 hover:text-white rounded-lg transition-all shadow-md hover:shadow-(--color-violet-600)/25">
          <span className="material-symbols-outlined text-base">
            <MdSkipNext />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NextLesson;
