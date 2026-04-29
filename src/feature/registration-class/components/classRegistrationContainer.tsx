import { ClassForm } from "./classForm";


export const ClassRegistrationContainer = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-2 bg-primary bg-grid-pattern">
      <div className="w-full max-w-[1440px] glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden flex">
        
        {/* Background */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-400/10 blur-[50px] rounded-full sm:w-52 sm:h-52" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-violet-500/10 blur-[50px] rounded-full sm:w-52 sm:h-52" />

        {/* Conteúdo precisa ficar acima do background */}
        <div className="relative z-10 flex w-full">
          
          {/* Left container */}
          <aside className="w-1/5 pr-4 border-r border-white/10">
            Sidebar
          </aside>

          {/* Right container */}
          <section className="w-4/5 pl-6">
            Conteúdo principal
          </section>

        </div>

      </div>
    </main>
  );
};