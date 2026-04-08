import "@vidstack/react/player/styles/base.css";
import {
  FullscreenButton,
  MediaPlayer,
  MediaProvider,
  MuteButton,
  useMediaState,
} from "@vidstack/react";
import PlayHintButton from "./play-button";
import { MdVolumeUp, MdVolumeOff, MdFullscreen } from "react-icons/md";

import { useVideoProgress } from "../../hooks/use-video-progress";
import { useLessonProgressQuery } from "../../hooks/use-lesson-progress-query";
import { VolumeControl } from "./volume-slider";
import { VideoTime } from "./video-time";

function VideoControls({ lessonId }: { lessonId: string }) {
  const muted = useMediaState("muted");
  const volume = useMediaState("volume");
  const currentTime = useMediaState("currentTime");
  const duration = useMediaState("duration");
  const paused = useMediaState("paused");

  useVideoProgress({ lessonId });

  return (
    <>
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto">
        <PlayHintButton />
      </div>
      <VideoTime currentTime={currentTime} duration={duration} />

      <MuteButton
        aria-label={muted ? "Desativar mudo" : "Ativar mudo"}
        className="absolute bottom-2 right-20 z-20 text-white hover:text-violet-600 transition-colors"
      >
        <span className="text-2xl">
          {muted || volume === 0 ? (
            <MdVolumeOff className="text-violet-600" />
          ) : (
            <MdVolumeUp className="text-white" />
          )}
        </span>
      </MuteButton>

      <VolumeControl />
      <FullscreenButton
        aria-label="Tela cheia"
        className="absolute bottom-2 right-2 z-20 text-white hover:text-violet-600 transition-colors"
      >
        <span className="text-2xl">
          <MdFullscreen />
        </span>
      </FullscreenButton>
    </>
  );
}

export default function VideoPlayer({ lessonId }: { lessonId: string }) {
  const { data: savedProgress } = useLessonProgressQuery(lessonId);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black video-aspect group border border-white/5">
      <MediaPlayer
        title="Aulas"
        src="https://www.youtube.com/watch?v=TazceeLIF4k"
        className="w-full h-full"
        aspectRatio="16/9"
        volume={0.8}
        controls={false}
        currentTime={savedProgress?.currentTime ?? 0}
      >
        <MediaProvider />
        <VideoControls lessonId={lessonId} />
      </MediaPlayer>
    </div>
  );
}
