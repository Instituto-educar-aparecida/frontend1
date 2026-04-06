export function ImpactNumbers() {
  const items = [
    { value: "12k+", label: "Alunos" },
    { value: "50+", label: "Cursos" },
    { value: "100%", label: "Gratuito" },
    { value: "95%", label: "Aprovação" },
  ];

  return (
    <section className="py-20 px-20 relative min-[375px]:px-10">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="text-center p-4 min-[375px]:p-8 rounded-2xl glass-card border border-white/5"
            >
              <p className="text-3xl min-[375px]:text-3xl font-extrabold text-violet-50 mb-2">
                {item.value}
              </p>
              <p className="text-lg min-[375px]:text-label font-semibold text-violet-10 uppercase tracking-widest">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
