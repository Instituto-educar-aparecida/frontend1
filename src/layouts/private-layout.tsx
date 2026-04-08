import { Navigate, Outlet, useLocation, useNavigation } from "react-router";
import { Sidebar } from "../components/sidebar/sidebar";
import { useAuthStore } from "@/store/use-auth-store";
import Navbar from "@/components/navbar";

export function PrivateLayout({
  roles,
}: {
  roles: ("admin" | "aluno" | "professor")[];
}) {
  const { user } = useAuthStore();

  if (!user || !roles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }
  const { pathname } = useLocation();
  return (
    <main className="bg-primary grid grid-cols-[auto_1fr] h-screen  ">
      <Sidebar />

      <div className="overflow-hidden">
        {pathname.startsWith("/student/courses/") ? <></> : <Navbar />}

        <Outlet />
      </div>
    </main>
  );
}
