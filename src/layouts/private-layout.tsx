import { Navigate, Outlet, useLocation } from "react-router";
import { Sidebar } from "../components/sidebar/sidebar";
import { useAuthStore } from "@/store/use-auth-store";
import Navbar from "@/components/navbar";

type Role = "ADMIN" | "STUDENT" | "INSTRUCTOR" | "SECRETARIA";

export function PrivateLayout({ roles }: { roles: Role[] }) {
  const { user } = useAuthStore();

  if (!user || !roles.includes(user.role as Role)) {
    return <Navigate to="/login" replace />;
  }

  const { pathname } = useLocation();

  return (
    <main className="bg-primary grid grid-cols-[auto_1fr] h-screen">
      <Sidebar role={user.role as Role} />
      <div className="overflow-hidden">
        {pathname.startsWith("/student/courses/") ? null : <Navbar />}
        <Outlet />
      </div>
    </main>
  );
}
