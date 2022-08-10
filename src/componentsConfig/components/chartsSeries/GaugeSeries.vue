<template>
  <div>
    <el-divider>基本配置</el-divider>
    <config-item label="仪表盘半径：">
      <el-input-number controls-position="right" :value="Number.parseInt(series.radius)" label="仪表盘半径："
        @change="(value) => { series.radius = `${value}%` }"></el-input-number>
    </config-item>
    <config-item label="开始角度：">
      <el-input-number controls-position="right" label="开始角度：" :min="0" :max="360" v-model="series.startAngle"></el-input-number>
    </config-item>
    <config-item label="结束角度：">
      <el-input-number controls-position="right" label="结束角度：" :min="-360" :max="360" v-model="series.endAngle"></el-input-number>
    </config-item>
    <config-item label="顺时针增长：">
      <el-switch label="顺时针增长：" v-model="series.clockwise"></el-switch>
    </config-item>
    <config-item label="最小值：">
      <el-input-number controls-position="right" label="最小值：" v-model="series.min"></el-input-number>
    </config-item>
    <config-item label="最大值：">
      <el-input-number controls-position="right" label="最大值：" v-model="series.max"></el-input-number>
    </config-item>
    <config-item label="刻度分割：">
      <el-input-number controls-position="right" label="刻度分割：" v-model="series.splitNumber"></el-input-number>
    </config-item>
    <el-divider>轴线</el-divider>
    <config-item label="轴线：">
      <el-switch label="轴线：" v-model="axisLine.show"></el-switch>
    </config-item>
    <template v-if="axisLine.show">
      <config-item label="轴线宽度：">
        <el-input-number controls-position="right" label="轴线宽度：" v-model="axisLine.lineStyle.width"></el-input-number>
      </config-item>
      <!-- <gauge-color :color="axisLine.lineStyle.color"></gauge-color> -->
    </template>
    <el-divider>分割线</el-divider>
    <config-item label="显示分割线：">
      <el-switch label="显示分割线：" v-model="splitLine.show"></el-switch>
    </config-item>
    <template v-if="splitLine.show">
      <config-item label="分隔线线长：">
        <el-input-number controls-position="right" :min="0" v-model="splitLine.length" label="分隔线线长："></el-input-number>
      </config-item>
      <!-- <line-style :line-style="splitLine.lineStyle" title="分割线"></line-style> -->
    </template>
    <el-divider>刻度样式</el-divider>
    <config-item label="刻度样式：">
      <el-switch label="刻度样式：" v-model="axisTick.show"></el-switch>
    </config-item>
    <template v-if="axisTick.show">
      <config-item label="线间刻度数量：">
        <el-input-number controls-position="right" label="线间刻度数量：" v-model="axisTick.splitNumber"></el-input-number>
      </config-item>
      <config-item label="刻度线长：">
        <el-input-number controls-position="right" label="刻度线长：" v-model="axisTick.length"></el-input-number>
      </config-item>
      <!-- <line-style :line-style="axisTick.lineStyle" title="分割线"></line-style> -->
    </template>
    <el-divider>刻度标签</el-divider>
    <config-item label="显示刻度标签：">
      <el-switch label="显示刻度标签：" v-model="axisLabel.show"></el-switch>
    </config-item>
    <template v-if="axisLabel.show">
      <config-item label="标签格式：">
        <el-input label="标签格式：" v-model="axisLabel.formatter"></el-input>
      </config-item>
      <config-item label="卡度线距离：">
        <el-input-number controls-position="right" label="卡度线距离：" v-model="axisLabel.distance"></el-input-number>
      </config-item>
      <config-item label=""></config-item>
      <!-- <text-style :text-style="axisLabel"></text-style> -->
      <!-- <border-style :border="axisLabel" style="margin-top: 10px;"></border-style> -->
    </template>
    <el-divider>仪表盘指针</el-divider>
    <config-item label="仪表盘指针：">
      <el-switch label="仪表盘指针：" v-model="pointer.show"></el-switch>
    </config-item>
    <template v-if="pointer.show">
      <config-item label="指针长度：">
        <el-input-number controls-position="right" :min="0" label="指针长度：" :max="100" :value="Number.parseInt(pointer.length)"
          @change="(value) => { pointer.length = `${value}%` }"></el-input-number>
      </config-item>
      <config-item label="指针宽度：">
        <el-input-number controls-position="right" :min="0" v-model="pointer.width" label="指针宽度："></el-input-number>
      </config-item>
      <!-- <item-style :item-style="itemStyle"></item-style> -->
    </template>
    <el-divider>标题</el-divider>
    <config-item label="标题：">
      <el-switch label="标题：" v-model="title.show"></el-switch>
    </config-item>
    <template v-if="title.show">
      <!-- <text-style :text-style="title"></text-style> -->
      <!-- <border-style :border="title" style="margin-top: 10px;"></border-style> -->
    </template>
    <el-divider>仪表盘详情</el-divider>
    <config-item label="仪表盘详情：">
      <el-switch label="仪表盘详情：" v-model="detail.show"></el-switch>
    </config-item>
    <template v-if="detail.show">
      <config-item label="详情格式：">
        <el-input label="详情格式：" v-model="detail.formatter"></el-input>
      </config-item>
      <!-- <text-style :text-style="detail"></text-style>
      <border-style :border="detail" style="margin-top: 10px;"></border-style> -->
    </template>
  </div>
</template>

<script>
// import LineStyle from '../lineStyle/LineStyle';
// import TextStyle from '../textStyle/TextStyle';
// import BorderStyle from '../border/BorderStyle';
// import ItemStyle from '../itemStyle/ItemStyle';
// import GaugeColor from '../gaugeColor/GaugeColor';

import { defineComponent, computed } from 'vue';
import componentsMap from '../index';

const { ChartsLabelStyle, ConfigItem, ItemStyle } = componentsMap;

export default defineComponent({
  name: 'GaugeSeries',
  components: {
    // LineStyle,
    // TextStyle,
    // BorderStyle,
    // ItemStyle,
    // GaugeColor,
    ConfigItem
  },
  props: {
    series: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const series = computed(() => props.series);
    const { axisLine,//轴线
      splitLine,//分隔线样式
      axisTick,//刻度样式
      axisLabel,//刻度标签
      pointer,// 仪表盘指针
      itemStyle,//仪表盘指针样式。
      title,
      detail } = series.value;

    return {
      axisLine,
      splitLine,
      axisTick,
      axisLabel,
      pointer,
      itemStyle,
      title,
      detail
    }
  }
});
</script>
