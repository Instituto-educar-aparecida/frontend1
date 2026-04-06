import { MdAssignment, MdQuiz } from "react-icons/md";
import ActivityItem from "./activity-item";

export default function Activities() {
  return (
    <section className="lg:col-span-2">
      <h2 className="text-xl font-bold text-white mb-6">Próximas Atividades</h2>
      <div className="space-y-4">
        <ActivityItem
          icon={MdQuiz}
          color="violet-600"
          title="Componentes React"
          subtitle="Módulo 4 • Fundamentos"
          action="Fazer Quiz"
        />
        <ActivityItem
          icon={MdAssignment}
          color="yellow-500"
          title="Entrega de Projeto"
          subtitle="Módulo 8 • Deadline: Amanhã"
          action="Enviar"
        />
      </div>
    </section>
  );
}
