<script>
import { defineComponent, inject, computed } from 'vue';
import SSECharts from '@/lib/chartsRender/SSECharts';

export default defineComponent({
  name: 'RenderMultipleYAxisBarCharts',
  components: {
    SSECharts,
  },
  setup() {
    const renderData = inject('renderData');
    const option = computed(() => renderData.value.option);
    const otherOption = computed(() => renderData.value.otherOption);
    return { option, otherOption };
  },
});
</script>

<template>
  <SSECharts :options="option" :other-option="otherOption" />
</template>
<style></style>
