import { useMutation, useQuery } from "@tanstack/react-query";
import { videoProgressService } from "../services/video-services-lesson";
import type { VideoProgressPayload } from "../types/video-progress";

/**
 * Só busca o progresso salvo — sem depender do contexto do MediaPlayer.
 * Use fora do <MediaPlayer> para obter o currentTime inicial.
 */
export function useLessonProgressQuery(lessonId: string) {
  return useQuery({
    queryKey: ["video-progress", lessonId],
    queryFn: () => videoProgressService.get(lessonId),
    staleTime: Infinity,
    enabled: false,
  });
}
