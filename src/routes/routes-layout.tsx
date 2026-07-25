import { useAuthStore } from "@/store/use-auth-store";
import { Navigate, Outlet } from "react-router";

export function ProtectRoute() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export function PublicOnlyRoute() {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) return <Outlet />;

  if (user?.role === "ADMIN") return <Navigate to="/admin/dashboard" replace />;
  if (user?.role === "INSTRUCTOR") return <Navigate to="/professor/dashboard" replace />;
  return <Navigate to="/student/dashboard" replace />;
}
