import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
import { MdCheckCircle, MdBook } from "react-icons/md";
import { useNavigate } from "react-router";

export default function CreateCoursePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    syllabus: "",
    program_content: "",
    workload_hours: "",
    prerequisites: "",
    target_audience: "",
    thumbnail_url: "",
    enrollment_open: true,
  });
  const [error, setError] = useState("");

  const createCourse = useMutation({
    mutationFn: async () => {
      const response = await api.post("/courses", {
        ...form,
        workload_hours: Number(form.workload_hours),
        thumbnail_url: form.thumbnail_url || null,
        prerequisites: form.prerequisites || null,
        target_audience: form.target_audience || null,
      });
      return response.data.data;
    },
    onSuccess: () => {
      navigate("/professor/modules");
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || "Erro ao criar curso.");
    },
  });

  const handleSave = () => {
    if (!form.title || !form.description || !form.syllabus || !form.program_content || !form.workload_hours) {
      setError("Preencha todos os campos obrigatórios.");
      return;
    }
    setError("");
    createCourse.mutate();
  };

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Novo Curso</h1>
          <p className="text-sm text-gray-400 mt-1">Preencha os dados do curso. Após criado, adicione módulos e aulas.</p>
        </div>

        <div className="bg-secondary rounded-2xl p-6 border border-white/5 space-y-5">

          <div>
            <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Título do Curso *</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Ex: Fundamentos do React"
              className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Descrição *</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Descreva o curso em poucas linhas..."
              rows={3}
              className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all resize-none"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Ementa (Syllabus) *</label>
            <textarea
              value={form.syllabus}
              onChange={(e) => setForm({ ...form, syllabus: e.target.value })}
              placeholder="Tópicos que serão abordados no curso..."
              rows={3}
              className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all resize-none"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Conteúdo Programático *</label>
            <textarea
              value={form.program_content}
              onChange={(e) => setForm({ ...form, program_content: e.target.value })}
              placeholder="Detalhamento do conteúdo programático..."
              rows={3}
              className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Carga Horária (horas) *</label>
              <input
                type="number"
                value={form.workload_hours}
                onChange={(e) => setForm({ ...form, workload_hours: e.target.value })}
                placeholder="Ex: 40"
                className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Thumbnail URL</label>
              <input
                value={form.thumbnail_url}
                onChange={(e) => setForm({ ...form, thumbnail_url: e.target.value })}
                placeholder="https://..."
                className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Pré-requisitos</label>
            <input
              value={form.prerequisites}
              onChange={(e) => setForm({ ...form, prerequisites: e.target.value })}
              placeholder="Ex: Conhecimentos básicos de HTML e CSS"
              className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block uppercase tracking-wide">Público-alvo</label>
            <input
              value={form.target_audience}
              onChange={(e) => setForm({ ...form, target_audience: e.target.value })}
              placeholder="Ex: Iniciantes em programação"
              className="w-full bg-primary border border-white/10 rounded-lg px-3 py-2.5 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="enrollment_open"
              checked={form.enrollment_open}
              onChange={(e) => setForm({ ...form, enrollment_open: e.target.checked })}
              className="w-4 h-4 accent-violet-600"
            />
            <label htmlFor="enrollment_open" className="text-sm text-gray-300">Matrículas abertas</label>
          </div>

          {error && (
            <p className="text-xs text-red bg-red/10 px-3 py-2 rounded-lg">{error}</p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => navigate("/professor/dashboard")}
              className="flex-1 py-3 rounded-xl border border-white/10 text-sm text-gray-400 hover:bg-white/5 transition-all"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              disabled={createCourse.isPending}
              className="flex-1 py-3 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {createCourse.isPending ? "Criando..." : (
                <><MdBook size={18} /> Criar Curso</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
