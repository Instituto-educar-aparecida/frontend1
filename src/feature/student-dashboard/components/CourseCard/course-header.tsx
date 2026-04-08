interface CourseHeaderProps {
  category: string;
}

export function CourseHeader({ category }: CourseHeaderProps) {
  return (
    <div className="h-40 bg-linear-to-br from-violet-900/40 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 bg-violet-600 text-label font-bold text-white rounded-full uppercase tracking-wider">
          {category}
        </span>
      </div>
    </div>
  );
}
