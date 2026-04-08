import api from "../../../lib/axios";
import {
  type VideoProgressPayload,
  type VideoProgressResponse,
  videoProgressResponseSchema,
} from "../types/video-progress";

export const videoProgressService = {
  save: async (payload: VideoProgressPayload): Promise<void> => {
    await api.post("/aula/progresso", payload);
  },

  get: async (lessonId: string): Promise<VideoProgressResponse | null> => {
    const { data } = await api.get(`/aula/progresso/${lessonId}`);
    // valida o retorno do backend com Zod
    return videoProgressResponseSchema.parse(data);
  },
};
