<template>
  <div>
    <config-item label="系列名称：">
      <el-input v-model="series.name" label="系列名称：" />
    </config-item>
    <config-item v-if="isMultipleYAxis" label="指定y轴：">
      <el-switch v-model="series.legendHoverLink" />
    </config-item>
    <config-item label="图例联动高亮：">
      <el-switch v-model="series.legendHoverLink" label="图例联动高亮：" />
    </config-item>
    <config-item label="平滑曲线">
      <el-switch v-model="series.smooth" label="平滑曲线" />
    </config-item>
    <config-item label="拐点标志动画">
      <el-switch v-model="series.hoverAnimation" label="拐点标志动画" />
    </config-item>
    <config-item label="坐标系：">
      <el-radio-group v-model="series.coordinateSystem" size="small" label="坐标系：">
        <el-radio-button label="cartesian2d">直角坐标系</el-radio-button>
        <el-radio-button label="polar">极坐标系</el-radio-button>
      </el-radio-group>
    </config-item>
    <config-item label="是否阶梯曲线">
      <el-switch v-model="series.step" label="是否阶梯曲线" />
    </config-item>

    <!--线样式-->
    <el-divider>线条样式</el-divider>
    <!-- <line-style :line-style="lineStyle"></line-style> -->
    <el-divider>折线拐点标志的样式</el-divider>
    <item-style :item-style="itemStyle" />
    <el-divider>标签样式</el-divider>
    <charts-label-style :label="label" />
    <el-divider>区域填充样式</el-divider>
    <!-- <area-style :area-style="areaStyle"></area-style> -->
    <el-divider>图形高亮标签样式</el-divider>
    <charts-label-style :label="emphasis.label" />
    <el-divider>图形高亮折线拐点标志的样式</el-divider>
    <item-style :item-style="emphasis.itemStyle" />
  </div>
</template>

<script>
// import LineStyle from '../lineStyle/LineStyle';
// import AreaStyle from '../areaStyle/AreaStyle';
// import ChartsLabelStyle from '../chartsLabelStyle/ChartsLabelStyle';

import { computed, defineComponent } from 'vue';
import componentsMap from '../index';

const { ItemStyle, ChartsLabelStyle, ConfigItem } = componentsMap;

export default defineComponent({
  name: 'LineSeries',
  components: {
    // LineStyle,
    ItemStyle,
    // AreaStyle,
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
    const series = computed(() => props.series);
    const yAxis = computed(() => props.yAxis);
    const { label, lineStyle, areaStyle, itemStyle, emphasis } = series.value;
    const isMultipleYAxis = computed(() => Array.isArray(yAxis.value) && yAxis.value.length > 1);
    return { label, lineStyle, areaStyle, itemStyle, emphasis, yAxis, isMultipleYAxis };
  },
});
</script>

<style scoped></style>
