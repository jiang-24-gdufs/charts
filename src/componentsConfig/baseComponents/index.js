// import BaseChartsStyleComponents from './BaseChartsStyleComponents.vue';

// TODO: dynamic import with glob
const BaseChartsStyleComponents = defineAsyncComponent(() =>
  import('./BaseChartsStyleComponents.vue')
);

export default {
  install(Vue) {
    Vue.component('StyleSimpleBarCharts', BaseChartsStyleComponents);
  },
};
