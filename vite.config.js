import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Emoji1is',
        short_name: '***NomeCurto',
        description: 'melão',
        theme_color: '***#ffffff',
        icons: [
          {
            src: 'atomic 192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'atomic 512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});