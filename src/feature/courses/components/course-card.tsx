import {
  MdArrowForward,
  MdCheck,
  MdPerson,
  MdPlayCircle,
  MdSchedule,
  MdVerified,
} from "react-icons/md";
import { Link } from "react-router";

interface Course {
  id: string | number;
  image: string;
  title: string;
  category: string;
  completed: boolean;
  instructor: string;
  progress: number;
  hours: number;
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group bg-gray-900/40 rounded-4xl overflow-hidden glass-card  transition-all duration-500 hover:-translate-y-2 hover:bg-gray-900/60 ">
      <div className="h-48 relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 bg-violet-600/90 text-white caption font-bold uppercase text-label tracking-widest rounded-full">
          {course.category}
        </span>
        {course.completed && (
          <div className="absolute top-4 right-4 bg-green text-white rounded-full p-1 shadow-lg">
            <span className="material-symbols-outlined text-sm font-bold block">
              <MdCheck />
            </span>
          </div>
        )}
      </div>

      <div className="p-8">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
          {course.title}
        </h3>
        <div className="flex items-center gap-2 mb-6 text-gray-400 text-sm">
          <span className=" text-violet-400">
            <MdPerson />
          </span>
          <span className="text-sm">{course.instructor}</span>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <span className="caption font-semibold text-xs uppercase tracking-wider text-gray-200">
              {course.completed ? "Status" : "Progresso"}
            </span>
            <span className="body text-sm font-bold text-violet-400">
              {course.completed ? "Concluído" : `${course.progress}%`}
            </span>
          </div>

          <div className="h-2 w-full bg-gray-950 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full shadow-[0_0_12px_rgba(139,92,246,0.4)] transition-all progress-smooth text-xs ${
                course.completed
                  ? "bg-green w-full"
                  : `bg-linear-to-r from-violet-600 to-violet-400/60 w-[${course.progress}%]`
              }`}
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1.5 text-xs caption text-gray-500">
              <span className=" text-xs font-no">
                {course.completed ? <MdVerified /> : <MdSchedule />}
              </span>
              {course.completed ? "Certificado emitido" : `${course.hours} Hr`}
            </div>
            <Link
              to={`/student/courses/${course.id}`}
              className="flex items-center gap-2 text-violet-400 font-bold text-sm group/btn hover:underline decoration-2 underline-offset-4 cursor-pointer"
            >
              {course.completed ? "Ver Aulas" : "Continuar"}
              <span className="  transition-transform group-hover/btn:translate-x-1">
                {course.completed ? <MdPlayCircle /> : <MdArrowForward />}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
