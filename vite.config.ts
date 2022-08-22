import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { projRoot } from './build/paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (mode === 'lib' && command === 'build') {
    // 打包库到es目录下
    return {
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
          entry: resolve(__dirname, 'src/lib/main.ts'),
          // name: 'SmartCharts',
          fileName: () => `smart-charts.js`,
          formats: ['es'],
        },
        outDir: 'es', // 指定输出路径，要和库的包区分开
        rollupOptions: {
          // 确保外部化处理那些你不想打包进库的依赖
          external: ['vue', 'lodash', 'echarts', 'interactjs', 'element-resize-detector'],
          output: {
            // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
            globals: {
              vue: 'Vue',
              echarts: 'Echarts',
              interactjs: 'interactjs',
              lodash: '_',
            },
            // sourcemap: true, // 输出.map文件
          },
        },
      },
      plugins: [vue()],
    };
  } else if (mode !== 'lib' && command === 'build') {
    // 打包多页面应用到dist目录
    return {
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
        outDir: 'dist', // 指定输出路径，要和库的包区分开
        rollupOptions: {
          input: {
            main: resolve(projRoot, 'index.html'),
            // reportingEdit: resolve(projRoot, 'src', 'reporting-edit/reporting-edit.html'),
            reportingEdit: resolve(projRoot, 'reporting-edit.html'),
          },
          output: {
            manualChunks(id) {
              if (id.includes('vue')) return 'vue';
              if (id.includes('lodash')) return 'lodash';
              if (id.includes('echarts')) return 'echarts';
              if (id.includes('element-plus')) return 'element-plus';
              if (id.includes('evn.config.ts')) return 'app-config';
              if (id.includes('node_modules')) {
                return 'vendor';
              }
            },
          },
        },
      },
      plugins: [vue()],
    };
  }

  /* 开发环境 */
  return {
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

    server: {
      host: true,
      port: 8020},

    plugins: [
      vue(),
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
      // }),
    ],
  };
});
