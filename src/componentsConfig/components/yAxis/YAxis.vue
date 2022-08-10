<template>
  <div v-show="yAxis.show">
    <el-divider>Y轴基本配置</el-divider>
    <config-item label="Y轴位置：">
      <el-radio-group size="small" label="Y轴位置：" v-model="yAxis.position">
        <el-radio-button label="left">
          <el-tooltip effect="dark" content="左" placement="bottom">
            <i class="fa fa-hand-o-up"></i>
          </el-tooltip>
        </el-radio-button>
        <el-radio-button label="right">
          <el-tooltip effect="dark" content="右" placement="bottom">
            <i class="fa fa-hand-o-down"></i>
          </el-tooltip>
        </el-radio-button>
      </el-radio-group>
    </config-item>
    <config-item label="Y轴位置偏移：">
      <el-input-number controls-position="right" label="Y轴位置偏移：" v-model="yAxis.offset"></el-input-number>
    </config-item>
    <config-item label="
        Y轴类型：
      ">
      <el-radio-group size="small" label="Y轴类型：" v-model="yAxis.type">
        <el-radio-button label="value">数值</el-radio-button>
        <el-radio-button label="category">类目轴</el-radio-button>
        <el-radio-button label="time">时间</el-radio-button>
        <el-radio-button label="log">对数</el-radio-button>
      </el-radio-group>
    </config-item>
    <config-item label="
        Y轴轴名字：
      ">
      <el-input label="Y轴轴名字：" v-model="yAxis.name"></el-input>
    </config-item>
    <config-item label="名字位置：">
      <el-radio-group size="small" label="名字位置：" v-model="yAxis.nameLocation">
        <el-radio-button label="start">开始位置</el-radio-button>
        <el-radio-button label="center">中间</el-radio-button>
        <el-radio-button label="end">结束位置</el-radio-button>
      </el-radio-group>
    </config-item>
    <!-- <border-style :border="yAxis.nameTextStyle"></border-style> -->
    <!-- <text-style :text-style="yAxis.nameTextStyle" style="margin-top: 10px;"></text-style> -->
    <config-item label="
        坐标轴两边留白策略：
      ">
      <el-switch label="坐标轴两边留白策略：" v-model="yAxis.boundaryGap"></el-switch>
    </config-item>
    <config-item label="
        名字与Y轴距离：
      ">
      <el-input-number controls-position="right" label="名字与Y轴距离：" v-model="yAxis.nameGap"></el-input-number>
    </config-item>
    <el-divider>Y轴刻度线</el-divider>
    <config-item label="
        刻度线：
      ">
      <el-switch label="刻度线：" v-model="axisLine.show"></el-switch>
    </config-item>
    <div v-show="axisLine.show">
      <config-item label="
          显示零刻度：
        ">
        <el-switch label="显示零刻度：" v-model="axisLine.onZero"></el-switch>
      </config-item>
      <config-item label="
          首端箭头：
        ">
        <el-radio-group size="small" v-model="axisLine.symbol[0]" label="首端箭头：">
          <el-radio-button label="none">无箭头</el-radio-button>
          <el-radio-button label="arrow">箭头</el-radio-button>
        </el-radio-group>
      </config-item>
      <config-item label="
          首端箭头偏移：
        ">
        <el-input-number controls-position="right" label="首端箭头偏移：" v-model="axisLine.symbolOffset[0]"></el-input-number>
      </config-item>
      <config-item label="
          末端箭头：
        ">
        <el-radio-group size="small" v-model="axisLine.symbol[1]" label="末端箭头：">
          <el-radio-button label="none">无箭头</el-radio-button>
          <el-radio-button label="arrow">箭头</el-radio-button>
        </el-radio-group>
      </config-item>
      <config-item label="尾端箭头偏移：">

        <el-input-number controls-position="right" v-model="axisLine.symbolOffset[1]"></el-input-number>
      </config-item>
      <config-item label="箭头宽度：">

        <el-input-number controls-position="right" v-model="axisLine.symbolSize[0]"></el-input-number>
      </config-item>
      <config-item label="箭头高度：">

        <el-input-number controls-position="right" v-model="axisLine.symbolSize[1]"></el-input-number>
      </config-item>
      <line-style :line-style="axisLine.lineStyle"></line-style>
    </div>
    <el-divider>Y轴刻度</el-divider>
    <config-item label="刻度：">

      <el-switch label="刻度：" v-model="axisTick.show"></el-switch>
    </config-item>
    <div v-show="axisTick.show">
      <config-item label="刻度朝内：">

        <el-switch label="刻度朝内：" v-model="axisTick.inside"></el-switch>
      </config-item>
      <config-item label="刻度长度：">

        <el-input-number controls-position="right" label="刻度长度：" v-model="axisTick.length"></el-input-number>
      </config-item>
      <line-style :line-style="axisTick.lineStyle"></line-style>
    </div>
    <el-divider>Y轴刻度标签</el-divider>
    <config-item label="刻度：">

      <el-switch label="刻度：" v-model="axisLabel.show"></el-switch>
    </config-item>
    <div v-show="axisLabel.show">
      <config-item label="
          刻度格式：
        ">
        <el-input label="刻度格式：" v-model="axisLabel.formatter"></el-input>
      </config-item>
      <config-item label="刻度间隔：">
        <el-input-number controls-position="right" label="刻度间隔：" v-model="axisLabel.interval"></el-input-number>
      </config-item>
      <config-item label="旋转角度：">
        <el-input-number controls-position="right" label="旋转角度：" v-model="axisLabel.rotate"></el-input-number>
      </config-item>
      <config-item label="朝内：">
        <el-switch label="朝内：" v-model="axisLabel.inside"></el-switch>
      </config-item>
      <config-item label="刻度线距离：">
        <el-input-number controls-position="right" label="刻度线距离：" v-model="axisLabel.margin"></el-input-number>
      </config-item>
      <!-- <border-style title="刻度边框" :border="axisLabel"></border-style> -->
      <!-- <text-style title="刻度文字样式" :text-style="axisLabel" style="margin-top: 10px;">
        <template #top>
          <div>
            <horizontal-align label="文字水平：" v-model="axisLabel.align"></horizontal-align>
            <vertical-align label="文字处置：" v-model="axisLabel.verticalAlign"></vertical-align>
          </config-item>
        </template>
      </text-style> -->
    </div>
  </div>
</template>

<script>
// import BorderStyle from '../border/BorderStyle';
// import TextStyle from '../textStyle/TextStyle';
// import HorizontalAlign from '../horizontalAlign/HorizontalAlign';
// import VerticalAlign from '../verticalAlign/VerticalAlign';
import { defineComponent, computed } from 'vue';

import componentsMap from '../index'

const { ConfigItem, LineStyle } = componentsMap;


export default defineComponent({
  components: {
    // BorderStyle,
    // TextStyle,
    // HorizontalAlign,
    // VerticalAlign,
    LineStyle,
    ConfigItem
  },
  name: 'YAxis',
  props: {
    yAxis: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const yAxis = computed(() => props.yAxis)
    const { axisLine,// 刻度线
      axisLabel,// 刻度标签
      axisTick // 刻度
    } = yAxis.value
    return {
      axisLine,
      axisLabel,
      axisTick
    }
  }

});
</script>

<style scoped>
.charts-font-style {
  padding: 5px 3px;
  border-radius: 3px;
  border: 1px solid #abdcff;
  margin-right: 2px;
  font-size: 13px;
  color: #1298db;
}
</style>
