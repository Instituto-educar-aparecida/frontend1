import { Outlet } from "react-router";
import { Sidebar } from "../components/sidebar";

export function PrivateLayout() {
  return (
    <main className="bg-primary flex w-full">
      <Sidebar />
      <Outlet />
    </main>
  );
}
