import { defineConfig } from 'vite'

export default defineConfig({
  base: '', //makes paths relative
  root: "src",
  assetsInclude: ["/assets/**/*.*"],
  build: {
    emptyOutDir: true,
    outDir: "../dist"
  },
})
