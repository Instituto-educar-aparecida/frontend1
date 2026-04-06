import type { IconType } from "react-icons";
import { MdCheck, MdLock, MdPlayArrow } from "react-icons/md";

interface LessonItemProps {
  completed?: boolean;
  active?: boolean;
  locked?: boolean;

  title: string;
  duration: string;
}

const LessonItem = ({
  completed,
  active,
  locked,

  title,
  duration,
}: LessonItemProps) => {
  const baseClasses =
    "flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-colors";
  const activeClasses = active
    ? "bg-[var(--color-violet-600)]/10  border-[var(--color-violet-600)]/30 relative overflow-hidden"
    : "";
  const completedClasses = completed ? "text-gray-400" : "";

  return (
    <div
      className={`${baseClasses} ${activeClasses} ${completedClasses} 
        
        ${active && "border-l-4 border-violet-600"} 
        ${locked ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg ${
          completed
            ? "bg-green/10 text-green"
            : active
              ? "bg-violet-600 text-white shadow-violet-600/10"
              : locked && "bg-white/5 text-gray-400  "
        }`}
      >
        <span className={`  text-sm font-bold ${completed ? "" : "fill-1"}`}>
          {completed ? <MdCheck /> : locked ? <MdLock /> : <MdPlayArrow />}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium truncate transition-colors ${
            active
              ? "text-white font-bold"
              : completed
                ? "text-gray-500 line-through"
                : "text-gray-300 group-hover:text-white"
          }`}
        >
          {title}
        </p>
        <p
          className={`text-label font-mono ${
            active
              ? "text-violet-600 font-bold uppercase tracking-tighter "
              : "text-gray-400"
          }`}
        >
          {!active && duration} {active && " Assistindo agora"}
        </p>
      </div>
    </div>
  );
};

export default LessonItem;
