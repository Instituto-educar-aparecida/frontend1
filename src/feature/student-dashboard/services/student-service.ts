import api from "@/lib/axios";

export interface StudentDashboardData {
  resumo: {
    cursos_matriculados: number;
    cursos_ativos: number;
    cursos_concluidos: number;
    certificados: number;
    horas_totais: number;
  };
  cursos_ativos: {
    id: string;
    title: string;
    progress_percentage: number;
    total_lessons: number;
    completed_lessons: number;
  }[];
  certificados: any[];
}

export const studentService = {
  getDashboardData: async (): Promise<StudentDashboardData> => {
    const response = await api.get("/students/dashboard");
    return response.data.data;
  },
};
