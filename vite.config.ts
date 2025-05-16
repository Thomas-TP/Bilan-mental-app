import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Pour écouter sur toutes les interfaces réseau (équivalent à --host 0.0.0.0)
    allowedHosts: ["5173-ibf6lel5w5mdbonqfn0g5-b122c564.manusvm.computer"],
  },
});

