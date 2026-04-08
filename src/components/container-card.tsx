import type React from "react";
import { cn } from "../lib/utils"; // assumindo que você tem utilidade cn para className

interface IContainerCard {
  children: React.ReactNode;
  className?: string; // opcional é melhor
}

export default function ContainerCard({
  children,
  className = "",
}: IContainerCard) {
  return (
    <article
      className={cn(
        "rounded-[10px] flex flex-col bg-secondary border-white/10 border  ",
        className,
      )}
    >
      {children}
    </article>
  );
}
