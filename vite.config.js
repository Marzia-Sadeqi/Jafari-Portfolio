import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({ 
  plugins: [react()],
  base: "/fatima-Portfolio/", // Tells Vite to look for assets in your repository folder
});
