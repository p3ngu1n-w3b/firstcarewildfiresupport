import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  // Allow uppercase JPG assets to be treated as static files
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.jpeg"],
});
