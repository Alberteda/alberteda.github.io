import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/albert-eda-portfolio/",
  plugins: [react()],
  server: {
    open: true, // Automatically open the app in the default browser
  },
});
