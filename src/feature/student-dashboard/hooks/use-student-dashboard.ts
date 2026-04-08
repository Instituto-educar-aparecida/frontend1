import { useQueries } from "@tanstack/react-query";
import { studentService } from "../services/student-service";

export function useStudentDashboard() {
  return useQueries({
    queries: [
      {
        queryKey: ["studentDashboardData"],
        queryFn: studentService.getDashboardData,
      },
    ],
  });
}
