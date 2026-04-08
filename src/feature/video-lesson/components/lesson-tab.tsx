const LessonTabs = () => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/5">
      <div className="flex bg-white/5 border-b border-white/10">
        <button className="px-8 py-4 text-sm font-bold border-b-2 border-violet-600 text-violet-600 transition-colors flex-1">
          Descrição
        </button>
        <button className="px-8 py-4 text-sm font-medium text-gray-400 hover:text-white transition-colors flex-1">
          Materiais (3)
        </button>
        <button className="px-8 py-4 text-sm font-medium text-gray-400 hover:text-white transition-colors flex-1">
          Comentários
        </button>
      </div>
    </div>
  );
};

export default LessonTabs;
