import { defineConfig } from 'vite'

export default defineConfig({
  aessetsInclude: [".assets/**/*.*"],
  root: "src",
  build: {
    emptyOutDir: true,
    outDir: "../dist"
  }
})
