import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteMinifyPlugin } from "vite-plugin-minify"

import * as dotenv from 'dotenv';
dotenv.config();


// https://vite.dev/config/
export default defineConfig({
  esbuild: {
    target: 'esnext',
  },
  plugins: [react(),ViteMinifyPlugin({})],
})
