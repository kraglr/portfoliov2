// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // <--- Make sure this import is correct

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction ? '/portfoliov2/' : '/'; // IMPORTANT: Replace 'your-repo-name'

  return {
    plugins: [
      react(),
      tailwindcss(), // <--- Ensure the plugin is called here
    ],
    base: base,
  };
});