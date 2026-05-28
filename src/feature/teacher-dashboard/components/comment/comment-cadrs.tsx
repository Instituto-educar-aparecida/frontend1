import { Card } from "./card";

const comments = [
  {
    initials: "MA",
    name: "Marcos André",
    time: "Há 15 min",
    text: '"Professor, tive uma dúvida sobre o grid na aula 04. Pode me ajudar?"',
    avatarBg: "bg-violet-100/20",
    textColor: "text-violet-400",
    action: "Responder",
    actionLabel: "Responder",
  },
  {
    initials: "FS",
    name: "Fernanda Silva",
    time: "Há 1h",
    text: '"Excelente explicação sobre as variáveis do CSS. Ficou muito claro!"',
    avatarBg: "bg-green/20",
    textColor: "text-green",
    action: "Responder",
    actionLabel: "Responder",
  },
  {
    initials: "GL",
    name: "Gabriel Lima",
    time: "Há 3h",
    text: '"Onde posso baixar os assets citados no minuto 12:45?"',
    avatarBg: "bg-yellow/20",
    textColor: "text-yellow",
    action: "RESPONDER",
    actionLabel: "RESPONDER",
  },
];

export function CommentCard() {
  return (
    <div className="flex flex-col w-[277.34px] items-start gap-6 relative self-stretch ">
      <div className="flex items-center relative self-stretch w-full flex-[0_0_auto] ">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] ">
          <div className="relative w-1.5 h-6 bg-yellow rounded-full" />
          <h2 className="heading text-white -mt-px tracking-tight">
            Comentários
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 p-6 w-full flex-[0_0_auto] relative self-stretch glass-card rounded-2xl">
        {comments.map((comment, index) => (
          <Card key={index} comment={comment} />
        ))}
        <button className="all-[unset] box-border flex justify-center px-0 py-3 self-stretch w-full flex-[0_0_auto] glass-card bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl items-center cursor-pointer">
          <span className="text-label font-bold text-gray-300 text-center tracking-[1.20px] uppercase">
            VER TODOS OS COMENTÁRIOS
          </span>
        </button>
      </div>
    </div>
  );
}
