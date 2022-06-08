import { defineAsyncComponent } from 'vue';

export const RenderChinaProvinceMapCharts = defineAsyncComponent(
  () => import('./RenderChinaProvinceMapCharts.vue')
);
export default RenderChinaProvinceMapCharts;
