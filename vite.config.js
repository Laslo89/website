import { defineConfig } from 'vite'

export default defineConfig({
  base: '', //makes paths relative
  root: "src",
  assetsInclude: ["/assets/**/*.*"],
  publicDir: "../public",
  build: {
    emptyOutDir: true,
    outDir: "../dist"
  },
})
