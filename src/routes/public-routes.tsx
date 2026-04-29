import { Route, Routes, Navigate } from "react-router";
import PublicLayout from "../layouts/public-layout";
import { LoginPage } from "../feature/auth/pages/login-page";
import { RegisterPage } from "../feature/auth/pages/register-page";
import { RegistrationClass } from "../feature/registration-class/pages/registration-class";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Navigate to="login" replace />} />{" "}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/dev-class" element={<RegistrationClass />} />
      </Route>
    </Routes>
  );
}
