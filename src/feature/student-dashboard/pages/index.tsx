import { IoBookOutline } from "react-icons/io5";
import { FaRankingStar } from "react-icons/fa6";
import { LiaHourglass } from "react-icons/lia";
import { MdPlayCircle, MdStar } from "react-icons/md";
import { useStudentDashboard } from "../hooks/use-student-dashboard";
import { useAuthStore } from "@/store/use-auth-store";
import { FabButton } from "../components/fa-button";

const StudentDashboard = () => {
  const { data, isLoading } = useStudentDashboard();
  const { user } = useAuthStore();

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">
            Olá, {user?.name || "Aluno"}! 👋
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Continue seu aprendizado de onde você parou.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-secondary rounded-2xl p-5 border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl text-green bg-green/10">
                <IoBookOutline size={20} />
              </span>
              <span className="text-xs text-gray-400">Em andamento</span>
            </div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Cursos Ativos</p>
            <p className="text-2xl font-bold text-gray-100">
              {isLoading ? "..." : data?.resumo.cursos_ativos ?? 0}
            </p>
          </div>

          <div className="bg-secondary rounded-2xl p-5 border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl text-yellow bg-yellow/10">
                <FaRankingStar size={20} />
              </span>
              <span className="text-xs text-gray-400">Total</span>
            </div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Cursos Concluídos</p>
            <p className="text-2xl font-bold text-gray-100">
              {isLoading ? "..." : data?.resumo.cursos_concluidos ?? 0}
            </p>
          </div>

          <div className="bg-secondary rounded-2xl p-5 border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl text-violet-300 bg-violet-500/20">
                <LiaHourglass size={20} />
              </span>
              <span className="text-xs text-gray-400">Este mês</span>
            </div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Horas de Estudo</p>
            <p className="text-2xl font-bold text-gray-100">
              {isLoading ? "..." : `${data?.resumo.horas_totais ?? 0}h`}
            </p>
          </div>
        </div>

        {/* Cursos em progresso */}
        <div className="bg-secondary rounded-2xl p-5 border border-white/5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-gray-100">Seu Progresso</p>
            <button className="text-xs text-violet-400 hover:text-violet-300 transition-all">
              Ver todos os cursos
            </button>
          </div>

          {isLoading ? (
            <p className="text-center text-gray-400 py-8 text-sm">Carregando...</p>
          ) : data?.cursos_ativos.length === 0 ? (
            <div className="text-center py-8">
              <MdPlayCircle size={36} className="text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Nenhum curso em andamento.</p>
              <button className="mt-3 text-xs text-violet-400 hover:text-violet-300 transition-all">
                Explorar cursos →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data?.cursos_ativos.map((course) => (
                <div key={course.id} className="bg-primary rounded-xl p-4 border border-white/5">
                  <div className="h-24 bg-violet-600/20 rounded-lg flex items-center justify-center mb-3">
                    <MdPlayCircle size={32} className="text-violet-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-200 mb-2">{course.title}</p>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Progresso</span>
                    <span className="text-violet-400 font-semibold">{Math.round(course.progress_percentage)}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-600 rounded-full"
                      style={{ width: `${course.progress_percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {course.completed_lessons} de {course.total_lessons} aulas concluídas
                  </p>
                  <button className="w-full mt-3 py-2 rounded-lg bg-violet-600/20 text-violet-400 text-xs font-medium hover:bg-violet-600/30 transition-all">
                    Continuar Aula
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Certificados */}
        {data?.certificados && data.certificados.length > 0 && (
          <div className="bg-secondary rounded-2xl p-5 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-gray-100">Certificados</p>
            </div>
            <div className="space-y-3">
              {data.certificados.map((cert: any) => (
                <div key={cert.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <MdStar size={20} className="text-yellow" />
                  <p className="text-sm text-gray-200">{cert.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      <FabButton />
    </div>
  );
};

export default StudentDashboard;
