import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Base is set to the GitHub repository name: Glenn_Portfolio
// Live URL will be: https://glenn-it.github.io/Glenn_Portfolio/
export default defineConfig({
  plugins: [react()],
  base: "/Glenn_Portfolio/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
