import { LuGraduationCap } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoBookOutline, IoSettingsOutline } from "react-icons/io5";
import { RiMedalLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { useMobile } from "@/hooks/use-mobile";
import { ItemSidebar } from "./item-sidebar";
import { useLocation } from "react-router";
import { sideBarItems } from "./types/items-types";

export function Sidebar() {
  const isOpen = useMobile();
  const { pathname } = useLocation();
  const ROLE_ROUTES = [
    { prefix: "/professor", key: "teacher" },
    { prefix: "/student", key: "student" },
    { prefix: "/admin", key: "admin" },
  ] as const;
  const currentRole = ROLE_ROUTES.find((route) =>
    pathname.startsWith(route.prefix),
  );
  const itemsToRender = currentRole ? sideBarItems[0]?.[currentRole.key] : [];
  return (
    <aside
      className={`
 bg-secondary text-gray-300   border-r border-gray-200/10 flex flex-col
      ${!isOpen ? "w-12 max-w-16" : "w-50 max-w-60"} transition-all duration-320 ease-in-out
    `}
    >
      <header
        className={`z-10 border-b border-white/10 h-17.5
          min-w-[375px]:relative min-w-[375px]:pl-2 min-w-[375px]:pt-4 min-w-[375px]:pb-4 min-w-[375px]:pr-5
          ${isOpen ? " relative  pl-4 pt-4 pb-4" : "relative pl-2 pt-4 pb-4 pr-5  "}
        `}
      >
        <div className="flex items-center gap-2 ">
          <div className="bg-linear-to-br from-violet-300 to-violet-900 p-2 rounded-lg  shadow-lg shadow-violet-400/20 text-gray-200">
            <LuGraduationCap />
          </div>

          {isOpen && (
            <div className="flex flex-col ">
              <h1 className="font-bold text-sm ">INSTITUTO</h1>
              <span className="text-caption text-violet-600 font-semibold">
                Educar
              </span>
            </div>
          )}
        </div>

        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3.75 z-50 top-6  text-violet-600 -translate-y-1/2 p-1.5rounded-lg hover:bg-violet-600/20 transition-all shrink"
          title={!isOpen ? "Abrir" : "Fechar"}
          disabled
        >
          {isOpen ? <BiChevronLeft /> : <BiChevronRight />}
        </button> */}
      </header>

      <div className="flex justify-between flex-1 flex-col overflow-hidden">
        <nav className="">
          {isOpen && (
            <div className="pb-3 pt-3">
              <span className="text-label font-bold pl-4  ">
                MENU PRINCIPAL
              </span>
            </div>
          )}
          <ul className="space-y ">
            {itemsToRender?.map((item) => (
              <ItemSidebar
                key={item.id}
                title={item.title}
                to={item.to}
                icon={item.icon}
              />
            ))}
          </ul>
          {currentRole?.key === "student" && (
            <>
              {isOpen && (
                <div className="pb-3 pt-3 overflow-hidden">
                  <span className="text-label font-bold pl-4">SUPORTE</span>
                </div>
              )}
              <ItemSidebar title="Ajuda" to="/student/help" icon={IoMdHelpCircleOutline} />
              <ItemSidebar title="Configurações" to="/student/settings" icon={IoSettingsOutline} />
            </>
          )}

        </nav>
      </div>
    </aside>
  );
}
