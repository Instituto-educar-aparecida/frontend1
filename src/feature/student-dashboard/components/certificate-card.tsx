import { MdWorkspacePremium } from "react-icons/md";

export default function CertificateCard() {
  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-6">Certificados</h2>
      <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center border-l-4 border-violet-600">
        <div className="w-20 h-20 bg-violet-500/10 rounded-full flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-4xl text-violet-600">
            <MdWorkspacePremium />
          </span>
        </div>
        <h4 className="font-bold text-white mb-2">Novo Certificado!</h4>
        <p className="text-xs text-gray-400 mb-6">
          Você concluiu com sucesso o curso de Adobe XD Avançado.
        </p>
        <button className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25">
          <span className="material-symbols-outlined text-sm">download</span>
          Baixar Certificado
        </button>
      </div>
    </section>
  );
}
