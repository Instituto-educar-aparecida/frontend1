import { StatsCard } from "@/components/CardStats/stats-card";
import { HeaderTeacher } from "../components/header-teacher";
import { RecentActivitySection } from "../components/recent-activity";
import { LuPlay } from "react-icons/lu";
import {
  MdOutlinePeople,
  MdOutlineStackedLineChart,
  MdOutlineVideoLibrary,
} from "react-icons/md";

export default function TeacherDashboard() {
  return (
    <div className="glass-card flex items-center flex-col py-5 overflow-auto h-screen">
      <HeaderTeacher />
      <div className=" px-5 flex flex-row gap-4 py-11 w-full">
        <StatsCard
          status="+3 esta semana"
          icon={MdOutlineVideoLibrary}
          description="42"
          title="SUAS AULAS"
          className="text-green bg-green/10"
        />
        <StatsCard
          status="+12%"
          icon={MdOutlineStackedLineChart}
          description="87.5"
          title="ENGAJAMENTO"
          className="text-violet-300 bg-violet-400/10"
        />
        <StatsCard
          status="Total de alunos"
          icon={MdOutlinePeople}
          description="1,284"
          title="ALUNOS ATIVOS"
          className="text-yellow bg-yellow/10"
        />
      </div>
      <RecentActivitySection />
    </div>
  );
}
