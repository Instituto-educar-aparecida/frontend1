import api from "@/lib/axios";

export interface TeacherDashboardData {
  summary: {
    total_courses: number;
    total_enrollments: number;
    average_rating: string;
  };
  courses: any[];
}

export const teacherDashboardService = {
  get: async (): Promise<TeacherDashboardData> => {
    const response = await api.get("/instructors/dashboard");
    return response.data.data;
  },
};
