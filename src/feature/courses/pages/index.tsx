import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { MdBook, MdPlayCircle, MdSearch } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router";

interface Course {
  id: string;
  title: string;
  description: string;
  workload_hours: number;
  thumbnail_url: string | null;
  instructor_name?: string;
  total_lessons?: number;
  status: string;
}

function useCoursesPage() {
  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: async () => {
      const response = await api.get("/courses");
      return response.data.data;
    },
  });
}

export default function CoursesPage() {
  const { data: courses = [], isLoading } = useCoursesPage();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const navigate = useNavigate();

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Meus Cursos</h1>
          <p className="text-sm text-gray-400 mt-1">Continue sua jornada de aprendizado.</p>
        </div>

        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 mb-6">
          <MdSearch className="text-gray-400" size={18} />
          <input
            placeholder="Buscar curso..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-gray-300 outline-none w-full"
          />
        </div>

        {isLoading ? (
          <p className="text-center text-gray-400 py-12">Carregando...</p>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <MdBook size={48} className="text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400">Nenhum curso disponível no momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((course) => (
              <div
                key={course.id}
                className="bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-violet-600/30 transition-all cursor-pointer"
                onClick={() => navigate(`/student/courses/${course.id}`)}
              >
                <div className="h-36 bg-violet-600/20 flex items-center justify-center">
                  {course.thumbnail_url ? (
                    <img src={course.thumbnail_url} alt={course.title} className="w-full h-full object-cover" />
                  ) : (
                    <MdPlayCircle size={40} className="text-violet-400" />
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-100 mb-1 line-clamp-2">{course.title}</p>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{course.workload_hours}h</span>
                    <button className="text-xs px-3 py-1 rounded-lg bg-violet-600/20 text-violet-400 hover:bg-violet-600/30 transition-all">
                      Acessar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
