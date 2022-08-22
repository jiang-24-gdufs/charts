import { defineAsyncComponent } from 'vue';

export const RenderRoseTypePieCharts = defineAsyncComponent(
  () => import('./RenderRoseTypePieCharts.vue')
);
export default RenderRoseTypePieCharts;
