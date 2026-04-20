import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "eng-name",
  brand: {
    displayName: "영어 이름 만들기",
    primaryColor: "#f2c94c",
    icon: "https://static.toss.im/appsintoss/16823/bb049d57-3657-4ce8-b745-c1450adcab7c.png",
  },
  web: {
    host: "localhost",
    port: 5173,
    commands: {
      dev: "vite dev",
      build: "vite build",
    },
  },
  permissions: [],
  outdir: "dist",
});
