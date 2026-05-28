import { Navigate, Outlet, useLocation, useNavigation } from "react-router";
import { Sidebar } from "../components/sidebar/sidebar";

import Navbar from "@/components/navbar";

export function PrivateLayoutTeste({}: {}) {
  return (
    <main className="bg-primary grid grid-cols-[auto_1fr] h-screen  ">
      <Sidebar />

      <div className="overflow-hidden">
        <Outlet />
      </div>
    </main>
  );
}
