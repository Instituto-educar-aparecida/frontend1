import api from "../../../lib/axios";
import {
  type VideoProgressPayload,
  type VideoProgressResponse,
  videoProgressResponseSchema,
} from "../types/video-progress";

export const videoProgressService = {
  save: async (payload: VideoProgressPayload): Promise<void> => {
    await api.post("/video-progress", payload);
  },

  get: async (lessonId: string): Promise<VideoProgressResponse | null> => {
    const { data } = await api.get(`/video-progress/${lessonId}`);
    // valida o retorno do backend com Zod
    return videoProgressResponseSchema.parse(data);
  },
};
