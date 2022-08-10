<template>
  <div>
    <config-item label="系列名称：">

      <el-input v-model="series.name"></el-input>
    </config-item>
    <config-item label="图例hover高亮：">

      <el-switch v-model="series.legendHoverLink"></el-switch>
    </config-item>
    <el-divider>柱条样式配置</el-divider>
    <item-style :item-style="itemStyle">
      <!-- <border-radius-style label="边框圆角：" :border-radius="itemStyle.barBorderRadius"></border-radius-style> -->
    </item-style>
    <el-divider>图形上的文本标签</el-divider>
    <charts-label-style :label="label"></charts-label-style>

  </div>
</template>



<script>
import { defineComponent, computed } from 'vue';
import componentsMap from '../index';

const { ChartsLabelStyle, ConfigItem, ItemStyle } = componentsMap;

export default defineComponent({
  name: 'BarSeries',
  components: {
    ChartsLabelStyle, ConfigItem, ItemStyle
  },
  props: {
    series: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const series = computed(() => props.series);
    const { label, itemStyle } = series.value;

    return { label, itemStyle }
  },
});
</script>

<style scoped>
</style>
