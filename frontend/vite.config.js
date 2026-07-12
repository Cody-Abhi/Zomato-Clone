import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy setup: any request the frontend makes to "/api" is
    // automatically forwarded to our Express backend on port 5000.
    // This avoids CORS issues during development because the
    // browser thinks both the frontend and API are on the same origin.
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
