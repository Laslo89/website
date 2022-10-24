import { defineConfig } from 'vite'

export default defineConfig({
  aessetsInclude: ["./src/assets/**/*.*"],
  build: {
    emptyOutDir: true,
    outDir: "../dist"
  }
})
