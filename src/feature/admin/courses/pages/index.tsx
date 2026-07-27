import { useState } from "react";
import { MdCheckCircle, MdCancel, MdStar, MdStarOutline, MdBook } from "react-icons/md";
import { useAdminCourses, useUpdateCourseStatus, useSetCourseFeatured } from "../hooks/use-admin-courses";

const statusLabel: Record<string, string> = {
  PENDING: "Pendente",
  ACTIVE: "Ativo",
  INACTIVE: "Inativo",
  REVISION: "Em revisão",
};

const statusColor: Record<string, string> = {
  PENDING: "bg-yellow/10 text-yellow",
  ACTIVE: "bg-green/10 text-green",
  INACTIVE: "bg-red/10 text-red",
  REVISION: "bg-blue/10 text-blue",
};

export default function AdminCoursesPage() {
  const { data: courses = [], isLoading } = useAdminCourses();
  const updateStatus = useUpdateCourseStatus();
  const setFeatured = useSetCourseFeatured();
  const [search, setSearch] = useState("");

  const filtered = courses.filter((c) =>
    c.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-100">Cursos & Conteúdo</h1>
            <p className="text-sm text-gray-400 mt-1">
              Gerencie e aprove os cursos da plataforma.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Total", value: courses.length, color: "text-gray-100" },
            { label: "Pendentes", value: courses.filter(c => c.status === "PENDING").length, color: "text-yellow" },
            { label: "Ativos", value: courses.filter(c => c.status === "ACTIVE").length, color: "text-green" },
          ].map((s) => (
            <div key={s.label} className="bg-secondary rounded-2xl p-4 border border-white/5">
              <p className="text-xs text-gray-400 mb-1">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary rounded-2xl p-5 border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <input
              placeholder="Buscar curso..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 outline-none focus:border-violet-600 transition-all flex-1"
            />
          </div>

          {isLoading ? (
            <p className="text-center text-gray-400 py-8">Carregando...</p>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12">
              <MdBook size={40} className="text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Nenhum curso encontrado</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((course) => (
                <div key={course.id} className="bg-primary rounded-xl border border-white/5 overflow-hidden">
                  <div className="h-32 bg-violet-600/20 flex items-center justify-center">
                    {course.thumbnail_url ? (
                      <img src={course.thumbnail_url} alt={course.title} className="w-full h-full object-cover" />
                    ) : (
                      <MdBook size={40} className="text-violet-400" />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm font-semibold text-gray-100 leading-tight">{course.title}</h3>
                      <button
                        onClick={() => setFeatured.mutate({ id: course.id, featured: !course.featured })}
                        className="text-yellow flex-shrink-0"
                      >
                        {course.featured ? <MdStar size={18} /> : <MdStarOutline size={18} className="text-gray-500" />}
                      </button>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor[course.status] || "bg-gray-600/20 text-gray-400"}`}>
                      {statusLabel[course.status] || course.status}
                    </span>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => updateStatus.mutate({ id: course.id, status: "ACTIVE" })}
                        className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-green/10 text-green text-xs hover:bg-green/20 transition-all"
                      >
                        <MdCheckCircle size={14} /> Aprovar
                      </button>
                      <button
                        onClick={() => updateStatus.mutate({ id: course.id, status: "REVISION" })}
                        className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-red/10 text-red text-xs hover:bg-red/20 transition-all"
                      >
                        <MdCancel size={14} /> Revisar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
