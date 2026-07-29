import { MdPeople, MdPlayCircle, MdAccessTime, MdMoreVert, MdSchool, MdBook } from "react-icons/md";
import { useAdminDashboard } from "../hooks/use-admin-dashboard";
import { useAdminUsers } from "@/feature/admin/users/hooks/use-admin-users";

const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const weekValues = [40, 65, 35, 80, 55, 70, 30];

export default function AdminDashboard() {
  const { data: dashboard, isLoading } = useAdminDashboard();
  const { data: users = [] } = useAdminUsers();

  const recentUsers = users.slice(0, 3);

  const stats = [
    {
      icon: MdPeople,
      label: "Total de Usuários",
      value: isLoading ? "..." : dashboard?.overview.total_users || "0",
      sub: "Alunos & Profs",
      trend: "+12%",
      color: "text-blue bg-blue/10",
    },
    {
      icon: MdPlayCircle,
      label: "Aulas Ativas",
      value: isLoading ? "..." : dashboard?.overview.approved_courses || "0",
      sub: "Cursos aprovados",
      trend: "+8%",
      color: "text-green bg-green/10",
    },
    {
      icon: MdBook,
      label: "Cursos Pendentes",
      value: isLoading ? "..." : dashboard?.overview.pending_courses || "0",
      sub: "Aguardando aprovação",
      trend: "",
      color: "text-yellow bg-yellow/10",
    },
  ];

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-100">Admin System</h1>
            <p className="text-sm text-gray-400 mt-1">
              Bem-vindo ao centro de controle do Instituto Educar.
            </p>
          </div>
          <button
            onClick={() => window.location.href="/admin/users"}
            className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-all"
          >
            <MdPeople size={18} />
            + Novo Usuário
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-secondary rounded-2xl p-5 border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className={`p-2 rounded-xl ${s.color}`}>
                  <s.icon size={20} />
                </span>
                {s.trend && <span className="text-xs text-green font-semibold">{s.trend}</span>}
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-gray-100">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2 bg-secondary rounded-2xl p-5 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-gray-100">Crescimento da Plataforma</p>
                <p className="text-xs text-gray-400">Engajamento semanal — dados ilustrativos</p>
              </div>
              <div className="flex gap-2">
                {["7D", "30D", "12M"].map((p) => (
                  <button key={p} className="text-xs px-3 py-1 rounded-lg bg-white/5 text-gray-400 hover:bg-violet-600/20 hover:text-violet-400 transition-all">
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-end gap-2 h-32 mt-4">
              {weekValues.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full rounded-t-md bg-violet-600/60 hover:bg-violet-600 transition-all" style={{ height: `${v}%` }} />
                  <span className="text-xs text-gray-500">{weekDays[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary rounded-2xl p-5 border border-white/5">
            <p className="text-sm font-semibold text-gray-100 mb-1">Distribuição</p>
            <p className="text-xs text-gray-400 mb-4">Por categoria de usuário</p>
            <div className="space-y-4">
              {[
                { label: "Alunos", value: Number(dashboard?.overview.total_students ?? 0), total: Number(dashboard?.overview.total_users ?? 1), color: "bg-violet-600" },
                { label: "Professores", value: Number(dashboard?.overview.total_instructors ?? 0), total: Number(dashboard?.overview.total_users ?? 1), color: "bg-green" },
              ].map((d) => {
                const pct = d.total > 0 ? Math.round((d.value / d.total) * 100) : 0;
                return (
                  <div key={d.label}>
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>{d.label}</span>
                      <span className="font-semibold text-gray-200">{d.value} ({pct}%)</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${d.color}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="mt-6 text-xs text-violet-400 hover:text-violet-300 font-semibold transition-all">
              VER DETALHES →
            </button>
          </div>
        </div>

        <div className="bg-secondary rounded-2xl p-5 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-gray-100">Usuários Recentes</p>
              <p className="text-xs text-gray-400">Monitoramento em tempo real de novos registros.</p>
            </div>
            <input
              placeholder="Filtrar..."
              className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 outline-none focus:border-violet-600 transition-all"
            />
          </div>

          {isLoading ? (
            <p className="text-center text-gray-400 py-4 text-sm">Carregando...</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-500 uppercase border-b border-white/5">
                  <th className="text-left pb-3 font-medium">Usuário</th>
                  <th className="text-left pb-3 font-medium">Função</th>
                  <th className="text-left pb-3 font-medium">Status</th>
                  <th className="text-left pb-3 font-medium">Cadastro</th>
                  <th className="text-left pb-3 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-white/5 transition-all">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-violet-600/30 flex items-center justify-center text-xs font-bold text-violet-300">
                          {u.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-gray-200 font-medium text-xs">{u.name}</p>
                          <p className="text-gray-500 text-xs">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-xs text-gray-400">{u.role}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${u.active ? "bg-green/10 text-green" : "bg-red/10 text-red"}`}>
                        {u.active ? "Ativo" : "Inativo"}
                      </span>
                    </td>
                    <td className="py-3 text-xs text-gray-400">
                      {new Date(u.created_at).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="py-3">
                      <button className="text-gray-500 hover:text-gray-300 transition-all">
                        <MdMoreVert size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
            <span className="text-xs text-gray-500">
              Exibindo {recentUsers.length} de {users.length} registros
            </span>
            <div className="flex gap-2">
              <button className="text-xs px-3 py-1 rounded-lg bg-white/5 text-gray-400 hover:bg-violet-600/20 transition-all">←</button>
              <button className="text-xs px-3 py-1 rounded-lg bg-violet-600 text-white">1</button>
              <button className="text-xs px-3 py-1 rounded-lg bg-white/5 text-gray-400 hover:bg-violet-600/20 transition-all">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
