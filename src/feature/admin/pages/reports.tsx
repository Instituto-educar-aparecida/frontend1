import { MdBarChart, MdDownload } from "react-icons/md";

const reports = [
  { title: "Desempenho Geral da Plataforma", desc: "Visão geral de usuários, cursos e engajamento." },
  { title: "Relatório de Usuários", desc: "Listagem completa de alunos e professores." },
  { title: "Relatório de Cursos", desc: "Status, matrículas e conclusões por curso." },
  { title: "Engajamento por Módulo", desc: "Taxa de conclusão por módulo e aula." },
];

export default function AdminReportsPage() {
  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Relatórios</h1>
          <p className="text-sm text-gray-400 mt-1">Gere e exporte relatórios detalhados da plataforma.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reports.map((r) => (
            <div key={r.title} className="bg-secondary rounded-2xl p-5 border border-white/5">
              <div className="flex items-start justify-between gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                  <MdBarChart size={20} className="text-violet-400" />
                </div>
                <button className="text-xs px-3 py-1.5 rounded-lg bg-violet-600/20 text-violet-400 hover:bg-violet-600/30 transition-all flex items-center gap-1 flex-shrink-0">
                  <MdDownload size={14} /> Baixar
                </button>
              </div>
              <p className="text-sm font-semibold text-gray-100 mt-3 mb-1">{r.title}</p>
              <p className="text-xs text-gray-400">{r.desc}</p>
              <p className="text-xs text-gray-600 mt-3">Disponível na versão 1.1</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
