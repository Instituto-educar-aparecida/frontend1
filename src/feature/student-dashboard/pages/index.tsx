import React from 'react';
import {
  MdSchool,
  MdHome,
  MdAutoStories,
  MdWorkspacePremium,
  MdHelp,
  MdSettings,
  MdSearch,
  MdNotifications,
  MdPerson,
  MdPlayCircle,
  MdCheckCircle,
  MdSchedule,
  MdMenuBook,
  MdTimer,
  MdQuiz,
  MdAssignment,
  MdDownload,
  MdQuestionAnswer,
} from 'react-icons/md';

export function StudentDashboard() {
  const styles = `
    :root {
      --primary: #8B5CF6;
      --primary-hover: #7C3AED;
      --bg-charcoal: #0F172A;
      --bg-navy: #1E293B;
      --border-color: rgba(255, 255, 255, 0.08);
      --success: #10B981;
      --error: #EF4444;
      --warning: #F59E0B;
    }
    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--bg-charcoal);
        color: #E2E8F0;
    }
    .glass-card {
        background: rgba(30, 41, 59, 0.4);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 1rem;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="flex-1 bg-[var(--bg-charcoal)]">
        <header className="fixed top-0 right-0 left-64 h-20 bg-[var(--bg-charcoal)] border-b border-[var(--border-color)] z-40 flex items-center justify-between px-8">
          <div className="relative w-96">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xl" />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none text-slate-200 transition-all"
              placeholder="Pesquisar cursos, aulas..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-white transition-colors">
              <MdNotifications size={24} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[var(--bg-charcoal)]"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="text-right">
                <p className="text-sm font-semibold text-white">Gabriel Silva</p>
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                  Estudante Premium
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center overflow-hidden">
                <MdPerson size={24} className="text-purple-400" />
              </div>
            </div>
          </div>
        </header>

        <main className="ml-64 pt-20 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10 mt-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Olá, Gabriel! 👋
                </h1>
                <p className="text-slate-400">
                  Continue seu aprendizado de onde você parou.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="glass-card px-4 py-2 flex items-center gap-3">
                  <MdWorkspacePremium size={20} className="text-amber-500" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">
                      Pontos
                    </p>
                    <p className="text-sm font-bold text-white">1.250 XP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="glass-card p-6 border-l-4 border-[var(--primary)]">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <MdPlayCircle size={24} className="text-[var(--primary)]" />
                  </div>
                  <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                    Em andamento
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">4</h3>
                <p className="text-sm text-slate-400">Cursos ativos</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-[var(--success)]">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <MdCheckCircle size={24} className="text-[var(--success)]" />
                  </div>
                  <span className="text-xs font-bold text-[var(--success)] bg-emerald-500/10 px-2 py-1 rounded">
                    +12%
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">12</h3>
                <p className="text-sm text-slate-400">Cursos concluídos</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-amber-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <MdSchedule size={24} className="text-amber-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">48h</h3>
                <p className="text-sm text-slate-400">
                  Tempo de estudo este mês
                </p>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Seu Progresso</h2>
                <a
                  className="text-[var(--primary)] text-sm font-semibold hover:underline"
                  href="#"
                >
                  Ver todos os cursos
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card overflow-hidden group hover:border-purple-500/30 transition-all">
                  <div className="h-40 bg-gradient-to-br from-purple-900/40 to-slate-900 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[var(--primary)] text-[10px] font-bold text-white rounded-full uppercase tracking-wider">
                        UX/UI Design
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors">
                      Fundamentos do Design Moderno
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                      <span className="flex items-center gap-1">
                        <MdMenuBook className="text-sm" /> 12 Módulos
                      </span>
                      <span className="flex items-center gap-1">
                        <MdTimer className="text-sm" /> 24h totais
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400">Progresso</span>
                        <span className="text-[var(--primary)]">75%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--primary)] rounded-full"
                          style={{ width: '75%' }}
                        ></div>
                      </div>
                    </div>
                    <button className="w-full mt-6 py-2.5 bg-white/5 hover:bg-[var(--primary)] text-white text-sm font-bold rounded-lg transition-all border border-white/10 hover:border-[var(--primary)]">
                      Continuar Aula
                    </button>
                  </div>
                </div>
                <div className="glass-card overflow-hidden group hover:border-emerald-500/30 transition-all">
                  <div className="h-40 bg-gradient-to-br from-emerald-900/40 to-slate-900 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[var(--success)] text-[10px] font-bold text-white rounded-full uppercase tracking-wider">
                        Desenvolvimento
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--success)] transition-colors">
                      Mastering React &amp; Tailwind
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                      <span className="flex items-center gap-1">
                        <MdMenuBook className="text-sm" /> 18 Módulos
                      </span>
                      <span className="flex items-center gap-1">
                        <MdTimer className="text-sm" /> 42h totais
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400">Progresso</span>
                        <span className="text-[var(--success)]">30%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--success)] rounded-full"
                          style={{ width: '30%' }}
                        ></div>
                      </div>
                    </div>
                    <button className="w-full mt-6 py-2.5 bg-white/5 hover:bg-[var(--success)] text-white text-sm font-bold rounded-lg transition-all border border-white/10 hover:border-[var(--success)]">
                      Continuar Aula
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-white mb-6">
                  Próximas Atividades
                </h2>
                <div className="space-y-4">
                  <div className="glass-card p-4 flex items-center justify-between border-l-4 border-[var(--primary)]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-[var(--primary)]">
                        <MdQuiz size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">
                          Quiz: Componentes React
                        </h4>
                        <p className="text-xs text-slate-500">
                          Módulo 4 • Fundamentos
                        </p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold rounded-lg border border-white/10">
                      Fazer Quiz
                    </button>
                  </div>
                  <div className="glass-card p-4 flex items-center justify-between border-l-4 border-amber-500">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500">
                        <MdAssignment size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">
                          Entrega de Projeto
                        </h4>
                        <p className="text-xs text-slate-500">
                          Módulo 8 • Deadline: Amanhã
                        </p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold rounded-lg border border-white/10">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-6">
                  Certificados
                </h2>
                <div className="glass-card p-6 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 text-[var(--primary)]">
                    <MdWorkspacePremium size={40} />
                  </div>
                  <h4 className="font-bold text-white mb-2">
                    Novo Certificado!
                  </h4>
                  <p className="text-xs text-slate-400 mb-6">
                    Você concluiu com sucesso o curso de Adobe XD Avançado.
                  </p>
                  <button className="w-full py-2.5 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                    <MdDownload className="text-sm" />
                    Baixar Certificado
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="fixed bottom-8 right-8">
          <button className="w-14 h-14 bg-[var(--primary)] rounded-full shadow-2xl shadow-purple-500/40 flex items-center justify-center hover:scale-110 transition-transform z-50">
            <MdQuestionAnswer className="text-white text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
}
