import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
import { MdCheckCircle, MdBook } from "react-icons/md";

interface Course {
  id: string;
  title: string;
  description: string;
  workload_hours: number;
  thumbnail_url: string | null;
}

export const RegistrationClass = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { data: courses = [], isLoading } = useQuery<Course[]>({
    queryKey: ["courses-enrollment"],
    queryFn: async () => {
      const response = await api.get("/courses");
      return response.data.data;
    },
  });

  const enroll = useMutation({
    mutationFn: async (courseId: string) => {
      await api.post("/students/enrollments", { course_id: Number(courseId) });
    },
    onSuccess: () => {
      setSuccess(true);
      setSelected(null);
    },
  });

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Matrícula em Curso</h1>
          <p className="text-sm text-gray-400 mt-1">Selecione um curso para se matricular.</p>
        </div>

        {success && (
          <div className="bg-green/10 border border-green/20 rounded-xl px-4 py-3 mb-6 flex items-center gap-2">
            <MdCheckCircle size={18} className="text-green" />
            <p className="text-sm text-green">Matrícula realizada com sucesso!</p>
          </div>
        )}

        {isLoading ? (
          <p className="text-center text-gray-400 py-12">Carregando cursos...</p>
        ) : courses.length === 0 ? (
          <div className="text-center py-12">
            <MdBook size={48} className="text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400">Nenhum curso disponível para matrícula.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => setSelected(course.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  selected === course.id
                    ? "border-violet-600 bg-violet-600/10"
                    : "border-white/5 bg-secondary hover:border-violet-600/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <MdBook size={22} className="text-violet-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-100">{course.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{course.description}</p>
                    <p className="text-xs text-violet-400 mt-0.5">{course.workload_hours}h de conteúdo</p>
                  </div>
                  {selected === course.id && (
                    <MdCheckCircle size={20} className="text-violet-400 flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {selected && (
          <button
            onClick={() => enroll.mutate(selected)}
            disabled={enroll.isPending}
            className="w-full mt-6 py-3 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition-all disabled:opacity-50"
          >
            {enroll.isPending ? "Matriculando..." : "Confirmar Matrícula"}
          </button>
        )}

        {enroll.isError && (
          <p className="text-xs text-red text-center mt-3">
            {(enroll.error as any)?.response?.data?.message || "Erro ao realizar matrícula."}
          </p>
        )}
      </div>
    </div>
  );
};
