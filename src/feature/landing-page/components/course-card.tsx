import { MdSchedule } from "react-icons/md";

// src/features/Courses/CourseCard.tsx
interface CourseCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
  duration: string;
  level?: "Junior" | "Pleno" | "Sênior";
}

export function CourseCard({
  image,
  tag,
  title,
  description,
  duration,
  level,
}: CourseCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden glass-card border border-white/5 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
      <div className="h-48 overflow-hidden relative">
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={image}
        />
        <div className="absolute top-4 left-4 py-1 px-3 bg-primary/50 backdrop-blur-md rounded-lg text-violet-50 text-label font-bold tracking-widest uppercase">
          {tag}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold text-violet-50 mb-2">{title}</h3>
        <p className="text-violet-10 text-sm mb-6 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="flex items-center gap-1 text-xs text-violet-10 ">
            <span className="text-sm">
              <MdSchedule />
            </span>{" "}
            {duration}
          </span>
          <span className="text-violet-50 font-bold text-sm">Grátis</span>
        </div>
      </div>
    </div>
  );
}
