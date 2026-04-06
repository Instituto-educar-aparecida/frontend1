import { Route, Routes } from "react-router";
import { ProtectedRoute } from "./protect-route";
import { PrivateLayout } from "../layouts/private-layout";
import { StudentDashboard } from "../feature/student-dashboard/pages";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <PrivateLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<StudentDashboard />} />
      </Route>
    </Routes>
  );
}
