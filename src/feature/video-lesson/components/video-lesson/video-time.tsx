function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
}

interface VideoTimeProps {
  currentTime: number;
  duration: number;
}

export function VideoTime({ currentTime, duration }: VideoTimeProps) {
  return (
    <span className="absolute bottom-2 left-3 z-20 text-white/70 text-sm tabular-nums select-none">
      {formatTime(currentTime)} / {formatTime(duration)}
    </span>
  );
}
