import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/theme.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const saved = (localStorage.getItem("theme") ?? "dark") as "dark" | "light";
document.documentElement.setAttribute("data-theme", saved);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
