import { MdOutlineWorkspacePremium } from "react-icons/md";

export function XpCard() {
  return (
    <div className="glass-card rounded-xl px-4 py-2 flex items-center gap-3">
      <span className="material-symbols-outlined text-yellow text-xl">
        <MdOutlineWorkspacePremium />
      </span>
      <div>
        <p className="text-label font-bold text-gray-400 uppercase">Pontos</p>
        <p className="text-sm font-bold text-white">1.250 XP</p>
      </div>
    </div>
  );
}
