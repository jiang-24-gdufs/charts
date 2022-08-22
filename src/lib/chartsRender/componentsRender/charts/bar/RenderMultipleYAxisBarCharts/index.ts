import { defineAsyncComponent } from 'vue';

export const RenderMultipleYAxisBarCharts = defineAsyncComponent(
  () => import('./RenderMultipleYAxisBarCharts.vue')
);
export default RenderMultipleYAxisBarCharts;
