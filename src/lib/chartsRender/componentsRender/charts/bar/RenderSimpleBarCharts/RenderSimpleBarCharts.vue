<script>
import { defineComponent, inject, computed } from 'vue';
import SSECharts from '@/lib/chartsRender/SSECharts';

export default defineComponent({
  name: 'RenderSimpleBarCharts',
  components: {
    SSECharts,
  },
  setup(props) {
    const renderData = inject('renderData');
    const option = computed(() => renderData.value.option);
    const initOption = computed(() => renderData.value.initOption);
    const otherOption = computed(() => renderData.value.otherOption);
    return { option, initOption, otherOption };
  },
});
</script>

<template>
  <SSECharts :options="option" :init-option="initOption" :other-option="otherOption" />
</template>
<style></style>
