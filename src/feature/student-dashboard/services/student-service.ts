import api from "@/lib/axios";
import type DashboardData from "../types/dashboard-types";
import { BackendRoutes } from "@/types/backend-routes";

export const studentService = {
  getDashboardData: async () => {
    try {
      const response = await api.get<DashboardData>(
        BackendRoutes.STUDENT_DASHBOARD,
      );

      return response.data;
    } catch (error: unknown) {
      console.error(error);
      throw error;
    }
  },
};
