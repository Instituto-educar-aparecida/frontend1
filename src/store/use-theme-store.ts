import { create } from "zustand";

type Theme = "dark" | "light";

interface ThemeStore {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

const savedTheme = (localStorage.getItem("theme") as Theme) ?? "dark";
applyTheme(savedTheme);

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: savedTheme,
  
  toggle: () =>
    set((state) => {
      const next = state.theme === "dark" ? "light" : "dark";
      applyTheme(next);
      return { theme: next };
    }),
  setTheme: (t) =>
    set(() => {
      applyTheme(t);
      return { theme: t };
    }),
}));
