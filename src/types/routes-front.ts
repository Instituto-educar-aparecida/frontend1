export const publicRoutes = {
  home: "/",
  login: "/login",
  register: "/register",
  adminLogin: "/auth/admin",
} as const;

export const studentRoutes = {
  dashboard: "/student/dashboard",
  courses: "/student/courses",
  courseDetail: "/student/courses/:courseId",
  enrollment: "/student/enrollment",
} as const;

export const teacherRoutes = {
  dashboard: "/professor/dashboard",
  lessons: "/professor/lessons",
} as const;

export const adminRoutes = {
  dashboard: "/admin/dashboard",
  users: "/admin/users",
  courses: "/admin/courses",
} as const;

export const routes = {
  public: publicRoutes,
  student: studentRoutes,
  teacher: teacherRoutes,
  admin: adminRoutes,
} as const;
