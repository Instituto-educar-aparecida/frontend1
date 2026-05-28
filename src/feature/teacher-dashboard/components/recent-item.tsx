import { LuClock, LuEye, LuPlay } from "react-icons/lu";
import { CiMenuKebab } from "react-icons/ci";

interface RecentItemProps {
  key: number;
  item: {
    thumbnail: string;
    title: string;
    hours: string;
    time: string;
  };
}

export function RecentItem({ key, item }: RecentItemProps) {
  return (
    <div
      key={key}
      className="flex items-center gap-4 p-4 w-full flex-[0_0_auto] relative self-stretch glass-card hover:bg-opacity-70 transition-all duration-300 rounded-2xl"
    >
      <div className="flex flex-col w-24 h-16 items-start justify-center relative bg-gray-900 rounded-lg overflow-hidden video-aspect">
        <div
          className="relative flex-1 self-stretch w-full grow bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${item.thumbnail})` }}
        />
        <div className="flex w-full h-full items-center justify-center absolute top-0 left-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <LuPlay className="relative w-6 h-6 text-white/80" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-[3.5px] relative flex-1 grow">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <h3 className="body font-semibold text-white -mt-px">{item.title}</h3>
        </div>
        <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <LuEye className="relative w-3 h-2 text-gray-400" />
            <span className="text-caption text-gray-400 -mt-px">
              {item.hours}
            </span>
          </div>
          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <LuClock className="relative w-3 h-3 text-gray-400" />
            <span className="text-caption text-gray-400 -mt-px">
              {item.time}
            </span>
          </div>
        </div>
      </div>
      <button className="flex w-8 h-8 justify-center items-center p-1 rounded-lg hover:bg-white/10 transition-colors">
        <CiMenuKebab className="relative w-4 h-4 text-gray-400" />
      </button>
    </div>
  );
}
