import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { MdArrowBack, MdPlayCircle, MdAdd } from "react-icons/md";

interface Lesson {
  id: string;
  title: string;
  video_url: string | null;
  description: string | null;
}

interface ModuleDetail {
  id: string;
  name: string;
  description: string;
  lessons: Lesson[];
}

export default function ModuleDetailPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["instructor-courses-modules"],
    queryFn: async () => {
      const res = await api.get("/instructors/courses");
      const list = res.data.data;
      const details = await Promise.all(
        list.map((c: any) => api.get(`/courses/${c.id}`).then(r => r.data.data))
      );
      return details;
    },
  });

  const mod: ModuleDetail | undefined = courses
    .flatMap((c: any) => c.modules || [])
    .find((m: any) => String(m.id) === String(moduleId));

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => navigate("/professor/modules")}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-all mb-6"
        >
          <MdArrowBack size={18} /> Voltar para Módulos
        </button>

        {isLoading ? (
          <p className="text-gray-400">Carregando...</p>
        ) : !mod ? (
          <p className="text-gray-400">Módulo não encontrado.</p>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-100">{mod.name}</h1>
              <p className="text-sm text-gray-400 mt-1">{mod.description}</p>
            </div>

            <div className="bg-secondary rounded-2xl p-5 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-gray-100">
                  Aulas — {mod.lessons.length} total
                </p>
                <button
                  onClick={() => navigate("/professor/lessons")}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-violet-600/20 text-violet-400 hover:bg-violet-600/30 transition-all"
                >
                  <MdAdd size={14} /> Nova Aula
                </button>
              </div>

              {mod.lessons.length === 0 ? (
                <div className="text-center py-10">
                  <MdPlayCircle size={36} className="text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Nenhuma aula neste módulo ainda.</p>
                  <button
                    onClick={() => navigate("/professor/lessons")}
                    className="mt-3 text-xs text-violet-400 hover:text-violet-300 transition-all"
                  >
                    Adicionar primeira aula
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {mod.lessons.map((lesson, i) => (
                    <div key={lesson.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center text-xs font-bold text-violet-400 flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-200 font-medium truncate">{lesson.title}</p>
                        {lesson.description && (
                          <p className="text-xs text-gray-500 truncate">{lesson.description}</p>
                        )}
                      </div>
                      {lesson.video_url && (
                        <a
                          href={lesson.video_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-violet-400 hover:text-violet-300 transition-all flex-shrink-0"
                        >
                          Ver video
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
