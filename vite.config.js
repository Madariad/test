import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Inspect()],
  base: "test", 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
