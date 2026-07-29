import { useParams, useNavigate } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useRef } from "react";
import api from "@/lib/axios";
import {
  MdArrowBack,
  MdCheckCircle,
  MdLock,
  MdPlayCircle,
  MdWorkspacePremium,
} from "react-icons/md";
import {
  courseStructureService,
  certificateService,
} from "../services/course-structure-service";
import type { StructureLesson } from "../types/course-structure";
import QuizCard from "../components/quiz-card";

const VideoLesson = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const [focusedSection, setFocusedSection] = useState<"lesson" | "quiz">("lesson");

  const { data: structure, isLoading } = useQuery({
    queryKey: ["course-structure", courseId],
    queryFn: () => courseStructureService.get(courseId as string),
    enabled: !!courseId,
  });

  const allLessons: StructureLesson[] =
    structure?.modules.flatMap((m) => m.lessons) ?? [];

  const firstUnlocked =
    allLessons.find((l) => l.status === "AVAILABLE") ??
    allLessons.find((l) => l.status === "COMPLETED") ??
    allLessons[0] ??
    null;

  const currentLesson =
    allLessons.find((l) => String(l.id) === activeLessonId) ?? firstUnlocked;

  const currentModule = structure?.modules.find((m) =>
    m.lessons.some((l) => l.id === currentLesson?.id),
  );

  const completeMutation = useMutation({
    mutationFn: (lesson: StructureLesson) =>
      api.post(`/lessons/${lesson.id}/progress`, {
        watch_seconds: lesson.duration_seconds || 0,
        status: "COMPLETED",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["course-structure", courseId],
      });
    },
  });

  const certificateMutation = useMutation({
    mutationFn: () => certificateService.issue(courseId as string),
    onSuccess: () => {
      alert("Certificado emitido com sucesso!");
    },
    onError: (error: any) => {
      alert(
        error?.response?.data?.message ??
          "Não foi possível emitir o certificado.",
      );
    },
  });

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

  if (!structure) {
    return (
      <div className="flex items-center justify-center h-screen bg-primary">
        <p className="text-gray-400">Curso não encontrado.</p>
      </div>
    );
  }

  const allModulesCompleted = structure.modules.every((m) => {
    const lessonsOk = m.lessons.every((l) => l.status === "COMPLETED");
    const activityOk = !m.activity || m.activity.passed === true;
    return lessonsOk && activityOk;
  });

  return (
    <div className="max-h-screen bg-primary overflow-scroll">
      <div className="border-b border-white/5 px-6 py-3 flex items-center gap-4 bg-primary sticky top-0 z-10">
        <button
          onClick={() => navigate("/student/courses")}
          className="text-gray-400 hover:text-gray-200 transition-all"
        >
          <MdArrowBack size={20} />
        </button>
        <div>
          <p className="text-xs text-violet-400 font-medium uppercase tracking-wide">
            {currentModule?.name}
          </p>
          <h1 className="text-sm font-semibold text-gray-100">
            {structure.course_title}
          </h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
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

          {currentLesson && (
            <div className="bg-secondary rounded-2xl p-5 border border-white/5">
              <h2 className="text-lg font-bold text-gray-100 mb-2">
                {currentLesson.title}
              </h2>
              {currentLesson.description && (
                <p className="text-sm text-gray-400 leading-relaxed">
                  {currentLesson.description}
                </p>
              )}
              {currentLesson.status === "COMPLETED" ? (
                <div className="w-full mt-4 py-3 rounded-xl bg-green-600/10 text-green-400 text-sm font-medium flex items-center justify-center gap-2">
                  <MdCheckCircle size={18} /> Aula concluída
                </div>
              ) : (
                <button
                  onClick={() => completeMutation.mutate(currentLesson)}
                  disabled={completeMutation.isPending}
                  className="w-full mt-4 py-3 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <MdCheckCircle size={18} />
                  {completeMutation.isPending
                    ? "Salvando..."
                    : "Marcar como concluída"}
                </button>
              )}
            </div>
          )}

          {currentModule?.activity && (
            <div ref={quizRef}>
              <QuizCard
                courseId={courseId as string}
                activity={currentModule.activity}
              />
            </div>
          )}

          {allModulesCompleted && (
            <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center border-l-4 border-violet-600">
              <MdWorkspacePremium size={40} className="text-violet-500 mb-3" />
              <h4 className="font-bold text-white mb-2">
                Parabéns, curso concluído!
              </h4>
              <p className="text-xs text-gray-400 mb-4">
                Você concluiu todas as aulas e avaliações deste curso.
              </p>
              <button
                onClick={() => certificateMutation.mutate()}
                disabled={certificateMutation.isPending}
                className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-lg transition-all disabled:opacity-50"
              >
                {certificateMutation.isPending
                  ? "Emitindo..."
                  : "Emitir certificado"}
              </button>
            </div>
          )}
        </div>

        <aside className="lg:col-span-4">
          <div className="glass-card rounded-2xl overflow-hidden sticky top-24">
            <div className="p-4 border-b border-white/10 bg-white/5">
              <h3 className="font-bold text-white text-sm">
                Conteúdo do Curso
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                {allLessons.length} aulas
              </p>
            </div>
            <div className="overflow-y-auto max-h-96 p-3 space-y-1 custom-scrollbar">
              {structure.modules.map((mod) => (
                <div key={mod.id}>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide px-2 py-2">
                    {mod.name}
                  </p>
                  {mod.lessons.map((lesson, i) => {
                    const locked = lesson.status === "LOCKED";
                    const completed = lesson.status === "COMPLETED";
                    const isActive = currentLesson?.id === lesson.id;
                    return (
                      <button
                        key={lesson.id}
                        disabled={locked}
                        onClick={() => {
                          if (!locked) {
                            setActiveLessonId(String(lesson.id));
                            setFocusedSection("lesson");
                          }
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                          isActive && focusedSection === "lesson"
                            ? "bg-violet-600/20 text-violet-300"
                            : locked
                              ? "text-gray-600 cursor-not-allowed opacity-60"
                              : "hover:bg-white/5 text-gray-400"
                        }`}
                      >
                        <span className="text-xs font-medium flex-shrink-0 w-5">
                          {locked ? (
                            <MdLock size={12} />
                          ) : completed ? (
                            <MdCheckCircle size={12} className="text-green-500" />
                          ) : (
                            i + 1
                          )}
                        </span>
                        <span className="text-xs flex-1 truncate">
                          {lesson.title}
                        </span>
                        {isActive && (
                          <MdPlayCircle size={14} className="text-violet-400 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                  {mod.activity && (
                    <button
                      disabled={mod.activity.status === "LOCKED"}
                      onClick={() => {
                        const firstLessonOfModule = mod.lessons[0];
                        if (firstLessonOfModule) {
                          setActiveLessonId(String(firstLessonOfModule.id));
                        }
                        setFocusedSection("quiz");
                        setTimeout(() => {
                          quizRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 50);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs transition-all ${
                        mod.activity.status === "LOCKED"
                          ? "text-gray-600 cursor-not-allowed opacity-60"
                          : focusedSection === "quiz" && currentModule?.id === mod.id
                            ? "bg-violet-600/20 text-violet-300"
                            : "hover:bg-white/5 text-violet-300"
                      }`}
                    >
                      {mod.activity.status === "LOCKED" ? (
                        <MdLock size={12} />
                      ) : (
                        <MdCheckCircle size={12} />
                      )}
                      <span className="flex-1 truncate">
                        {mod.activity.title} (avaliação)
                      </span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <footer className="mt-12 py-10 border-t border-white/5 bg-primary/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Instituto Educar Aparecida. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VideoLesson;
