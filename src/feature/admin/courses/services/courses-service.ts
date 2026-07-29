import api from "@/lib/axios";

export interface AdminCourse {
  id: string;
  title: string;
  description: string;
  instructor_id: string;
  status: "PENDING" | "ACTIVE" | "INACTIVE" | "REVISION";
  featured: boolean;
  thumbnail_url: string | null;
  total_lessons: number;
  total_students: number;
  created_at: string;
}

export const coursesAdminService = {
  listPending: async (): Promise<AdminCourse[]> => {
    const response = await api.get("/courses");
    return response.data.data;
  },

  updateStatus: async (id: string, status: string, feedback?: string): Promise<void> => {
    await api.patch(`/admin/courses/${id}/status`, { status, feedback });
  },

  setFeatured: async (id: string, featured: boolean): Promise<void> => {
    await api.patch(`/admin/courses/${id}/featured`, { featured });
  },
};
