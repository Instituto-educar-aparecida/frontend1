import type { IconType } from "react-icons";
import { MdDescription, MdPictureAsPdf } from "react-icons/md";

const MaterialsGrid = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <MaterialItem
        icon={MdPictureAsPdf}
        name="Slides da Aula 04 "
        size="2.4 MB"
        type="PDF Document"
        color="red"
      />
      <MaterialItem
        icon={MdDescription}
        name="Exercícios Fixação"
        size="1.1 MB"
        type="Word File"
        color="blue"
      />
    </div>
  );
};

interface MaterialItemProps {
  icon: IconType;
  color: string;
  name: string;
  size: string;
  type: string;
}

const MaterialItem = ({
  icon: Icon,
  name,
  size,
  type,
  color,
}: MaterialItemProps) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-600/50  hover:bg-white/8 cursor-pointer transition-all group">
    <div
      className={`w-12 h-12 rounded-lg bg-${color}/5 flex items-center  justify-center shrink-0`}
    >
      <span className={`material-symbols-outlined text-${color}  text-lg`}>
        <Icon />
      </span>
    </div>
    <div className="overflow-hidden">
      <p className="text-sm font-bold text-white truncate group-hover:text-violet-600 transition-colors">
        {name}
      </p>
      <p className="text-xs text-gray-700">
        {size} • {type}
      </p>
    </div>
  </div>
);

export default MaterialsGrid;
