import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import { fileURLToPath } from 'url';
import path from 'path';

import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), TanStackRouterVite()],
    // server: {
    //   open: true,
    // },
    esbuild: false,
    resolve: {
      alias: {
        '#': path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './src',
        ),
        '#shared': path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './src/shared',
        ),
        '#assets': path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './src/assets',
        ),
      },
    },
  };
});
