import { createBrowserRouter } from "react-router";
import { ProtectRoute, PublicOnlyRoute } from "@/routes/routes-layout";

// layouts
import { PublicLayout } from "@/layouts/public-layout";
import { PrivateLayout } from "@/layouts/private-layout";

// páginas públicas
import { LoginPage } from "@/feature/auth/pages/login-page";
import { RegisterPage } from "@/feature/auth/pages/register-page";
import { AdminLoginPage } from "@/feature/auth/pages/admin-login";
import { Home } from "@/feature/landing-page/page";

// páginas privadas — aluno
import StudentDashboard from "@/feature/student-dashboard/pages";
import CoursesPage from "@/feature/courses/pages";
import VideoLesson from "@/feature/video-lesson/page";

// páginas privadas — admin
import AdminDashboard from "@/feature/admin/dashboard/pages";

// 404
import NotFoundPage from "@/pages/not-found";

import { routes } from "@/types/routes-front";

export const router = createBrowserRouter([
  // ─── rotas públicas ────────────────────────────────
  {
    element: <PublicOnlyRoute />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { path: routes.public.home, element: <Home /> },
          { path: routes.public.login, element: <LoginPage /> },
          { path: routes.public.register, element: <RegisterPage /> },
          { path: routes.public.adminLogin, element: <AdminLoginPage /> },
        ],
      },
    ],
  },

  // ─── rotas privadas ────────────────────────────────
  {
    element: <ProtectRoute />,
    children: [
      {
        element: <PrivateLayout roles={["STUDENT"]} />,
        children: [
          { path: routes.student.dashboard, element: <StudentDashboard /> },
          { path: routes.student.courses, element: <CoursesPage /> },
          { path: routes.student.courseDetail, element: <VideoLesson /> },
        ],
      },
      {
        element: <PrivateLayout roles={["ADMIN"]} />,
        children: [
          { path: routes.admin.dashboard, element: <AdminDashboard /> },
        ],
      },
      {
        element: <PrivateLayout roles={["INSTRUCTOR"]} />,
        children: [
          {
            path: routes.teacher.dashboard,
            element: <h1>Dashboard do Professor</h1>,
          },
        ],
      },
    ],
  },

  { path: "*", element: <NotFoundPage /> },
]);
