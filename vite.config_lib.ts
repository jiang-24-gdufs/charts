import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { projRoot } from './build/paths';

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
    lib: {
      entry: resolve(__dirname, 'src/reporting-edit/main.ts'),
      name: 'MyLib',
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'echarts', 'interactjs'],
      input: {
        main: resolve(projRoot, 'index.html'),
        nested: resolve(projRoot, 'reporting-edit/reporting-edit.html'),
        reportingEdit: resolve(projRoot, 'reporting-edit.html'),
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
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          echarts: 'Echarts',
          interactjs: 'interactjs',
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
