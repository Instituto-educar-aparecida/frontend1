import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";
import { MdAdd, MdBook, MdClose, MdCheckCircle } from "react-icons/md";

interface Course {
  id: string;
  title: string;
}

interface Module {
  id: string;
  name: string;
  description: string;
  order: number;
}

export default function TeacherModulesPage() {
  const queryClient = useQueryClient();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", order: "" });
  const [error, setError] = useState("");

  const { data: courses = [], isLoading: loadingCourses } = useQuery<Course[]>({
    queryKey: ["instructor-courses"],
    queryFn: async () => {
      const response = await api.get("/instructors/courses");
      return response.data.data;
    },
  });

  const { data: modules = [], isLoading: loadingModules } = useQuery<Module[]>({
    queryKey: ["course-modules", selectedCourse],
    queryFn: async () => {
      const response = await api.get(`/courses/${selectedCourse}`);
      return response.data.data?.modules || [];
    },
    enabled: !!selectedCourse,
  });

  const createModule = useMutation({
    mutationFn: async () => {
      await api.post(`/courses/${selectedCourse}/modules`, {
        name: form.name,
        description: form.description,
        order: form.order ? Number(form.order) : undefined,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["course-modules", selectedCourse] });
      setShowModal(false);
      setForm({ name: "", description: "", order: "" });
      setError("");
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || "Erro ao criar módulo.");
    },
  });

  const handleSave = () => {
    if (!form.name || !form.description) {
      setError("Preencha nome e descrição.");
      return;
    }
    createModule.mutate();
  };

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-100">Módulos</h1>
            <p className="text-sm text-gray-400 mt-1">Gerencie os módulos dos seus cursos.</p>
          </div>
          {selectedCourse && (
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-all"
            >
              <MdAdd size={18} /> Novo Módulo
            </button>
          )}
        </div>

        {/* Seleciona curso */}
        <div className="bg-secondary rounded-2xl p-5 border border-white/5 mb-6">
          <p className="text-sm font-semibold text-gray-100 mb-3">Selecione um curso</p>
          {loadingCourses ? (
            <p className="text-sm text-gray-400">Carregando...</p>
          ) : courses.length === 0 ? (
            <div className="text-center py-6">
              <MdBook size={36} className="text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Nenhum curso cadastrado ainda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => setSelectedCourse(course.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedCourse === course.id
                      ? "border-violet-600 bg-violet-600/10"
                      : "border-white/5 hover:border-violet-600/30"
                  }`}
                >
                  <p className="text-sm text-gray-200 font-medium">{course.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lista de módulos */}
        {selectedCourse && (
          <div className="bg-secondary rounded-2xl p-5 border border-white/5">
            <p className="text-sm font-semibold text-gray-100 mb-4">Módulos do curso</p>
            {loadingModules ? (
              <p className="text-sm text-gray-400">Carregando...</p>
            ) : modules.length === 0 ? (
              <div className="text-center py-8">
                <MdBook size={36} className="text-gray-600 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Nenhum módulo cadastrado.</p>
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-3 text-xs text-violet-400 hover:text-violet-300 transition-all"
                >
                  Criar primeiro módulo →
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {modules.map((mod) => (
                  <div key={mod.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                    <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center text-xs font-bold text-violet-400">
                      {mod.order || "—"}
                    </div>
                    <div>
                      <p className="text-sm text-gray-200 font-medium">{mod.name}</p>
                      <p className="text-xs text-gray-500">{mod.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal novo módulo */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-secondary border border-white/10 rounded-2xl p-6 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-100">Novo Módulo</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-200">
                <MdClose size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Nome do módulo</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ex: Introdução ao React"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Descrição</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Descreva o conteúdo deste módulo..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all resize-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Ordem (opcional)</label>
                <input
                  type="number"
                  value={form.order}
                  onChange={(e) => setForm({ ...form, order: e.target.value })}
                  placeholder="Ex: 1"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
                />
              </div>

              {error && (
                <p className="text-xs text-red bg-red/10 px-3 py-2 rounded-lg">{error}</p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2 rounded-lg border border-white/10 text-sm text-gray-400 hover:bg-white/5 transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  disabled={createModule.isPending}
                  className="flex-1 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-all disabled:opacity-50"
                >
                  {createModule.isPending ? "Salvando..." : "Criar módulo"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
