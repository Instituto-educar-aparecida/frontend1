import { useQueries } from "@tanstack/react-query";
import { dashboardService } from "../sevices/student-service";

export function useStudentDashboard() {
  return useQueries({
    queries: [
      {
        queryKey: ["studentDashboardData"],
        queryFn: dashboardService.getDashboardData,
      },
    ],
  });
}
