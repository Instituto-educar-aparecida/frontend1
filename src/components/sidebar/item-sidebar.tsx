import { useMobile } from "@/hooks/use-mobile";
import type { IconType } from "react-icons";
import { Link } from "react-router";

export interface IItemSidebar {
  title: string;
  to: string;
  icon: IconType;
}

export function ItemSidebar({ to, icon: Icon, title }: IItemSidebar) {
  const isOpen = useMobile();
  return (
    <Link to={to}>
      <li className="flex gap-2 items-center py-2 border-r-2 border-transparent  hover:bg-violet-600/10 active:violet-600 active:text-violet-600 hover:border-violet-600 hover:text-violet-600 cursor-pointer  transition-all">
        <span className="flex flex-row  items-center pl-4  gap-2 min-w-13">
          <Icon />
          {isOpen && (
            <span className="text-sm font-medium whitespace-nowrap">
              {title}
            </span>
          )}
        </span>
      </li>
    </Link>
  );
}
