import { MdConstruction } from "react-icons/md";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary flex items-center justify-center">
      <div className="text-center max-w-sm">
        <div className="w-20 h-20 rounded-full bg-violet-600/10 flex items-center justify-center mx-auto mb-4">
          <MdConstruction size={40} className="text-violet-400" />
        </div>
        <h1 className="text-xl font-bold text-gray-100 mb-2">{title}</h1>
        <p className="text-sm text-gray-400">
          {description ?? "Essa área está em construção e estará disponível em breve."}
        </p>
      </div>
    </div>
  );
}
