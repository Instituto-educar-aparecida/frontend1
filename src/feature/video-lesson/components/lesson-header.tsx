import { MdCalendarToday, MdCheckCircle, MdSchedule } from "react-icons/md";

const LessonHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-1">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Aula 04: Estruturas de Aprendizado Ativo
        </h2>
        <div className="flex items-center gap-3 mt-2">
          <span className="flex text-gray-400 items-center gap-1 text-gray-500 text-sm">
            <span className=" text-sm">
              <MdCalendarToday />
            </span>
            14 Out, 2023
          </span>
          <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
          <span className="flex text-gray-400 items-center gap-1 text-gray-500 text-sm">
            <span className=" text-sm">
              <MdSchedule />
            </span>
            45 min
          </span>
        </div>
      </div>
      <button className="group flex items-center justify-center gap-2 bg-violet-600 cursor-pointer text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-(--color-violet-600)/20 hover:shadow-(--color-violet-600)/40 active:scale-95 self-start sm:self-auto">
        <span className=" text-xl">
          <MdCheckCircle />
        </span>
        Marcar como concluída
      </button>
    </div>
  );
};

export default LessonHeader;
