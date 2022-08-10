<template>
  <div>
    <el-divider>基本配置</el-divider>
    <config-item label="系列名称：">
      <el-input label="系列名称：" v-model="series.name"></el-input>
    </config-item>
    <config-item label="启用图例联动高亮：">
      <el-switch label="启用图例联动高亮：" v-model="series.legendHoverLink"></el-switch>
    </config-item>
    <config-item label="开启扇区放大动画：">
      <el-switch label="开启扇区放大动画：" v-model="series.hoverAnimation"></el-switch>
    </config-item>
    <config-item label="高亮扇区偏移距离：">
      <el-input-number controls-position="right" controls-position="right" label="高亮扇区偏移距离："
        v-model="series.hoverOffset"></el-input-number>
    </config-item>
    <config-item label="是否支持多个选中：">
      <el-switch label="是否支持多个选中：" v-model="series.selectedMode"></el-switch>
    </config-item>
    <config-item label="选中扇区的偏移：">
      <el-input-number controls-position="right" controls-position="right" label="选中扇区的偏移："
        v-model="series.selectedOffset"></el-input-number>
    </config-item>
    <config-item label="顺时针排布扇区：">
      <el-switch label="顺时针排布扇区：" v-model="series.clockwise"></el-switch>
    </config-item>
    <config-item label="起止角度：">
      <el-input-number controls-position="right" controls-position="right" label="起止角度：" :min="0" :max="360" :step="10"
        v-model="series.startAngle"></el-input-number>
    </config-item>
    <config-item label="最小扇区角度：">
      <el-input-number controls-position="right" controls-position="right" label="最小扇区角度：" :min="0" :max="360"
        :step="10" v-model="series.minAngle"></el-input-number>
    </config-item>
    <config-item label="最小扇区角度显示：">
      <el-input-number controls-position="right" controls-position="right" label="最小扇区角度显示：" :min="0" :max="360"
        :step="10" v-model="series.minShowLabelAngle">
      </el-input-number>
    </config-item>
    <config-item label="展示成南丁格尔图：">
      <el-switch label="展示成南丁格尔图：" v-model="series.avoidLabelOverlap"></el-switch>
    </config-item>
    <config-item label="启用防止标签重叠策略：">
      <el-switch label="启用防止标签重叠策略：" v-model="series.roseType"></el-switch>
    </config-item>
    <config-item label="在数据为0不显示扇区：">
      <el-switch label="在数据为0不显示扇区：" v-model="series.stillShowZeroSum"></el-switch>
    </config-item>
    <config-item label="鼠标悬浮样式：">
      <el-radio-group size="small" v-model="series.cursor" label="鼠标悬浮样式：">
        <el-radio-button label="pointer" style="cursor: pointer;">指针</el-radio-button>
        <el-radio-button label="move" style="cursor: move;">移动</el-radio-button>
        <el-radio-button label="wait" style="cursor: wait;">等待</el-radio-button>
        <el-radio-button label="help" style="cursor: help;">帮助</el-radio-button>
      </el-radio-group>
    </config-item>

    <el-divider>标签</el-divider>
    <config-item label="显示标签：">
      <el-switch label="显示标签：" v-model="label.show"></el-switch>
    </config-item>
    <config-item v-show="label.show" label="鼠标悬浮样式：">
      <el-radio-group size="small" v-model="label.position" label="标签位置：">
        <el-radio-button label="outside">扇区外侧</el-radio-button>
        <el-radio-button label="inside">扇区内部</el-radio-button>
        <el-radio-button label="center">中心</el-radio-button>
      </el-radio-group>
      <el-input label="标签格式：" v-model="label.formatter"></el-input>
      <!-- <text-style :text-style="label" title="标签文字样式"></text-style> -->
      <!-- <border-style :border="label" title="标签边框样式" style="margin-top: 10px;"></border-style> -->

    </config-item>
    <el-divider>标签引导线</el-divider>
    <config-item label="显示引导线：">
      <el-switch label="显示引导线：" v-model="labelLine.show"></el-switch>
    </config-item>
    <!-- <div v-show="labelLine.show">
      <el-input-number controls-position="right"  label="引导线第一段长度：" v-model="labelLine.length"></el-input-number>
      <el-input-number controls-position="right"  label="引导线第二段长度：" v-model="labelLine.length2"></el-input-number>
      <el-switch label="平滑视觉引导线：" v-model="labelLine.smooth"></el-switch>
      <line-style :line-style="labelLine.lineStyle"></line-style>
      <el-switch label="高亮状态引导线：" v-model="labelLine.emphasis.show"></el-switch>
      <line-style :line-style="labelLine.emphasis.lineStyle" v-show="labelLine.emphasis.show"></line-style>
    </div> -->
    <divider>图形样式表</divider>
    <item-style :item-style="itemStyle"></item-style>

  </div>
</template>



<script>
import { defineComponent } from 'vue';
import componentsMap from '../index';

const { ChartsLabelStyle, ConfigItem, ItemStyle } = componentsMap;


export default defineComponent({
  name: 'PieSeries',
  components: {
    ItemStyle,
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
    const { label, labelLine, itemStyle, emphasis } = series.value;

    return {
      label, // 标签
      labelLine, // 标签线
      itemStyle, // 图型样式表
      emphasis
    }
  },

});
</script>

<style scoped>
</style>
