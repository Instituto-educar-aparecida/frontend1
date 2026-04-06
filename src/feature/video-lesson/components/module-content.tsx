import { MdCheck } from "react-icons/md";
import LessonItem from "./lesson-item";
import NextLesson from "./next-lesson";

const ModuleContent = () => {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-6">
      <div className="glass-card rounded-2xl overflow-hidden flex flex-col max-h-[calc(100vh-140px)] sticky top-24">
        <div className="p-6 border-b border-white/10 bg-white/5">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-white">Conteúdo do Módulo</h3>
            <span className="text-label font-bold text-gray-300 bg-white/10 px-2 py-1 rounded-md uppercase tracking-wider">
              12 aulas
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Módulo 02: Fundamentos Modernos
          </p>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-2 max-h-100">
          <LessonItem
            completed
            title="01. Introdução ao Curso"
            duration="10:00"
          />
          <LessonItem
            completed
            title="02. História da Educação"
            duration="25:30"
          />
          <LessonItem
            active
            title="04. Estruturas de Aprendizado Ativo"
            duration="45:00"
          />
          <LessonItem
            locked
            title="05. Avaliação Continuada"
            duration="18:45"
          />
          <LessonItem
            locked
            title="06. Ferramentas Digitais I"
            duration="42:10"
          />
        </div>

        <NextLesson />
      </div>
    </aside>
  );
};

export default ModuleContent;
