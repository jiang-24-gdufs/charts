import { defineAsyncComponent } from 'vue';

export const RenderSimpleGaugeCharts = defineAsyncComponent(
  () => import('./RenderSimpleGaugeCharts.vue')
);
export default RenderSimpleGaugeCharts;
