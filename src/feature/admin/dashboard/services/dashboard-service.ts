import api from "@/lib/axios";

export interface AdminDashboardData {
  overview: {
    total_users: string;
    total_students: string;
    total_instructors: string;
    total_courses: string;
    pending_courses: string;
    approved_courses: string;
    total_enrollments: string;
    total_certificates: string;
    open_tickets: string;
  };
  topCourses: any[];
}

export const adminDashboardService = {
  get: async (): Promise<AdminDashboardData> => {
    const response = await api.get("/admin/dashboard");
    return response.data.data;
  },
};
