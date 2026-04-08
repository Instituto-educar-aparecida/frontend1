import { useAuthStore } from "@/store/use-auth-store";
import { Navigate, Outlet } from "react-router";

// redireciona quem já está logado (ex: acessar /login de novo)
export function ProtectRoute() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/Login" replace />;
}

// bloqueia rotas privadas
export function PublicOnlyRoute() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return isAuthenticated ? (
    <Navigate to="/student/dashboard" replace />
  ) : (
    <Outlet />
  );
}
