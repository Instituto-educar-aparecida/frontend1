import { useQuery } from "@tanstack/react-query";
import { CourseService } from "../services/course-service";

export function useGetCompletedCourse() {
  return useQuery({
    queryKey: ["completedCourse"],
    queryFn: CourseService.getCousersCompletes,
  });
}
