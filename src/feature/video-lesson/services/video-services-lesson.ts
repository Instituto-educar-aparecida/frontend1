import { BackendRoutes } from "@/types/backend-routes";
import api from "../../../lib/axios";
import {
  type VideoProgressPayload,
  type VideoProgressResponse,
  videoProgressResponseSchema,
} from "../types/video-progress";

export const videoProgressService = {
  save: async (payload: VideoProgressPayload): Promise<void> => {
    await api.post(BackendRoutes.LESSON_PROGRESS_UPDATE, payload);
  },

  get: async (
    lessonId: string | number,
  ): Promise<VideoProgressResponse | null> => {
    const { data } = await api.get(
      `${BackendRoutes.LESSON_PROGRESS_UPDATE}/${lessonId}`,
    );
    // valida o retorno do backend com Zod
    return videoProgressResponseSchema.parse(data);
  },

  getCompleted: async () => {
    const { data } = await api.get(BackendRoutes.CLASSROOM_COMPLETED);
    return data;
  },
};
