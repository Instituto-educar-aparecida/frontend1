import type { IconType } from "react-icons";
import { cn } from "../lib/utils";

export interface IIconCard {
  icon: IconType;
  className?: string;
  status?: string;
}

export default function IconCard({
  icon: Icon,
  status,
  className,
  ...props
}: IIconCard) {
  return (
    <div className={cn("flex flex-row justify-between items-start gap-2")}>
      <div
        className={cn(
          "w-8 flex justify-center items-center h-8 rounded-md",
          className,
        )}
        {...props}
      >
        <Icon size={19} />
      </div>
      <span className={cn("py-1 px-2 text-xs font-bol rounded-sm", className)}>
        {status}
      </span>
    </div>
  );
}
