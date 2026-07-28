import { useQuery } from "@tanstack/react-query";
import { studentService, type StudentDashboardData } from "../services/student-service";

export function useStudentDashboard() {
  return useQuery<StudentDashboardData>({
    queryKey: ["student-dashboard"],
    queryFn: studentService.getDashboardData,
  });
}
