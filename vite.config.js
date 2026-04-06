import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    strictPort: true,
    port: 5174,
    hmr: {
      clientPort: 5174,
    },
    watch: {
      usePolling: true,
    },
  },
});
