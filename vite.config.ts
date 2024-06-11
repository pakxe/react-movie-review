import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env.VITE_API_ACCESS_TOKEN': JSON.stringify(env.VITE_API_ACCESS_TOKEN),
      'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
    },
  };
});
