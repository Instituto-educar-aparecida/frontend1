import { LuClock1 } from "react-icons/lu";
import { StatsCard } from "../../../components/CardStats/stats-card";
import { HeroSection } from "../components/hero-section";
import { ProgressSection } from "../components/progress-section";
import { FabButton } from "../components/fa-button";
import Activities from "../components/activities";
import CertificateCard from "../components/certificate-card";
import { IoBookOutline } from "react-icons/io5";
import { FaRankingStar } from "react-icons/fa6";
import { LiaHourglass } from "react-icons/lia";
import { useStudentDashboard } from "../hooks/use-student-dashboard";

interface Course {
  id: number | string;
  title: string;
  category: string;
  modules: number;
  duration: string;
  progress: number;
}

const StudentDashboard = () => {
  const dashboardData = useStudentDashboard();
  //console.log(dashboardData);
  const courses: Course[] = [
    {
      id: 1,
      title: "Fundamentos do Design Moderno",
      category: "UX/UI Design",
      modules: 12,
      duration: "24h",
      progress: 75,
    },
    {
      id: 2,
      title: "Mastering React & Tailwind",
      category: "Desenvolvimento",
      modules: 18,
      duration: "42h",
      progress: 30,
    },
  ];

  return (
    <div className=" overflow-scroll h-screen pt-2 px-8 pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats */}
        <div className="flex flex-col md:flex-row xs:gap-3 gap-3 justify-between">
          <StatsCard
            icon={IoBookOutline}
            status="Em andamento"
            className="text-green bg-green/10"
            title="2"
            description="Cursos ativos"
          />
          <StatsCard
            icon={FaRankingStar}
            status="10%"
            className="text-yellow bg-yellow/10"
            title="10"
            description="Cursos concluídos"
          />
          <StatsCard
            icon={LiaHourglass}
            className="text-violet-300 bg-violet-500/20"
            status="+10%"
            title="120h"
            description="Horas de aprendizado"
          />
        </div>

        {/* Progress Section */}
        <ProgressSection courses={courses} />

        {/* Activities & Certificate */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <Activities />
          <CertificateCard />
        </div>
      </div>

      {/* FAB */}
      <FabButton />
    </div>
  );
};

export default StudentDashboard;
