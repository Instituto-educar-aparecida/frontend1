import { useEffect, useRef, useCallback } from "react";
import { useMediaPlayer, useMediaState } from "@vidstack/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { videoProgressService } from "../services/video-services-lesson";
import { useVideoProgressStore } from "../store/video-progress-store";
import {
  type VideoProgressPayload,
  videoProgressSchema,
} from "../types/video-progress";

const COMPLETED_THRESHOLD = 0.9; // 90% = concluído

interface UseVideoProgressOptions {
  lessonId: string;
  minTimeToSave?: number;
}

export function useVideoProgress({
  lessonId,
  minTimeToSave = 5,
}: UseVideoProgressOptions) {
  const player = useMediaPlayer();
  const paused = useMediaState("paused");

  const { setLastSaved, setIsSaving } = useVideoProgressStore();

  // ─── Busca o progresso salvo ao montar ──────────────────────────────────
  const { data: savedProgress } = useQuery({
    queryKey: ["video-progress", lessonId],
    queryFn: () => videoProgressService.get(lessonId),
    staleTime: Infinity, // não refetch automático — só carrega 1x
  });

  // ─── Mutation para salvar ────────────────────────────────────────────────
  const { mutate: saveProgress } = useMutation({
    mutationFn: (payload: VideoProgressPayload) =>
      videoProgressService.save(payload),
    onMutate: () => setIsSaving(true),
    onSettled: () => setIsSaving(false),
    onSuccess: (_, payload) => setLastSaved(payload),
    onError: (err) => console.error("[video-progress] erro:", err),
  });

  // ─── Ref para acessar valores atuais sem deps stale ─────────────────────
  const stateRef = useRef({ lessonId, minTimeToSave, saveProgress });
  useEffect(() => {
    stateRef.current = { lessonId, minTimeToSave, saveProgress };
  });

  // ─── Função central de disparo ──────────────────────────────────────────
  const triggerSave = useCallback(
    (event: "pause" | "exit") => {
      if (!player) return;

      const currentTime = player.currentTime;
      const duration = player.duration;
      const { lessonId, minTimeToSave, saveProgress } = stateRef.current;

      if (currentTime < minTimeToSave) return;
      if (duration > 0 && currentTime >= duration - 1) return;

      const percentage = duration > 0 ? currentTime / duration : 0;
      const completed = percentage >= COMPLETED_THRESHOLD;

      // Valida com Zod antes de enviar
      const payload = videoProgressSchema.parse({
        videoId: lessonId,
        currentTime,
        duration,
        percentage: percentage * 100,
        completed,
        event,
      });

      saveProgress(payload);
    },
    [player],
  );

  // ─── Pausa ───────────────────────────────────────────────────────────────
  useEffect(() => {
    if (paused) triggerSave("pause");
  }, [paused, triggerSave]);

  // ─── Saída da página ─────────────────────────────────────────────────────
  useEffect(() => {
    const handleExit = () => triggerSave("exit");
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") triggerSave("exit");
    };

    window.addEventListener("beforeunload", handleExit);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("beforeunload", handleExit);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [triggerSave]);

  // Retorna o progresso salvo para o player setar o currentTime inicial
  return { savedProgress };
}
