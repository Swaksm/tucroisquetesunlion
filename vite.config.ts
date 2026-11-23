import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Servi sur https://swaks.org/lion-meme/ (fr) et /lion-meme/en/ (en), portfolio hébergé chez OVH.
// Deux pages HTML (méta, JSON-LD et texte sans JS propres à chaque langue), une seule appli.
export default defineConfig({
  base: '/lion-meme/',
  server: { port: 3000, host: '0.0.0.0' },
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, '.') } },
  build: {
    rollupOptions: {
      input: {
        fr: path.resolve(__dirname, 'index.html'),
        en: path.resolve(__dirname, 'en/index.html'),
      },
    },
  },
});
