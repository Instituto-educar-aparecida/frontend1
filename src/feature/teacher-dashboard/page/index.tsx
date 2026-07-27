import {
  MdOutlineVideoLibrary,
  MdOutlineStackedLineChart,
  MdOutlinePeople,
  MdMoreVert,
  MdAdd,
  MdStar,
} from "react-icons/md";
import { useTeacherDashboard } from "../hooks/use-teacher-dashboard";
import { useAuthStore } from "@/store/use-auth-store";

const mockComments = [
  { initials: "MA", name: "Marcos André", time: "15min", text: "Professor, tive uma dúvida sobre o grid na aula 04. Pode me ajudar?" },
  { initials: "FS", name: "Fernanda Silva", time: "19h", text: "Excelente aula! O exemplo facilitou muito o entendimento do conteúdo." },
  { initials: "GL", name: "Gabriel Lima", time: "13h", text: "Onde posso baixar os assets citados no minuto 12:45?" },
];

export default function TeacherDashboard() {
  const { data, isLoading } = useTeacherDashboard();
  const { user } = useAuthStore();

  const stats = [
    {
      icon: MdOutlineVideoLibrary,
      label: "SEUS CURSOS",
      value: isLoading ? "..." : String(data?.summary.total_courses ?? 0),
      status: "Total de cursos",
      color: "text-green bg-green/10",
    },
    {
      icon: MdOutlineStackedLineChart,
      label: "MATRÍCULAS",
      value: isLoading ? "..." : String(data?.summary.total_enrollments ?? 0),
      status: "Total de alunos",
      color: "text-violet-300 bg-violet-400/10",
    },
    {
      icon: MdStar,
      label: "AVALIAÇÃO MÉDIA",
      value: isLoading ? "..." : Number(data?.summary.average_rating ?? 0).toFixed(1),
      status: "De 5.0",
      color: "text-yellow bg-yellow/10",
    },
  ];

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-100">
              Olá, {user?.name || "Professor"}! 👋
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Bem-vindo ao seu painel de gestão educacional.
            </p>
          </div>
          <button
            onClick={() => window.location.href = "/professor/lessons"}
            className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-all"
          >
            <MdAdd size={18} />
            Cadastrar Nova Aula
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-secondary rounded-2xl p-5 border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className={`p-2 rounded-xl ${s.color}`}>
                  <s.icon size={20} />
                </span>
                <span className="text-xs text-gray-400">{s.status}</span>
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-gray-100">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div className="bg-secondary rounded-2xl p-5 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-gray-100">Meus Cursos</p>
              <button className="text-xs text-violet-400 hover:text-violet-300 transition-all">Ver tudo</button>
            </div>
            {isLoading ? (
              <p className="text-center text-gray-400 py-8 text-sm">Carregando...</p>
            ) : data?.courses.length === 0 ? (
              <div className="text-center py-8">
                <MdOutlineVideoLibrary size={36} className="text-gray-600 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Nenhum curso cadastrado ainda.</p>
                <button
                  onClick={() => window.location.href = "/professor/lessons"}
                  className="mt-3 text-xs text-violet-400 hover:text-violet-300 transition-all"
                >
                  Criar primeiro curso →
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {data?.courses.map((course: any) => (
                  <div key={course.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                      <MdOutlineVideoLibrary size={20} className="text-violet-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-200 font-medium truncate">{course.title}</p>
                      <p className="text-xs text-gray-500">{course.total_enrollments || 0} alunos</p>
                    </div>
                    <button className="text-gray-500 hover:text-gray-300 transition-all">
                      <MdMoreVert size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-secondary rounded-2xl p-5 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-gray-100">Comentários</p>
              <span className="text-xs bg-violet-600 text-white px-2 py-0.5 rounded-full">12 novos</span>
            </div>
            <div className="space-y-4">
              {mockComments.map((c) => (
                <div key={c.name} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-violet-600/30 flex items-center justify-center text-xs font-bold text-violet-300 flex-shrink-0">
                    {c.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs font-medium text-gray-200">{c.name}</p>
                      <p className="text-xs text-gray-500">{c.time}</p>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{c.text}</p>
                    <button className="text-xs text-violet-400 hover:text-violet-300 mt-1 transition-all">Responder</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
