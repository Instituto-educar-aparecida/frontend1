import { MdForward } from "react-icons/md";
import CourseCard from "./CourseCard/course-card";

export function ProgressSection({ courses }: { courses: any[] }) {
  return (
    <section className="mb-10 mt-8">
      <div className="flex items-center justify-between mb-6 xs:flex-col xs:items-start">
        <h2 className="text-xl font-bold text-white">Seu Progresso</h2>
        <a
          className="text-violet-600 text-sm font-semibold hover:underline xs:flex xs:flex-row xs:items-center gap-1"
          href="#"
        >
          Ver todos os cursos <span>{<MdForward />}</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </section>
  );
}
