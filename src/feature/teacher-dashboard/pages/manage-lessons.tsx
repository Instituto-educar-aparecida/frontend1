import { useState } from "react";
import { MdCheckCircle, MdPlayCircle, MdEdit, MdDelete } from "react-icons/md";

const mockLessons = [
  { id: "1", title: "Primeiros passos com Tailwind", module: "FRONTEND", duration: "12:45", status: "ATIVO" },
  { id: "2", title: "React Hooks Avançados", module: "FRONTEND", duration: "24:20", status: "ATIVO" },
  { id: "3", title: "Arquitetura de Dados", module: "BACKEND", duration: "45:10", status: "RASCUNHO" },
];

const statusColor: Record<string, string> = {
  ATIVO: "bg-green/10 text-green",
  RASCUNHO: "bg-yellow/10 text-yellow",
};

export default function ManageLessonsPage() {
  const [form, setForm] = useState({
    title: "",
    module: "",
    videoUrl: "",
    description: "",
  });
  const [saved, setSaved] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = 3;

  const handleSave = () => {
    if (!form.title || !form.module) return;
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setForm({ title: "", module: "", videoUrl: "", description: "" });
    }, 2000);
  };

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Gestão de Conteúdo</h1>
          <p className="text-sm text-gray-400 mt-1">Preencha os dados do conteúdo a ser disponibilizado.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Formulário */}
          <div className="bg-secondary rounded-2xl p-6 border border-white/5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded bg-violet-600/20 flex items-center justify-center">
                <MdPlayCircle size={14} className="text-violet-400" />
              </div>
              <h2 className="text-sm font-semibold text-gray-100">Nova Aula</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Título da Aula</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Ex: Fundamentos de UX Design"
                  className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Módulo do Curso</label>
                <select
                  value={form.module}
                  onChange={(e) => setForm({ ...form, module: e.target.value })}
                  className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
                >
                  <option value="">Selecione um módulo</option>
                  <option value="FRONTEND">Frontend Moderno</option>
                  <option value="BACKEND">Backend Node.js</option>
                  <option value="DESIGN">Design Systems</option>
                  <option value="DEVOPS">DevOps Básico</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">URL do Vídeo</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔗</span>
                  <input
                    value={form.videoUrl}
                    onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
                    placeholder="https://youtube.com/v/..."
                    className="w-full bg-primary border border-white/10 rounded-lg pl-8 pr-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Descrição</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Descreva o que os alunos aprenderão nesta aula..."
                  rows={4}
                  className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all resize-none"
                />
              </div>

              <button
                onClick={handleSave}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-all"
              >
                {saved ? (
                  <><MdCheckCircle size={18} /> Aula salva!</>
                ) : (
                  <><MdPlayCircle size={18} /> Salvar Aula</>
                )}
              </button>
            </div>
          </div>

          {/* Lista de aulas */}
          <div className="bg-secondary rounded-2xl p-6 border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-semibold text-gray-100">Aulas Recentes</h2>
              <span className="text-xs bg-violet-600/20 text-violet-400 px-2 py-0.5 rounded-full">
                {mockLessons.length} total
              </span>
            </div>

            <div className="space-y-3">
              {mockLessons.map((lesson) => (
                <div key={lesson.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <MdPlayCircle size={20} className="text-violet-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-200 font-medium truncate">{lesson.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${statusColor[lesson.status]}`}>
                        {lesson.module}
                      </span>
                      <span className="text-xs text-gray-500">{lesson.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-all">
                      <MdEdit size={16} />
                    </button>
                    <button className="p-1.5 text-gray-500 hover:text-red transition-all">
                      <MdDelete size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
              <span className="text-xs text-gray-500">Página {page} de {totalPages}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  className="text-xs px-3 py-1 rounded-lg bg-white/5 text-gray-400 hover:bg-violet-600/20 transition-all"
                >←</button>
                <button className="text-xs px-3 py-1 rounded-lg bg-violet-600 text-white">{page}</button>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  className="text-xs px-3 py-1 rounded-lg bg-white/5 text-gray-400 hover:bg-violet-600/20 transition-all"
                >→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
