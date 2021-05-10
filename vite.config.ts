import reactRefresh from "@vitejs/plugin-react-refresh";
import fs from "fs";
// * No declaration file for less-vars-to-js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import lessToJS from "less-vars-to-js";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, "./theme.less"), "utf8"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  esbuild: {
    // jsxInject: "import React from 'react'",
  },
  resolve: {
    alias: {
      // "~": path.resolve(__dirname, "./"),
      store: path.resolve(__dirname, "src", "store"),
      app: path.resolve(__dirname, "src", "app"),
      components: path.resolve(__dirname, "src", "components"),
      assets: path.resolve(__dirname, "src", "assets"),
      pages: path.resolve(__dirname, "src", "pages"),
      utils: path.resolve(__dirname, "src", "utils"),
    },
  },
});
