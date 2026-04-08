import api from "@/lib/axios";

export const studentService = {
  getDashboardData: async () => {
    const response = await api.get("/aluno/dashboard");

    return response.data;
  },
};
