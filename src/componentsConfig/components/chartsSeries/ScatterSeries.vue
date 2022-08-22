<template>
  <div>
    <el-divider>基本配置</el-divider>
    <config-item label="系列名称：">
      <el-input v-model="series.name" label="系列名称：" />
    </config-item>
    <config-item v-if="isMultipleYAxis" label="指定y轴：">
      <el-switch v-model="series.legendHoverLink" />
    </config-item>
    <config-item label="图例联动高亮：">
      <el-switch v-model="series.legendHoverLink" label="图例联动高亮：" />
    </config-item>
    <config-item label="拐点标志动画">
      <el-switch v-model="series.hoverAnimation" label="拐点标志动画" />
    </config-item>
    <el-divider>标签样式</el-divider>
    <charts-label-style :label="series.label" />
    <el-divider>拐点标志的样式</el-divider>
    <item-style :item-style="series.itemStyle" />
    <el-divider>图形高亮标签样式</el-divider>
    <charts-label-style :label="series.emphasis.label" />
    <el-divider>图形高亮拐点标志的样式</el-divider>
    <item-style :item-style="series.emphasis.itemStyle" />
  </div>
</template>

<script>
// import ChartsLabelStyle from '../chartsLabelStyle/ChartsLabelStyle';
// import {coordinateSystem} from '../../../utils/constant';
import { defineComponent, computed } from 'vue';
import componentsMap from '../index';

const { ItemStyle, ChartsLabelStyle, ConfigItem } = componentsMap;

export default defineComponent({
  name: 'ScatterSeries',
  // coordinateSystem,
  components: {
    ItemStyle,
    ChartsLabelStyle,
    ConfigItem,
  },
  props: {
    series: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const yAxis = computed(() => props.yAxis);

    const isMultipleYAxis = computed(() => Array.isArray(yAxis.value) && yAxis.value.length > 1);
    return { yAxis, isMultipleYAxis };
  },
});
</script>

<style scoped></style>
