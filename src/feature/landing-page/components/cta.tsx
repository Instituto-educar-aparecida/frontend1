// src/features/CTA/CTA.tsx
export function CTA() {
  return (
    <section className="py-32 px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto relative p-12 lg:p-20 rounded-[2.5rem] bg-gradient-to-br from-surface-container-high to-surface-container shadow-2xl overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl lg:text-6xl font-bold font-headline mb-8 text-white leading-tight">
            Pronto para escrever seu <br />
            próximo capítulo?
          </h2>
          <p className="text-lg text-on-surface-variant mb-12 max-w-2xl leading-relaxed">
            Não deixe para amanhã a oportunidade que pode mudar sua vida.
            Junte‑se à maior comunidade de educação social do país.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <button className="px-10 py-5 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-extrabold text-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95">
              Junte‑se a nós
            </button>
            <button className="px-10 py-5 rounded-2xl border border-outline-variant/50 glass-card text-white font-bold text-xl hover:bg-white/5 transition-all">
              Falar com Consultor
            </button>
          </div>

          <p className="mt-8 text-xs text-on-surface-variant/60 font-medium">
            Inscrições abertas para o semestre 2024.2
          </p>
        </div>
      </div>
    </section>
  );
}
