import { MdQuestionAnswer } from "react-icons/md";

export function FabButton() {
  return (
    <div className="fixed bottom-8 right-8">
      <button className="w-14 h-14 bg-violet-600 rounded-full shadow-2xl shadow-violet-500/40 flex items-center justify-center hover:scale-110 transition-transform z-50">
        <span className="material-symbols-outlined text-white text-2xl">
          <MdQuestionAnswer />
        </span>
      </button>
    </div>
  );
}
