<script lang="ts">
import * as echarts from 'echarts';
import { debounce } from 'lodash';
import type { Ref } from 'vue';
import { ref, computed, defineComponent, inject, onBeforeUnmount, onMounted, watch } from 'vue';

export default defineComponent({
  name: 'SSECharts',
  props: {
    options: Object,

    // otherOption: {
    //   type: Object,
    //   required: true,
    // },
  },

  setup(props) {
    const themeName = inject<Ref<string>>('themeName')!;
    const debugConsole = inject<boolean>('debugConsole');

    const options = computed(() => props.options);

    const echartContainer = ref();

    let chart: echarts.EChartsType | null = null;

    function initData() {
      if (!echartContainer.value || chart) {
        return;
      }

      chart = echarts.init(echartContainer.value, themeName.value);
      chart.setOption(options.value || {}, true);

      if (debugConsole) {
        console.log(chart.id, options.value);
      }
    }

    function updateChart(options) {
      if (chart && echartContainer.value) {
        chart.setOption(options || {}, true);
      }
    }

    function destroy() {
      chart?.dispose();
      chart = null;
    }

    watch(themeName, (value) => {
      if (chart && echartContainer.value) {
        chart.dispose();
        chart = echarts.init(echartContainer.value, value);
        chart.setOption(options.value || {}, true);
      }
    });
    const setOptionDebounce = debounce(updateChart, 200);

    watch(options, (value) => {
      setOptionDebounce(value);
      if (debugConsole) {
        console.log(chart?.id, options.value);
      }
    }, { deep: true });

    onMounted(() => {

      initData();
    });

    onBeforeUnmount(() => {
      if (!chart) {
        return;
      }
      destroy();
    });

    return { themeName, debugConsole, echartContainer };
  },
  watch: {
    // 'otherOption.showLoading'(value) {
    //   if (value) {
    //     this.showLoading();
    //   } else {
    //     this.hideLoading();
    //   }
    // },
    // 'otherOption.refresh'() {
    //   this.refresh();
    // },
  },

  methods: {
    // refresh() {
    //   if (this.chart) {
    //     this.chart.clear();
    //     this.destroy();
    //     this.initData();
    //   }
    // },
    // // 显示加载中
    // showLoading() {
    //   this.chart?.showLoading();
    // },
    // // 关闭
    // hideLoading() {
    //   this.chart?.hideLoading();
    // },
  },
  // render() {
  //   return h('div', {
  //     style: {
  //       width: '100%',
  //       height: '100%'
  //     },
  //     ref: 'echartContainer'
  //   });
  // },
});
</script>

<template>
  <div ref="echartContainer"></div>
</template>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
