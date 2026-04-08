import { routes } from "@/types/routes-front";
import { BiMessageSquare, BiSolidReport } from "react-icons/bi";
import { FaRegPlayCircle } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosPeople, IoMdHelpCircleOutline } from "react-icons/io";
import { IoBookOutline, IoSettingsOutline } from "react-icons/io5";
import { MdBookOnline, MdDashboard, MdPeople } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";

export const sideBarItems = [
  {
    student: [
      {
        id: 1,
        title: "Dashboard",
        to: routes.student.dashboard,
        icon: GoHome,
      },
      {
        id: 2,
        title: "Cursos",
        to: routes.student.courses,
        icon: IoBookOutline,
      },
      {
        id: 3,
        title: "Certificado",
        to: "#",
        icon: RiMedalLine,
      },
    ],
    support: [
      {
        id: 1,
        title: "Ajuda",
        to: "#",
        icon: IoMdHelpCircleOutline,
      },
      {
        id: 2,
        title: "Configurações",
        to: "#",
        icon: IoSettingsOutline,
      },
    ],
    teacher: [
      {
        id: 1,
        title: "Dashboard",
        to: routes.teacher.dashboard,
        icon: GoHome,
      },
      {
        id: 2,
        title: "Minhas aulas",
        to: "#",
        icon: FaRegPlayCircle,
      },
      {
        id: 3,
        title: "Meus alunos",
        to: "#",
        icon: IoIosPeople,
      },
      {
        id: 4,
        title: "Relatórios",
        to: "#",
        icon: BiSolidReport,
      },
      {
        id: 5,
        title: "Comentários",
        to: "#",
        icon: BiMessageSquare,
      },
    ],
    admin: [
      {
        id: 1,
        title: "Dashboard",
        to: routes.admin.dashboard,
        icon: MdDashboard,
      },
      {
        id: 2,
        title: "Gestão de Usuários",
        to: routes.admin.users,
        icon: MdPeople,
      },
      {
        id: 3,
        title: "Cursos e Conteúdos",
        to: "#",
        icon: MdBookOnline,
      },
      {
        id: 4,
        title: "Relatórios",
        to: "#",
        icon: BiSolidReport,
      },
      { id: 5, title: "Sistema", to: "#", icon: IoSettingsOutline },
    ],
  },
];
