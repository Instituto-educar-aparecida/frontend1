import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import api from "@/lib/axios";
import { MdArrowBack, MdCheckCircle, MdLock, MdPlayCircle } from "react-icons/md";

interface Lesson {
  id: string;
  title: string;
  description: string | null;
  video_url: string | null;
  duration_seconds: number;
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

const VideoLesson = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  const { data: course, isLoading } = useQuery<Course>({
    queryKey: ["course-detail", courseId],
    queryFn: async () => {
      const res = await api.get(`/courses/${courseId}`);
      return res.data.data;
    },
    enabled: !!courseId,
  });

  const allLessons = course?.modules.flatMap(m => m.lessons) || [];
  const currentLesson = activeLesson || allLessons[0] || null;

  const getYouTubeEmbed = (url: string) => {
    const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-primary">
        <p className="text-gray-400">Carregando...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen bg-primary">
        <p className="text-gray-400">Curso não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="max-h-screen bg-primary overflow-scroll">
      {/* Nav */}
      <div className="border-b border-white/5 px-6 py-3 flex items-center gap-4 bg-primary sticky top-0 z-10">
        <button onClick={() => navigate("/student/courses")} className="text-gray-400 hover:text-gray-200 transition-all">
          <MdArrowBack size={20} />
        </button>
        <div>
          <p className="text-xs text-violet-400 font-medium uppercase tracking-wide">
            {course.modules[0]?.name}
          </p>
          <h1 className="text-sm font-semibold text-gray-100">{course.title}</h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Player + Info */}
        <div className="lg:col-span-8 space-y-6">

          {/* Player */}
          <div className="rounded-2xl overflow-hidden bg-black aspect-video">
            {currentLesson?.video_url ? (
              (() => {
                const embedUrl = getYouTubeEmbed(currentLesson.video_url);
                return embedUrl ? (
                  <iframe
                    src={embedUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <MdPlayCircle size={48} className="text-violet-400" />
                  </div>
                );
              })()
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <MdPlayCircle size={48} className="text-gray-600" />
              </div>
            )}
          </div>

          {/* Info da aula */}
          {currentLesson && (
            <div className="bg-secondary rounded-2xl p-5 border border-white/5">
              <h2 className="text-lg font-bold text-gray-100 mb-2">{currentLesson.title}</h2>
              {currentLesson.description && (
                <p className="text-sm text-gray-400 leading-relaxed">{currentLesson.description}</p>
              )}
            </div>
          )}
        </div>

        {/* Sidebar de módulos */}
        <aside className="lg:col-span-4">
          <div className="glass-card rounded-2xl overflow-hidden sticky top-24">
            <div className="p-4 border-b border-white/10 bg-white/5">
              <h3 className="font-bold text-white text-sm">Conteúdo do Curso</h3>
              <p className="text-xs text-gray-400 mt-0.5">{allLessons.length} aulas</p>
            </div>
            <div className="overflow-y-auto max-h-96 p-3 space-y-1 custom-scrollbar">
              {course.modules.map((mod) => (
                <div key={mod.id}>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide px-2 py-2">{mod.name}</p>
                  {mod.lessons.map((lesson, i) => (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                        currentLesson?.id === lesson.id
                          ? "bg-violet-600/20 text-violet-300"
                          : "hover:bg-white/5 text-gray-400"
                      }`}
                    >
                      <span className="text-xs font-medium flex-shrink-0 w-5">{i + 1}</span>
                      <span className="text-xs flex-1 truncate">{lesson.title}</span>
                      {currentLesson?.id === lesson.id && (
                        <MdPlayCircle size={14} className="text-violet-400 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <footer className="mt-12 py-10 border-t border-white/5 bg-primary/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2026 Instituto Educar Aparecida. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default VideoLesson;
