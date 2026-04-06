import { MdPlayCircleOutline } from "react-icons/md";
import ContainerCard from "./container-card";
import IconCard from "./icon-card";
import type { IconType } from "react-icons/lib";

export interface IStatsCard {
  className: string;
  status?: string;
  icon: IconType;
  title?: string;
  description?: string;
}

export function StatsCard({
  className,
  status,
  icon: Icon,
  description,
  title,
}: IStatsCard) {
  return (
    <ContainerCard className="p-6 md:p-4 lg:p-6 flex-1 max-w-76 gap-4 ">
      <IconCard icon={Icon} className={`${className}`} status={status} />
      <div className="flex flex-col md:gap-2">
        <span className="text-xl md:text-sm lg:text-xl  font-bold text-gray-100">
          {description}
        </span>
        <span className="text-sm text-gray-300">{title}</span>
      </div>
    </ContainerCard>
  );
}
