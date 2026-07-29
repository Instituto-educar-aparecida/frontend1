import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { MdStar, MdSchedule, MdEmojiEvents } from "react-icons/md";

interface Certificate {
  id: string;
  course_title: string;
  issued_at: string;
  verification_code: string;
  pdf_url: string | null;
}

function useCertificates() {
  return useQuery<Certificate[]>({
    queryKey: ["certificates"],
    queryFn: async () => {
      const response = await api.get("/students/certificates");
      return response.data.data;
    },
  });
}

export default function CertificatesPage() {
  const { data: certificates = [], isLoading } = useCertificates();

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Certificados</h1>
          <p className="text-sm text-gray-400 mt-1">
            Seus certificados de conclusão de curso.
          </p>
        </div>

        {isLoading ? (
          <p className="text-center text-gray-400 py-12">Carregando...</p>
        ) : certificates.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-violet-600/10 flex items-center justify-center mx-auto mb-4">
              <MdEmojiEvents size={40} className="text-violet-400" />
            </div>
            <h2 className="text-lg font-semibold text-gray-200 mb-2">Nenhum certificado ainda</h2>
            <p className="text-sm text-gray-400 max-w-sm mx-auto">
              Conclua um curso para receber seu certificado de conclusão.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-secondary rounded-2xl p-6 border border-white/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-full -translate-y-8 translate-x-8" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow/10 flex items-center justify-center flex-shrink-0">
                    <MdStar size={24} className="text-yellow" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-100 mb-1">
                      {cert.course_title}
                    </p>
                    <p className="text-xs text-gray-400 mb-4">
                      Emitido em {new Date(cert.issued_at).toLocaleDateString("pt-BR")}
                    </p>
                    <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-yellow/10 text-yellow w-fit mb-2">
                      <MdSchedule size={14} />
                      Download em PDF disponível em breve
                    </div>
                    <p className="text-xs text-gray-500 font-mono">
                      Código: {cert.verification_code}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
