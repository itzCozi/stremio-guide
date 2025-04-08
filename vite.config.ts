import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import postcss from "./postcss.config.js";

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    postcss,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    minify: "esbuild",
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["svelte", "svelte/internal"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["svelte", "svelte/internal"],
  },
  server: {
    fs: {
      strict: true,
    },
  },
});
