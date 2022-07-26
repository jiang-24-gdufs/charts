import GridWrapperVue from './gridLayout/GridWrapper.vue';
import componentsRender from './chartsRender/componentsRender';

export default function install(app) {
  // 注册echarts预设主题
  import('./themes/registerThemes');
  // 安装注册组件的插件: 统一安装lib中的组件
  app.use(componentsRender);
  // 注册图表设计器的组件名
  app.component('SmartCharts', GridWrapperVue);
}
