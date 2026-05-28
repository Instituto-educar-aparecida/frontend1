import {  LuTimer } from "react-icons/lu";
import { MdMenuBook,  } from "react-icons/md";

interface CourseInfoProps {
  title: string;
  modules: number;
  duration: string;
}

export function CourseInfo({ title, modules, duration }: CourseInfoProps) {
  return (
    <div className="p-6">
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-600 transition-colors">
        {title}
      </h3>
      <div className="flex items-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">
            <MdMenuBook />
          </span>
          {modules} Módulos
        </span>
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">
            <LuTimer/>
          </span>
          {duration} totais
        </span>
      </div>
    </div>
  );
}
