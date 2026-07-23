import { LuGraduationCap } from "react-icons/lu";
import { Separator } from "../separator";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useMobile } from "@/hooks/use-mobile";
import { ItemSidebar } from "./item-sidebar";
import { sideBarItems } from "./types/items-types";

type Role = "ADMIN" | "STUDENT" | "INSTRUCTOR" | "SECRETARIA";

interface SidebarProps {
  role: Role;
}

export function Sidebar({ role }: SidebarProps) {
  const isOpen = useMobile();
  const items = sideBarItems[0];

  const menuItems =
    role === "ADMIN"
      ? items.admin
      : role === "INSTRUCTOR"
        ? items.teacher
        : items.student;

  const sectionLabel =
    role === "ADMIN"
      ? "PAINEL ADMIN"
      : role === "INSTRUCTOR"
        ? "MENU DO PROFESSOR"
        : "MENU PRINCIPAL";

  return (
    <aside
      className={`bg-secondary text-gray-300 border-r border-gray-200/10 flex flex-col
        ${!isOpen ? "w-12 max-w-16" : "w-50 max-w-60"} transition-all duration-320 ease-in-out`}
    >
      <header
        className={`z-10 border-b border-white/10 h-17.5
          ${isOpen ? "relative pl-4 pt-4 pb-4" : "relative pl-2 pt-4 pb-4 pr-5"}`}
      >
        <div className="flex items-center gap-2">
          <div className="bg-linear-to-br from-violet-300 to-violet-900 p-2 rounded-lg shadow-lg shadow-violet-400/20 text-gray-200">
            <LuGraduationCap />
          </div>
          {isOpen && (
            <div className="flex flex-col">
              <h1 className="font-bold text-sm">INSTITUTO</h1>
              <span className="text-caption text-violet-600 font-semibold">
                Educar
              </span>
            </div>
          )}
        </div>
      </header>

      <div className="flex justify-between flex-1 flex-col overflow-hidden">
        <nav>
          {isOpen && (
            <div className="pb-3 pt-3">
              <span className="text-label font-bold pl-4">{sectionLabel}</span>
            </div>
          )}
          <ul className="space-y">
            {menuItems.map((item) => (
              <ItemSidebar
                key={item.id}
                title={item.title}
                to={item.to}
                icon={item.icon}
              />
            ))}
          </ul>

          {isOpen && (
            <div className="pb-3 pt-3">
              <span className="text-label font-bold pl-4">CONFIGURAÇÕES</span>
            </div>
          )}
          <ItemSidebar title="Ajuda" to="#" icon={IoMdHelpCircleOutline} />
          <ItemSidebar title="Configurações" to="#" icon={IoSettingsOutline} />
        </nav>

        {isOpen && role === "STUDENT" && (
          <div>
            <Separator />
            <footer className="p-4 overflow-hidden">
              <div className="bg-white/5 p-4 rounded-2xl h-24">
                <span className="text-label font-bold leading-3.5">
                  PLANO DE APRENDIZADO
                </span>
                <progress
                  value={6}
                  max={10}
                  className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden appearance-none border-0 shadow-none progress-smooth
                    [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:rounded-full
                    [&::-webkit-progress-value]:bg-linear-to-r [&::-webkit-progress-value]:from-violet-600
                    [&::-webkit-progress-value]:to-violet-600 [&::-webkit-progress-value]:rounded-full
                    [&::-moz-progress-bar]:bg-violet-600 [&::-moz-progress-bar]:rounded-full"
                />
                <span className="text-label font-normal">
                  24 de 30 dias concluídos
                </span>
              </div>
            </footer>
          </div>
        )}
      </div>
    </aside>
  );
}
