import { defineConfig } from "vite";
import path from "path";

import react from '@vitejs/plugin-react-swc';
import svgrPlugin from "vite-plugin-svgr";

const config = defineConfig({
  base: "/",
  build: {
    outDir: "build",
  },
  server: {
    open: '/',
  },
  resolve:{
    alias: [
      {
        find: '@actions', replacement: path.resolve(__dirname, 'src/actions')
      },
      {
        find: '@enums', replacement: path.resolve(__dirname, 'src/enums')
      },
      {
        find: '@stores', replacement: path.resolve(__dirname, 'src/stores')
      },
      {
        find: '@reducers', replacement: path.resolve(__dirname, 'src/reducers')
      },
      {
        find: '@pages', replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@shared', replacement: path.resolve(__dirname, 'src/shared')
      },
      {
        find: '@layout', replacement: path.resolve(__dirname, 'src/components/layout')
      },
      {
        find: '@blocks', replacement: path.resolve(__dirname, 'src/components/blocks')
      },
      {
        find: '@modal', replacement: path.resolve(__dirname, 'src/components/modal')
      },
      {
        find: '@ui', replacement: path.resolve(__dirname, 'src/components/ui')
      },
      {
        find: '@icons', replacement: path.resolve(__dirname, 'src/components/icons')
      },
      {
        find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks')
      },
      {
        find: '@utils', replacement: path.resolve(__dirname, 'src/utils')
      },
      {
        find: '@src', replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@public', replacement: path.resolve(__dirname, 'public')
      }
    ]
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});

export default config;