import api from "@/lib/axios";
import { BackendRoutes } from "@/types/backend-routes";

export const dashboardService = {
  getDashboardData: async (): Promise<any> => {
    const response = await api.get(BackendRoutes.STUDENT_DASHBOARD);
    return response.data;
  },
};
