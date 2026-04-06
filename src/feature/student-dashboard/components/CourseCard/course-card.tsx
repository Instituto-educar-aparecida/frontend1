import { CourseHeader } from "./course-header";
import { CourseInfo } from "./course-info";
import { ProgressBar } from "./progress-bar";
import { CourseButton } from "./course-button";

interface Course {
  id: number | string;
  title: string;
  category: string;
  modules: number;
  duration: string;
  progress: number;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="glass-card overflow-hidden rounded-2xl   border-white/10 group hover:border-violet-500/30 transition-all">
      <CourseHeader category={course.category} />

      <div className="flex flex-col items-center pb-5">
        <div className="w-full">
          <CourseInfo
            title={course.title}
            modules={course.modules}
            duration={course.duration}
          />

          <ProgressBar progress={course.progress} />
        </div>

        <CourseButton courseId={course.id} />
      </div>
    </article>
  );
}
