import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Outlet } from "react-router";
import { useLocation } from "react-router";

export function PublicLayout() {
  const location = useLocation();
  return (
    <div className="flex">
      {location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register" ? <div/> : <Sidebar />}
      <div className="flex-1">
        {location.pathname !== "/student/courses/*" ? <div/> : <Navbar />} 
        {location.pathname === "/student/dashboard"  && <Navbar />}
        <Outlet />
      </div>
    </div>
  );
}
