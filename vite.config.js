import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@styles": "/src/styles",
      "@containers": "/src/containers",
      "@router": "/src/router",
      "@pages": "/src/pages",
      "@layouts": "/src/layouts",
      "@stores": "/src/stores",
      "@helpers": "/src/helpers",
      "@hooks": "/src/hooks",
      "@assets": "/src/assets",
    },
  },
});
