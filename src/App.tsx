import { BrowserRouter, RouterProvider } from "react-router";
import { LoginPage } from "./feature/auth/pages/login-page";

import { ProtectRoute } from "./routes/routes-layout";
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}
