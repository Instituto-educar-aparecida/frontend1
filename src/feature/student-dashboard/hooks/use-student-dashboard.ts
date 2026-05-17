import { useQuery } from "@tanstack/react-query";
import { studentService } from "../services/student-service";
import type DashboardData from "../types/dashboard-types";

export function useStudentDashboard() {
  return useQuery<DashboardData>({
    queryKey: ["studentDashboardData"],
    queryFn: studentService.getDashboardData,
  });
}
