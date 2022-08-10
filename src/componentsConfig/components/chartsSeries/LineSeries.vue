<template>
    <div>
        <el-input label="系列名称：" v-model="series.name"></el-input>
        <el-switch label="图例联动高亮：" v-model="series.legendHoverLink"></el-switch>
        <el-switch label="平滑曲线" v-model="series.smooth"></el-switch>
        <el-switch v-model="series.hoverAnimation" label="拐点标志动画"></el-switch>
        <el-radio-group size="small" v-model="series.coordinateSystem" label="坐标系：">
            <el-radio-button label="cartesian2d">直角坐标系</el-radio-button>
            <el-radio-button label="polar">极坐标系</el-radio-button>
        </el-radio-group>
        <el-switch v-model="series.step" label="是否阶梯曲线"></el-switch>
        <!--线样式-->
        <el-divider>线条样式</el-divider>
        <!-- <line-style :line-style="lineStyle"></line-style> -->
        <el-divider>折线拐点标志的样式</el-divider>
        <item-style :item-style="itemStyle"></item-style>
        <el-divider>标签样式</el-divider>
        <charts-label-style :label="label"></charts-label-style>
        <el-divider>区域填充样式</el-divider>
        <!-- <area-style :area-style="areaStyle"></area-style> -->
        <el-divider>图形高亮标签样式</el-divider>
        <charts-label-style :label="emphasis.label"></charts-label-style>
        <el-divider>图形高亮折线拐点标志的样式</el-divider>
        <item-style :item-style="emphasis.itemStyle"></item-style>
    </div>
</template>

<script>
import SmartRadioGroup from '../../../components/smartRadio/SmartRadioGroup';
import SmartRadio from '../../../components/smartRadio/SmartRadio';
import TextInput from '../textInput/TextInput';
import SwitchInput from '../switchInput/SwitchInput';
// import LineStyle from '../lineStyle/LineStyle';
// import ItemStyle from '../itemStyle/ItemStyle';
import AreaStyle from '../areaStyle/AreaStyle';
// import ChartsLabelStyle from '../chartsLabelStyle/ChartsLabelStyle';

import {defineComponent} from 'vue'
import componentsMap from '../index';

const {ItemStyle, ChartsLabelStyle} = componentsMap;

export default defineComponent({
  name: 'LineSeries',
  props: {
    series: {
      type: Object,
      required: true
    }
  },
  components: {
    // LineStyle,
    ItemStyle,
    // AreaStyle,
    ChartsLabelStyle
  },
  setup(props) {
    const series = computed(() => props.series);
    const { label, lineStyle, areaStyle, itemStyle, emphasis } = series.value;
    return { label, lineStyle, areaStyle, itemStyle, emphasis }
  }
});
</script>

<style scoped>

</style>
