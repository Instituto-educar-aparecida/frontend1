import { MdGroups, MdSchool, MdWork } from "react-icons/md";

export function About() {
  return (
    <section className="py-24 px-20 min-[375px]:px-10 max-w-full bg-secondary">
      <div className=" flex flex-col items-center justify-content text-center     ">
        <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-6 text-white">
          Nossa Missão
        </h2>
        <div className="w-20 h-1.5 bg-violet-50 rounded-full mb-12"></div>
        <p className="text-lg min-[375px]:text-lg  min-[375px]:px-0 lg:text-2xl text-gray-200 leading-relaxed max-w-full px-10 font-extralight ">
          <span className="text-violet-50 font-semibold ">
            Instituto Educar
          </span>{" "}
          nasceu da crença de que a educação de qualidade não deve ter
          barreiras. Operamos como um hub de transformação, conectando
          especialistas da indústria a estudantes ávidos por conhecimento,
          eliminando a desigualdade através do acesso gratuito às habilidades
          mais requisitadas do século XXI.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-20  px-20 w-full ">
          {[
            {
              icon: <MdSchool />,
              title: "Excelência Acadêmica",
              text: "Currículos desenhados por líderes das maiores empresas de tecnologia do mundo.",
            },
            {
              icon: <MdGroups />,
              title: "Comunidade Ativa",
              text: "Um ecossistema de suporte constante onde ninguém aprende sozinho.",
            },
            {
              icon: <MdWork />,
              title: "Foco na Carreira",
              text: "Parcerias estratégicas para encaminhamento direto ao mercado de trabalho.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-secondary/70 border border-white/5 items-center flex flex-col "
            >
              <span className="material-symbols-outlined text-violet-50 text-4xl mb-4">
                {item.icon}
              </span>
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-sm text-violet-10">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
