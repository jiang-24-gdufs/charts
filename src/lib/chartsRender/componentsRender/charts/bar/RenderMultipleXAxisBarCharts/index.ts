import { defineAsyncComponent } from 'vue';

export const RenderMultipleXAxisBarCharts = defineAsyncComponent(
  () => import('./RenderMultipleXAxisBarCharts.vue')
);
export default RenderMultipleXAxisBarCharts;
