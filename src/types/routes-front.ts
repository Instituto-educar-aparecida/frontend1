export const publicRoutes = {
  home: "/",
  login: "/login",
  register: "/register",
  adminLogin: "/auth/admin",
} as const;

export const studentRoutes = {
  dashboard: "/aluno/dashboard",
  courses: "/aluno/courses",
  courseDetail: "/aluno/courses/:courseId",
} as const;

export const teacherRoutes = {
  dashboard: "/professor/dashboard",
} as const;

export const adminRoutes = {
  dashboard: "/admin/dashboard",
  users: "/admin/users",
} as const;

export const routes = {
  public: publicRoutes,
  student: studentRoutes,
  teacher: teacherRoutes,
  admin: adminRoutes,
} as const;
