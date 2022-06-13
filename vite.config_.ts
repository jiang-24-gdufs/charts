import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';
import { projRoot } from './build/paths';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
const { resolve } = require('path');
// import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  envDir: 'environments',

  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(projRoot, 'src'),
      },
    ],
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(projRoot, 'src', 'index.html'),
        nested: resolve(projRoot, 'src', 'reporting-edit/reporting-edit.html'),
        reportingEdit: resolve(projRoot, 'src', 'reporting-edit.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('vue')) return 'vue';
          if (id.includes('element-plus')) return 'element-plus';
          if (id.includes('echarts')) return 'echarts';
          if (id.includes('evn.config.ts')) return 'app-config';
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  plugins: [
    PkgConfig(),
    OptimizationPersist(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
  ],
});
