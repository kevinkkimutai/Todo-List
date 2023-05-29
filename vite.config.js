import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        port: 8000, // or any other port you prefer
      },
  plugins: [
    vue({
        input: ['resources/css/app.css', 'resources/js/app.js'],
        refresh: true,
      }),
  ],
  build: {
    outDir: 'public',
    assetsDir: '',
    manifest: true,
    rollupOptions: {
      input: {
        main: './resources/js/app.js',
      },
    },
  },
});
