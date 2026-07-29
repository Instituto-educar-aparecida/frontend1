import { MdSettings, MdSecurity, MdLanguage, MdNotifications } from "react-icons/md";

export default function AdminSystemPage() {
  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Sistema</h1>
          <p className="text-sm text-gray-400 mt-1">Configurações gerais da plataforma.</p>
        </div>
        <div className="space-y-4">
          {[
            { icon: MdSettings, title: "Configurações Gerais", desc: "Nome da plataforma, logo e informações básicas." },
            { icon: MdSecurity, title: "Segurança", desc: "Políticas de senha, autenticação e sessões." },
            { icon: MdNotifications, title: "Notificações", desc: "Configurar alertas e emails automáticos." },
            { icon: MdLanguage, title: "Idioma e Região", desc: "Fuso horário e preferências de localização." },
          ].map((item) => (
            <div key={item.title} className="bg-secondary rounded-2xl p-5 border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                <item.icon size={22} className="text-violet-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-100">{item.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
              </div>
              <span className="text-xs text-gray-600">v1.1</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
