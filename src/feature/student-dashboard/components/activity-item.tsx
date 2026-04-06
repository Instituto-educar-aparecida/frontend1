import type { IconType } from "react-icons";

interface ActivityItemProps {
  icon: IconType | string;
  color: string;
  title: string;
  subtitle: string;
  action: string;
}

function ActivityItem({
  icon: Icon,
  color,
  title,
  subtitle,
  action,
}: ActivityItemProps) {
  return (
    <div
      className={`glass-card p-4 rounded-2xl flex items-center justify-between border-l-4 hover:border-violet-600`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12  bg-violet-600/10 rounded-full flex items-center justify-center`}
        >
          <span className={` text-violet-600 `}>
            <Icon />
          </span>
        </div>
        <div>
          <h4 className="font-bold text-white text-base xs:text-sm">{title}</h4>
          <p className="text-xs text-gray-400 xs:text-">{subtitle}</p>
        </div>
      </div>
      <button className="px-4 py-2 bg-white/5 hover:bg-violet-600 hover:text-white cursor-pointer text-xs text-gray-300 font-bold rounded-lg border border-white/10 transition-all hidden md:inline-block">
        {action}
      </button>
    </div>
  );
}

export default ActivityItem;
