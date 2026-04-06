import type { IconType } from "react-icons";

interface IButton {
  title: string;
  icon: IconType;
}

export function Button({ title, icon: Icon, ...props }: IButton) {
  return (
    <button
      {...props}
      type="submit"
      className="w-full py-3 bg-violet-400 hover:bg-violet-500 disabled:opacity-50 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/40 transition-all duration-200 flex items-center justify-center gap-2 text-sm cursor-pointer"
    >
      <span>{title}</span>
      <Icon className="text-lg group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
