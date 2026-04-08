export function Hero() {
  return (
    <section
      className="relative pt-32 min-[375px]:pt-40 pb-20 min-[375px]:pb-32 px-6 min-[375px]:px-10 md:px-20 overflow-hidden
    bg-radial-[70%_70%_at_center]
    from-violet-600/15 from-0%
    to-violet-900/0 to-70%"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 min-[375px]:gap-16 items-center">
        <div className="relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-violet-50/10 text-violet-200 text-xs font-bold tracking-widest uppercase mb-6">
            Educação Social
          </span>
          <h1 className="text-3xl min-[375px]:text-4xl lg:text-5xl font-bold font-headline leading-[1.1] mb-6 min-[375px]:mb-8 text-white tracking-tight">
            Transformando o Futuro através da{" "}
            <span className="text-violet-50 bg-clip-text ">Educação</span>
          </h1>
          <p className="text-base min-[375px]:text-lg lg:text-xl text-gray-200 max-w-xl leading-relaxed mb-8 min-[375px]:mb-10">
            Capacitamos talentos de todas as origens com ensino de alta
            tecnologia e impacto social. Sua jornada para o sucesso começa aqui,
            100% gratuito.
          </p>

          <div className="flex flex-col min-[375px]:flex-row gap-4">
            <button className="px-6 min-[375px]:px-8 py-4 bg-linear-to-br from-violet-700 to-violet-50 text-violet-800 font-bold text-lg shadow-xl shadow-violet-700/20 hover:shadow-violet-700/40 cursor-pointer rounded-3xl transition-all active:scale-95">
              Saiba Mais
            </button>
            <button className="px-6 min-[375px]:px-8 py-4 rounded-3xl cursor-pointer glass-card text-white font-bold text-lg hover:bg-white/5 transition-all border border-white/10">
              Ver Catálogo
            </button>
          </div>
        </div>

        <div className="relative group mt-8 lg:mt-0">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Estudantes colaborando"
              className="w-full aspect-video min-[375px]:aspect-4/3 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Z8chaaa_RZFzO9NdkYknR4XexXSXtOus39JRJTv9qtkIzVZXRuGl0_cZZcxovKkPuaTDqnXC8Ebs_MRXCITH3yqK2Vo0qkW0CACzpDH_V8V9Omkmc7X_mH-tmq-0ZHae3Fu_RwgnxUl1a4V8WaIBOeVr9F8n6YZukI7GWsU_ZIvbIM-AehZTmsEocestQFeIas_41CFYFtOfYHjY3cICHes2iuZuzG9XyR1Nwa3JuAd5AHtr9g6sVeJ2wo7xa_ShyOb74XQBLOxu"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface/80 via-transparent to-transparent"></div>
          </div>

          <div className="absolute -bottom-6 -left-4 min-[375px]:-left-6 glass-card p-4 min-[375px]:p-6 rounded-3xl shadow-2xl border border-white/5 max-w-40 min-[375px]:max-w-50">
            <p className="text-violet-50 font-bold text-2xl mb-1">+12k</p>
            <p className="text-xs text-on-surface-variant text-violet-10 font-medium">
              Alunos formados prontos para o mercado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
