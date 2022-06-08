import { defineAsyncComponent } from 'vue';

export const RenderChinaMapCharts = defineAsyncComponent(
  () => import('./RenderChinaMapCharts.vue')
);
export default RenderChinaMapCharts;
