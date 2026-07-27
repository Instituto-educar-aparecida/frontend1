import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { coursesAdminService } from "../services/courses-service";

export function useAdminCourses() {
  return useQuery({
    queryKey: ["admin-courses"],
    queryFn: coursesAdminService.listPending,
  });
}

export function useUpdateCourseStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status, feedback }: { id: string; status: string; feedback?: string }) =>
      coursesAdminService.updateStatus(id, status, feedback),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-courses"] }),
  });
}

export function useSetCourseFeatured() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, featured }: { id: string; featured: boolean }) =>
      coursesAdminService.setFeatured(id, featured),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-courses"] }),
  });
}
