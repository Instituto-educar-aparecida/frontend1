import api from "@/lib/axios";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "STUDENT" | "INSTRUCTOR" | "SECRETARIA";
  avatar_url: string | null;
  bio: string | null;
  phone: string | null;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export const usersService = {
  list: async (): Promise<AdminUser[]> => {
    const response = await api.get("/admin/users");
    return response.data.data;
  },

  block: async (id: string, active: boolean): Promise<void> => {
    await api.patch(`/admin/users/${id}/block`, { active });
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/admin/users/${id}`);
  },
};
