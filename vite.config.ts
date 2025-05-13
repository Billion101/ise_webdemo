import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // or use host: '0.0.0.0'
    port: 5173, // default Vite port; change if needed
  },
  optimizeDeps: {
    exclude: ['@vitejs/plugin-react'],
  },
});
