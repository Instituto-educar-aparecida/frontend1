import { useThemeStore } from "@/store/use-theme-store";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function ThemeToggle() {
  const { theme, toggle } = useThemeStore();
  
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full border border-white/10
                 hover:bg-white/10 transition-all duration-200
                 text-gray-200"
      title={theme === "dark" ? "Mudar para claro" : "Mudar para escuro"}
    >
      {theme === "dark"
        ? <MdLightMode size={18} />
        : <MdDarkMode size={18} />}
    </button>
  );
}
