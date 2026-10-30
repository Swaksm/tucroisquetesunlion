import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Servi sur https://swaks.org/lion-meme/ (portfolio, hébergement OVH)
export default defineConfig({
  base: '/lion-meme/',
  server: { port: 3000, host: '0.0.0.0' },
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, '.') } },
});
