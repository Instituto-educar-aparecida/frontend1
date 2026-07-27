import { useMobile } from "@/hooks/use-mobile";
import type { IconType } from "react-icons";
import { NavLink, Link } from "react-router";

export interface IItemSidebar {
  title: string;
  to: string;
  icon: IconType;
}

export function ItemSidebar({ to, icon: Icon, title }: IItemSidebar) {
  const isOpen = useMobile();

  const content = (isActive: boolean) => (
    <li className={`flex gap-2 items-center py-2 border-r-2 cursor-pointer transition-all
      ${isActive
        ? "bg-violet-600/10 border-violet-600 text-violet-400"
        : "border-transparent hover:bg-violet-600/10 hover:border-violet-600 hover:text-violet-600"
      }`}
    >
      <span className="flex flex-row items-center pl-4 gap-2 min-w-13">
        <Icon />
        {isOpen && (
          <span className="text-sm font-medium whitespace-nowrap">
            {title}
          </span>
        )}
      </span>
    </li>
  );

  if (to === "#") {
    return <Link to="#">{content(false)}</Link>;
  }

  return (
    <NavLink to={to}>
      {({ isActive }) => content(isActive)}
    </NavLink>
  );
}
