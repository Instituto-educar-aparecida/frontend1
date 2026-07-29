import { MdComment } from "react-icons/md";

export default function TeacherCommentsPage() {
  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Comentários</h1>
          <p className="text-sm text-gray-400 mt-1">Responda perguntas e interaja com seus alunos.</p>
        </div>
        <div className="text-center py-20">
          <div className="w-20 h-20 rounded-full bg-violet-600/10 flex items-center justify-center mx-auto mb-4">
            <MdComment size={40} className="text-violet-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-200 mb-2">Em breve</h2>
          <p className="text-sm text-gray-400 max-w-sm mx-auto">
            O sistema de comentários estará disponível na próxima versão da plataforma.
          </p>
        </div>
      </div>
    </div>
  );
}
