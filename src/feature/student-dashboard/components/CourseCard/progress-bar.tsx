interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="space-y-2 mb-4 px-6">
      <div className="flex justify-between text-xs font-bold">
        <span className="text-gray-400">Progresso</span>
        <span className="text-violet-600">{progress}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full transition-all duration-300 progress-smooth"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
