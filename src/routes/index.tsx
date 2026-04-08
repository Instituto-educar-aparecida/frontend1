import { createBrowserRouter } from "react-router";
import { ProtectRoute, PublicOnlyRoute } from "@/routes/routes-layout";

// layouts
import { PublicLayout } from "@/layouts/public-layout";
import { PrivateLayout } from "@/layouts/private-layout";

// páginas públicas
import { LoginPage } from "@/feature/auth/pages/login-page";

// páginas privadas
import StudentDashboard from "@/feature/student-dashboard/pages";
import NotFoundPage from "@/pages/not-found";
import { RegisterPage } from "@/feature/auth/pages/register-page";

import { AdminLoginPage } from "@/feature/auth/pages/admin-login";
import { Home } from "@/feature/landing-page/page";
import CoursesPage from "@/feature/courses/pages";
import VideoLesson from "@/feature/video-lesson/page";

import { routes } from "@/types/routes-front";
//import { AulasPage } from "@/pages/aulas";

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
    element: <ProtectRoute />, // bloqueia se não logado
    children: [
      {
        element: <PrivateLayout roles={["aluno"]} />,
        children: [
          { path: routes.student.dashboard, element: <StudentDashboard /> },
          { path: routes.student.courses, element: <CoursesPage /> },
          { path: routes.student.courseDetail, element: <VideoLesson /> },
        ],
      },
      {
        element: <PrivateLayout roles={["admin"]} />,
        children: [
          {
            path: routes.admin.dashboard,
            element: <h1>Dashboard do Admin</h1>,
          },
          //{ path: routes.admin.courses, element: <CoursesPage /> },
        ],
      },
      {
        element: <PrivateLayout roles={["professor"]} />,
        children: [
          {
            path: routes.teacher.dashboard,
            element: <h1>Dashboard do Professor</h1>,
          },
          //{ path: routes.teacher.courses, element: <CoursesPage /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
