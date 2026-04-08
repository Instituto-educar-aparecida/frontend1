import { useState, useEffect } from "react";

export const useMobile = (
  mobileBreakpoint: number = 700,
  initialOpen: boolean = true,
) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);

    setIsOpen(!mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsOpen(!e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mobileBreakpoint]);

  return isOpen;
};
