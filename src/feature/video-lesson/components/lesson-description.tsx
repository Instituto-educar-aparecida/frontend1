import { MdArrowForwardIos } from "react-icons/md";
import MaterialsGrid from "./materials-grid";

const LessonDescription = () => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/5">
      <div className="p-8">
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-gray-300 leading-relaxed">
            Nesta aula, exploramos profundamente como as estruturas de
            aprendizado ativo podem transformar a retenção de conhecimento na
            sala de aula moderna. Veremos exemplos práticos de implementação e
            estudos de caso de sucesso no Instituto Educar.
          </p>
          <h4 className="text-white font-bold mt-6 mb-4">
            O que você vai aprender:
          </h4>
          <ul className="space-y-3 mt-2">
            <li className="flex items-start gap-3 text-gray-300">
              <span className="material-symbols-outlined text-violet-600 text-sm mt-1">
                <MdArrowForwardIos />
              </span>
              Teoria da aprendizagem experiencial e seus pilares fundamentais.
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="material-symbols-outlined text-violet-600 text-sm mt-1">
                <MdArrowForwardIos />
              </span>
              Técnicas de gamificação aplicadas ao ensino básico para
              engajamento.
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="material-symbols-outlined text-violet-600 text-sm mt-1">
                <MdArrowForwardIos />
              </span>
              Ferramentas digitais essenciais para o suporte docente no dia a
              dia.
            </li>
          </ul>
        </div>

        <MaterialsGrid />
      </div>
    </div>
  );
};

export default LessonDescription;
