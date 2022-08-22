<template>
  <div>
    <config-item label="系列名称：">
      <el-input v-model="series.name" />
    </config-item>
    <config-item v-if="isMultipleYAxis" label="指定y轴：">
      <!-- <el-switch v-model="series.legendHoverLink"></el-switch> -->
      <el-select v-model="series.yAxisIndex">
        <el-option v-for="(axis, index) of yAxis" :key="index" :label="axis.name" :value="index" />
      </el-select>
    </config-item>
    <config-item label="图例联动高亮：">
      <el-switch v-model="series.legendHoverLink" />
    </config-item>
    <el-divider>柱条样式配置</el-divider>
    <item-style :item-style="itemStyle">
      <!-- <border-radius-style label="边框圆角：" :border-radius="itemStyle.barBorderRadius"></border-radius-style> -->
    </item-style>
    <el-divider>图形上的文本标签</el-divider>
    <charts-label-style :label="label" />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import componentsMap from '../index';

const { ChartsLabelStyle, ConfigItem, ItemStyle } = componentsMap;

export default defineComponent({
  name: 'BarSeries',
  components: {
    ChartsLabelStyle,
    ConfigItem,
    ItemStyle,
  },
  props: {
    series: {
      type: Object,
      required: true,
    },
    yAxis: {
      type: [Object, Array],
      required: true,
    },
  },
  setup(props) {
    const series = computed(() => props.series);
    const yAxis = computed(() => props.yAxis);
    const { label, itemStyle } = series.value;

    const isMultipleYAxis = computed(() => Array.isArray(yAxis.value) && yAxis.value.length > 1);

    return { label, itemStyle, yAxis, isMultipleYAxis };
  },
});
</script>

<style scoped></style>
