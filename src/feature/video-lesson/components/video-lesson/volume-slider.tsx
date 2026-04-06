// components/volume-control.tsx
import { useState } from "react";
import { VolumeSlider } from "@vidstack/react";
import { useMediaPlayer, useMediaState } from "@vidstack/react";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";

export function VolumeControl() {
  const player = useMediaPlayer();
  const volume = useMediaState("volume");
  const muted = useMediaState("muted");
  const [open, setOpen] = useState(false);

  const effectiveVolume = muted ? 0 : volume;

  // só muta quando chegar em 0, desmuta quando subir
  function handleValueChange(value: number) {
    const newVolume = value / 100;
    player?.remoteControl.changeVolume(newVolume);
    if (newVolume <= 0) {
      player?.remoteControl.mute();
    } else if (muted) {
      player?.remoteControl.unmute();
    }
  }

  return (
    <div className="flex items-center gap-2">
      {/* botão simples — só abre/fecha o slider, sem mute */}
      <button
        aria-label="Controle de volume"
        onClick={() => setOpen((v) => !v)}
        className="absolute bottom-2 right-20 z-20 text-white hover:text-violet-600 transition-colors text-2xl"
      >
        {effectiveVolume === 0 || muted ? (
          <MdVolumeOff className="text-violet-600" />
        ) : (
          <MdVolumeUp className="text-white" />
        )}
      </button>

      <div
        className={`
          absolute bottom-3 right-28 z-20
          transition-all duration-300
          ${open ? "w-24 opacity-100" : "w-0 opacity-0 pointer-events-none"}
        `}
      >
        <VolumeSlider.Root
          className="group relative flex items-center w-full h-5 cursor-pointer select-none"
          onValueChange={handleValueChange}
        >
          <VolumeSlider.Track className="relative h-1 w-full rounded-full bg-violet-300">
            <VolumeSlider.TrackFill className="absolute top-0 left-0 h-full rounded-full bg-violet-500" />
          </VolumeSlider.Track>
          <VolumeSlider.Thumb className="absolute top-1/2 left-(--slider-fill) -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow group-hover:scale-125 transition-transform" />
        </VolumeSlider.Root>
      </div>
    </div>
  );
}
