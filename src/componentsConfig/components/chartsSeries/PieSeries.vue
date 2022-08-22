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
    <config-item label="开启扇区放大动画：">
      <el-switch v-model="series.hoverAnimation" label="开启扇区放大动画：" />
    </config-item>
    <config-item label="高亮扇区偏移距离：">
      <el-input-number
        v-model="series.hoverOffset"
        controls-position="right"
        label="高亮扇区偏移距离："
      />
    </config-item>
    <config-item label="是否支持多个选中：">
      <el-switch v-model="series.selectedMode" label="是否支持多个选中：" />
    </config-item>
    <config-item label="选中扇区的偏移：">
      <el-input-number
        v-model="series.selectedOffset"
        controls-position="right"
        label="选中扇区的偏移："
      />
    </config-item>
    <config-item label="顺时针排布扇区：">
      <el-switch v-model="series.clockwise" label="顺时针排布扇区：" />
    </config-item>
    <config-item label="起止角度：">
      <el-input-number
        v-model="series.startAngle"
        controls-position="right"
        label="起止角度："
        :min="0"
        :max="360"
        :step="10"
      />
    </config-item>
    <config-item label="最小扇区角度：">
      <el-input-number
        v-model="series.minAngle"
        controls-position="right"
        label="最小扇区角度："
        :min="0"
        :max="360"
        :step="10"
      />
    </config-item>
    <config-item label="最小扇区角度显示：">
      <el-input-number
        v-model="series.minShowLabelAngle"
        controls-position="right"
        label="最小扇区角度显示："
        :min="0"
        :max="360"
        :step="10"
      />
    </config-item>
    <config-item label="展示成南丁格尔图：">
      <el-switch v-model="series.avoidLabelOverlap" label="展示成南丁格尔图：" />
    </config-item>
    <config-item label="启用防止标签重叠策略：">
      <el-switch v-model="series.roseType" label="启用防止标签重叠策略：" />
    </config-item>
    <config-item label="在数据为0不显示扇区：">
      <el-switch v-model="series.stillShowZeroSum" label="在数据为0不显示扇区：" />
    </config-item>
    <config-item label="鼠标悬浮样式：">
      <el-radio-group v-model="series.cursor" size="small" label="鼠标悬浮样式：">
        <el-radio-button label="pointer" style="cursor: pointer">指针</el-radio-button>
        <el-radio-button label="move" style="cursor: move">移动</el-radio-button>
        <el-radio-button label="wait" style="cursor: wait">等待</el-radio-button>
        <el-radio-button label="help" style="cursor: help">帮助</el-radio-button>
      </el-radio-group>
    </config-item>

    <el-divider>标签</el-divider>
    <config-item label="显示标签：">
      <el-switch v-model="label.show" label="显示标签：" />
    </config-item>
    <config-item v-show="label.show" label="鼠标悬浮样式：">
      <el-radio-group v-model="label.position" size="small" label="标签位置：">
        <el-radio-button label="outside">扇区外侧</el-radio-button>
        <el-radio-button label="inside">扇区内部</el-radio-button>
        <el-radio-button label="center">中心</el-radio-button>
      </el-radio-group>
      <el-input v-model="label.formatter" label="标签格式：" />
      <!-- <text-style :text-style="label" title="标签文字样式"></text-style> -->
      <!-- <border-style :border="label" title="标签边框样式" style="margin-top: 10px;"></border-style> -->
    </config-item>
    <el-divider>标签引导线</el-divider>
    <config-item label="显示引导线：">
      <el-switch v-model="labelLine.show" label="显示引导线：" />
    </config-item>
    <!-- <div v-show="labelLine.show">
      <el-input-number controls-position="right"  label="引导线第一段长度：" v-model="labelLine.length"></el-input-number>
      <el-input-number controls-position="right"  label="引导线第二段长度：" v-model="labelLine.length2"></el-input-number>
      <el-switch label="平滑视觉引导线：" v-model="labelLine.smooth"></el-switch>
      <line-style :line-style="labelLine.lineStyle"></line-style>
      <el-switch label="高亮状态引导线：" v-model="labelLine.emphasis.show"></el-switch>
      <line-style :line-style="labelLine.emphasis.lineStyle" v-show="labelLine.emphasis.show"></line-style>
    </div> -->
    <el-divider>图形样式表</el-divider>
    <item-style :item-style="itemStyle" />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import componentsMap from '../index';

const { ChartsLabelStyle, ConfigItem, ItemStyle } = componentsMap;

export default defineComponent({
  name: 'PieSeries',
  components: {
    ItemStyle,
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
    const { label, labelLine, itemStyle, emphasis } = series.value;

    return {
      label, // 标签
      labelLine, // 标签线
      itemStyle, // 图型样式表
      emphasis,
    };
  },
});
</script>

<style scoped></style>
