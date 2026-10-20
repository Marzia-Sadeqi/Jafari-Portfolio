@'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Jafari-Portfolio/",
});
'@ | Set-Content vite.config.js