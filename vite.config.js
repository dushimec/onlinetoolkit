import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    historyApiFallback: true, // Ensure all routes fallback to index.html
  },
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
  resolve: {
    alias: {
      // ...existing aliases...
    },
  },
});
