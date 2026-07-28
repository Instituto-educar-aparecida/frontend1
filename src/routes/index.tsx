import { createBrowserRouter } from "react-router";
import { ProtectRoute, PublicOnlyRoute } from "@/routes/routes-layout";

import { PublicLayout } from "@/layouts/public-layout";
import { PrivateLayout } from "@/layouts/private-layout";

import { LoginPage } from "@/feature/auth/pages/login-page";
import { RegisterPage } from "@/feature/auth/pages/register-page";
import { AdminLoginPage } from "@/feature/auth/pages/admin-login";
import { Home } from "@/feature/landing-page/page";
import NotFoundPage from "@/pages/not-found";

import StudentDashboard from "@/feature/student-dashboard/pages";
import CoursesPage from "@/feature/courses/pages";
import VideoLesson from "@/feature/video-lesson/page";
import TeacherDashboard from "@/feature/teacher-dashboard/page";
import ManageLessonsPage from "@/feature/teacher-dashboard/pages/manage-lessons";
import TeacherModulesPage from "@/feature/teacher-dashboard/pages/modules";
import AdminDashboard from "@/feature/admin/dashboard/pages";
import AdminUsersPage from "@/feature/admin/users/pages";
import AdminCoursesPage from "@/feature/admin/courses/pages";
import { RegistrationClass } from "@/feature/registration-class/pages/registration-class";
import CertificatesPage from "@/feature/student-dashboard/pages/certificates";

import { routes } from "@/types/routes-front";

export const router = createBrowserRouter([
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
  {
    element: <ProtectRoute />,
    children: [
      {
        element: <PrivateLayout roles={["STUDENT"]} />,
        children: [
          { path: routes.student.dashboard, element: <StudentDashboard /> },
          { path: routes.student.courses, element: <CoursesPage /> },
          { path: routes.student.courseDetail, element: <VideoLesson /> },
          { path: "/student/enrollment", element: <RegistrationClass /> },
          { path: "/student/certificates", element: <CertificatesPage /> },
        ],
      },
      {
        element: <PrivateLayout roles={["ADMIN"]} />,
        children: [
          { path: routes.admin.dashboard, element: <AdminDashboard /> },
          { path: routes.admin.users, element: <AdminUsersPage /> },
          { path: routes.admin.courses, element: <AdminCoursesPage /> },
        ],
      },
      {
        element: <PrivateLayout roles={["INSTRUCTOR"]} />,
        children: [
          { path: routes.teacher.dashboard, element: <TeacherDashboard /> },
          { path: routes.teacher.lessons, element: <ManageLessonsPage /> },
          { path: "/professor/modules", element: <TeacherModulesPage /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
