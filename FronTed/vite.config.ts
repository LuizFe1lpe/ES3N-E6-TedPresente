/// <reference types="vitest"/>
import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@themes": path.resolve(__dirname, "./src/shared/themes"),
      "@services": path.resolve(__dirname, "./src/shared/services"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  plugins: [react()],
});
