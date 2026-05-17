import { Clock, Eye, Play, View } from "lucide-react";
import { MdMenu } from "react-icons/md";
import { RecentItem } from "./recent-item";
import { Card } from "./comment/card";
import { CommentCard } from "./comment/comment-cadrs";

const recentItems = [
  {
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9jSNiAmyKf4fmsQEmhWVbsIL3vWWj-Zm4A&s",
    title: "Fundamentos do Design Moderno",
    hours: "30Hrs",
    time: "Há 2 horas",
  },
  {
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9jSNiAmyKf4fmsQEmhWVbsIL3vWWj-Zm4A&s",
    title: "Introdução ao Tailwind CSS v3",
    hours: "24Hrs",
    time: "Ontem",
  },
  {
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9jSNiAmyKf4fmsQEmhWVbsIL3vWWj-Zm4A&s",
    title: "Sistemas de Cores e Acessibilidade",
    hours: "15Hrs",
    time: "3 dias atrás",
  },
];

export const RecentActivitySection = () => {
  return (
    <div className="flex items-start justify-center gap-8 relative self-stretch w-full h-screen flex-[0_0_auto] px-5  ">
      <div className="flex flex-col w-[586.66px] items-start gap-6 relative self-stretch ">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] ">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <div className="relative w-1.5 h-6 bg-violet-500 rounded-full" />
            <h2 className="heading text-white -mt-px tracking-tight">
              Recentemente Adicionadas
            </h2>
          </div>
          <button className="all-[unset] box-border cursor-pointer inline-flex flex-col justify-center flex-[0_0_auto] items-center">
            <span className="text-caption font-bold text-gray-400 tracking-[1.20px] uppercase  hover:text-violet-500 transition-colors">
              VER TUDO
            </span>
          </button>
        </div>
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] ">
          {recentItems.map((item, index) => (
            <RecentItem key={index} item={item} />
          ))}
        </div>
      </div>
      <CommentCard />
    </div>
  );
};
