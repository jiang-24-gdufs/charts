import { defineAsyncComponent } from 'vue';

export const RenderSimpleLineCharts = defineAsyncComponent(
  () => import('./RenderSimpleLineCharts.vue')
);
export default RenderSimpleLineCharts;
