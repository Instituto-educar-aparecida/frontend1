import { BrowserRouter } from "react-router";
import { LoginPage } from "./feature/auth/pages/login-page";
import AppRoutes from "./routes";

import { PrivateLayout } from "./layouts/private-layout";
import PrivateRoutes from "./routes/private-routes";

export default function App() {
  return (
    <BrowserRouter>
      <PrivateRoutes />
    </BrowserRouter>
  );
}
