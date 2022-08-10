<template>
  <div>
    <el-divider>基本配置</el-divider>
    <config-item label="系列名称：">
      <el-input label="系列名称：" v-model="series.name"></el-input>
    </config-item>
    <config-item label="图例联动高亮：">
      <el-switch label="图例联动高亮：" v-model="series.legendHoverLink"></el-switch>
    </config-item>
    <config-item label="拐点标志动画">
      <el-switch v-model="series.hoverAnimation" label="拐点标志动画"></el-switch>
    </config-item>
    <el-divider>标签样式</el-divider>
    <charts-label-style :label="series.label"></charts-label-style>
    <el-divider>拐点标志的样式</el-divider>
    <item-style :item-style="series.itemStyle"></item-style>
    <el-divider>图形高亮标签样式</el-divider>
    <charts-label-style :label="series.emphasis.label"></charts-label-style>
    <el-divider>图形高亮拐点标志的样式</el-divider>
    <item-style :item-style="series.emphasis.itemStyle"></item-style>
  </div>
</template>

<script>
// import ItemStyle from '../itemStyle/ItemStyle';
// import ChartsLabelStyle from '../chartsLabelStyle/ChartsLabelStyle';
// import {coordinateSystem} from '../../../utils/constant';
import { defineComponent } from 'vue';
import componentsMap from '../index';

const { ItemStyle, ChartsLabelStyle, ConfigItem } = componentsMap;

export default defineComponent({
  name: 'ScatterSeries',
  // coordinateSystem,
  components: {
    ItemStyle,
    ChartsLabelStyle, ConfigItem
  },
  props: {
    series: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped>
</style>
