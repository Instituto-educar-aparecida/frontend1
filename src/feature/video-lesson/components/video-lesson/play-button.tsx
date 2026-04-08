// play-button.tsx
import { MdPlayArrow, MdPause } from "react-icons/md";
import { PlayButton, useMediaState } from "@vidstack/react";

export default function PlayHintButton() {
  const paused = useMediaState("paused");

  return (
    <PlayButton className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto">
      <div
        className={`transform transition-all ${
          paused
            ? "group-hover:opacity-100 opacity-0"
            : "group-hover:opacity-100 opacity-0"
        }`}
      >
        {/* Trocado de <button> para <div> com role="button" */}
        <div
          className="w-20 h-20 bg-violet-600/90 hover:bg-violet-600 rounded-full flex items-center justify-center text-white shadow-2xl transform transition-all hover:scale-110 active:scale-95 cursor-pointer"
          role="button"
        >
          {paused ? (
            <MdPlayArrow className="text-5xl" />
          ) : (
            <MdPause className="text-5xl" />
          )}
        </div>
      </div>
    </PlayButton>
  );
}
