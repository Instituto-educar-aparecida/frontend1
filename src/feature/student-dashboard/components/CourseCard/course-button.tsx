import { Link, useNavigate } from "react-router";

interface ICurseButton {
  courseId: number | string;
}

export function CourseButton({ courseId }: ICurseButton) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/student/courses/${courseId}`, { replace: true });
  }

  return (
    <button
      className=" w-11/12 py-2.5 bg-white/5 hover:bg-violet-600 text-white text-sm font-bold rounded-lg transition-all border border-white/10 hover:border-violet-600 hover:shadow-lg hover:shadow-violet-500/25"
      onClick={handleClick}
    >
      Continuar Aula
    </button>
  );
}
