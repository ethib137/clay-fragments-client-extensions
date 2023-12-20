import { defineConfig } from "vite";
import { resolve } from 'path';
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },

  base: "/o/vite-project",
  plugins: [react({ jsxRuntime: 'classic' })],
  build: {
	lib: {
		entry: resolve(__dirname, 'lib/main.ts'),
		formats: ['es']
	},
    outDir: "./vite-build",

    rollupOptions: {
      external: [/@clayui\/*/, "react", "react-dom"],

      output: {
        assetFileNames: "[name].[ext]",
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
      },
    },
  },
});
