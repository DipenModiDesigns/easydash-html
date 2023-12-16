import { defineConfig } from 'vite';
import { resolve } from 'path';
import multipagePlugin from './easydash';

export default defineConfig({
  plugins: [multipagePlugin()],
  build: {
    rollupOptions: {
      // defaultInterop: "esnext", // Prefer ES modules
      input: {
        main: resolve(__dirname, 'index.html'), // Main entry point
      },
      output: {
        entryFileNames: '*.html', // Output filename pattern with placeholder
      },
    },
  },
  server: {
    host: true,
  }
});
