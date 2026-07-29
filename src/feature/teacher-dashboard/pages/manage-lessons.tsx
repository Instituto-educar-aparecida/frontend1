import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";
import { MdPlayCircle, MdEdit, MdDelete, MdCheckCircle } from "react-icons/md";

interface Lesson {
  id: string;
  title: string;
  duration_seconds: number | null;
}

interface Module {
  id: string;
  name: string;
  lessons: Lesson[];
}

interface Course {
  id: string;
  title: string;
  modules: Module[];
}

export default function ManageLessonsPage() {
  const queryClient = useQueryClient();
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", video_url: "", description: "" });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ title: "", video_url: "", description: "" });

  const { data: courses = [], isLoading } = useQuery<Course[]>({
    queryKey: ["instructor-courses-full"],
    queryFn: async () => {
      const res = await api.get("/instructors/courses");
      const list = res.data.data;
      const details = await Promise.all(
        list.map((c: Course) => api.get(`/courses/${c.id}`).then(r => r.data.data))
      );
      return details;
    },
  });

  const createLesson = useMutation({
    mutationFn: async () => {
      await api.post(`/modules/${selectedModule}/lessons`, {
        title: form.title,
        video_url: form.video_url,
        description: form.description,
        duration_seconds: 0,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["instructor-courses-full"] });
      setSaved(true);
      setForm({ title: "", video_url: "", description: "" });
      setTimeout(() => setSaved(false), 2000);
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || "Erro ao salvar aula.");
    },
  });

  const deleteLesson = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/lessons/${id}`);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["instructor-courses-full"] }),
  });

  const updateLesson = useMutation({
    mutationFn: async (id: string) => {
      await api.put(`/lessons/${id}`, editForm);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["instructor-courses-full"] });
      setEditingId(null);
    },
    onError: (err: any) => setError(err.response?.data?.message || "Erro ao editar."),
  });

  const handleSave = () => {
    if (!selectedModule) { setError("Selecione um módulo."); return; }
    if (!form.title || !form.video_url || !form.description) { setError("Título, URL do vídeo e descrição são obrigatórios."); return; }
    setError("");
    createLesson.mutate();
  };

  const allModules = courses.flatMap(c =>
    c.modules.map(m => ({ ...m, courseTitle: c.title }))
  );

  const allLessons = allModules.flatMap(m =>
    m.lessons.map(l => ({ ...l, moduleName: m.name }))
  );

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Gestão de Conteúdo</h1>
          <p className="text-sm text-gray-400 mt-1">Crie e gerencie suas aulas.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Formulário */}
          <div className="bg-secondary rounded-2xl p-6 border border-white/5">
            <div className="flex items-center gap-2 mb-6">
              <MdPlayCircle size={18} className="text-violet-400" />
              <h2 className="text-sm font-semibold text-gray-100">Nova Aula</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Módulo *</label>
                <select
                  value={selectedModule || ""}
                  onChange={(e) => setSelectedModule(e.target.value)}
                  className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
                >
                  <option value="">Selecione um módulo</option>
                  {allModules.map(m => (
                    <option key={m.id} value={m.id}>{m.courseTitle} — {m.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Título da Aula *</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Ex: Fundamentos de UX Design"
                  className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">URL do Vídeo</label>
                <input
                  value={form.video_url}
                  onChange={(e) => setForm({ ...form, video_url: e.target.value })}
                  placeholder="https://youtube.com/..."
                  className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Descrição</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Descreva o que os alunos aprenderão..."
                  rows={3}
                  className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all resize-none"
                />
              </div>

              {error && <p className="text-xs text-red bg-red/10 px-3 py-2 rounded-lg">{error}</p>}

              <button
                onClick={handleSave}
                disabled={createLesson.isPending}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-all disabled:opacity-50"
              >
                {saved ? <><MdCheckCircle size={18} /> Aula salva!</> : "Salvar Aula"}
              </button>
            </div>
          </div>

          {/* Lista de aulas */}
          <div className="bg-secondary rounded-2xl p-6 border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-semibold text-gray-100">Aulas Cadastradas</h2>
              <span className="text-xs bg-violet-600/20 text-violet-400 px-2 py-0.5 rounded-full">
                {allLessons.length} total
              </span>
            </div>

            {isLoading ? (
              <p className="text-sm text-gray-400 text-center py-8">Carregando...</p>
            ) : allLessons.length === 0 ? (
              <div className="text-center py-8">
                <MdPlayCircle size={36} className="text-gray-600 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Nenhuma aula cadastrada ainda.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {allLessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                      <MdPlayCircle size={20} className="text-violet-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-200 font-medium truncate">{lesson.title}</p>
                      <p className="text-xs text-gray-500">{lesson.moduleName}</p>
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => { setEditingId(lesson.id); setEditForm({ title: lesson.title, video_url: "", description: "" }); }} className="p-1.5 text-gray-500 hover:text-gray-300 transition-all">
                        <MdEdit size={16} />
                      </button>
                      <button onClick={() => { if(window.confirm("Excluir esta aula?")) deleteLesson.mutate(lesson.id); }} className="p-1.5 text-gray-500 hover:text-red transition-all">
                        <MdDelete size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {editingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.6)" }} onClick={() => setEditingId(null)}>
          <div className="bg-secondary border border-white/10 rounded-2xl p-6 w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-semibold text-gray-100 mb-4">Editar Aula</h2>
            <div className="space-y-4">
              <input value={editForm.title} onChange={(e) => setEditForm({...editForm, title: e.target.value})} placeholder="Título" className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-violet-600" />
              <input value={editForm.video_url} onChange={(e) => setEditForm({...editForm, video_url: e.target.value})} placeholder="URL do vídeo" className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-violet-600" />
              <textarea value={editForm.description} onChange={(e) => setEditForm({...editForm, description: e.target.value})} placeholder="Descrição" rows={3} className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-violet-600 resize-none" />
              <div className="flex gap-3">
                <button onClick={() => setEditingId(null)} className="flex-1 py-2 rounded-lg border border-white/10 text-sm text-gray-400 hover:bg-white/5">Cancelar</button>
                <button onClick={() => updateLesson.mutate(editingId)} disabled={updateLesson.isPending} className="flex-1 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 disabled:opacity-50">Salvar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
