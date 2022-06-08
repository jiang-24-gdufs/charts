import { defineAsyncComponent } from 'vue';

export const SSEcharts = defineAsyncComponent(() => import('./SSEcharts.vue'));
export default SSEcharts;
