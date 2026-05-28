import api from "@/lib/axios";
import { BackendRoutes } from "@/types/backend-routes";

export const CourseService = {
  async getCousersCompletes() {
    try {
      const response = await api.get(BackendRoutes.CLASSROOM_COMPLETED);
      return response.data;
    } catch (error: unknown) {
      console.error(error);
      throw error;
    }
  },
};
