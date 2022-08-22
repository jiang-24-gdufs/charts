<template>
  <div v-show="xAxis.show">
    <el-divider>X轴基本设置</el-divider>
    <config-item label="X轴位置：">
      <el-radio-group v-model="xAxis.position" size="small">
        <el-radio-button label="top">
          <el-tooltip effect="dark" content="上" placement="bottom">
            <i class="fa fa-hand-o-up"></i>
          </el-tooltip>
        </el-radio-button>
        <el-radio-button label="bottom">
          <el-tooltip effect="dark" content="下" placement="bottom">
            <i class="fa fa-hand-o-down"></i>
          </el-tooltip>
        </el-radio-button>
      </el-radio-group>
    </config-item>
    <!-- <config-item label="是否反向坐标轴：">
      </span>
      <el-switch v-model="xAxis.inverse"></el-switch>
    </config-item> -->
    <config-item
      label="
        位置偏移："
    >
      <el-input-number v-model="xAxis.offset" controls-position="right" label="位置偏移：" />
    </config-item>
    <config-item
      label="
        X轴类型："
    >
      <el-radio-group v-model="xAxis.type" size="small" label="X轴类型：">
        <el-radio-button label="value">数值</el-radio-button>
        <el-radio-button label="category">类目轴</el-radio-button>
        <el-radio-button label="time">时间</el-radio-button>
        <el-radio-button label="log">对数</el-radio-button>
      </el-radio-group>
    </config-item>

    <config-item
      label="
        坐标轴名字："
    >
      <el-input v-model="xAxis.name" label="坐标轴名字：" />
    </config-item>
    <config-item
      label="
        名字位置："
    >
      <el-radio-group v-model="xAxis.nameLocation" size="small">
        <el-radio-button label="start">开始位置</el-radio-button>
        <el-radio-button label="center">中间</el-radio-button>
        <el-radio-button label="end">结束位置</el-radio-button>
      </el-radio-group>
    </config-item>
    <!-- <border-style :border="xAxis.nameTextStyle"></border-style> -->
    <!-- <text-style :text-style="xAxis.nameTextStyle" style="margin-top: 10px;"></text-style> -->
    <config-item
      label="
        坐标轴两边留白策略："
    >
      <el-switch v-model="xAxis.boundaryGap" label="坐标轴两边留白策略：" />
    </config-item>
    <config-item
      label="
        名字与X轴距离："
    >
      <el-input-number v-model="xAxis.nameGap" controls-position="right" label="名字与X轴距离：" />
    </config-item>
    <el-divider>刻度线</el-divider>
    <config-item
      label="
        刻度线："
    >
      <el-switch v-model="axisLine.show" label="刻度线：" />
    </config-item>
    <template v-if="axisLine.show">
      <config-item label="显示零刻度：">
        <el-switch v-model="axisLine.onZero" label="显示零刻度：" />
      </config-item>
      <config-item label="首端箭头：">
        <el-radio-group v-model="axisLine.symbol[0]" size="small" label="首端箭头：">
          <el-radio-button label="none">无箭头</el-radio-button>
          <el-radio-button label="arrow">箭头</el-radio-button>
        </el-radio-group>
      </config-item>
      <config-item label="首端箭头偏移：">
        <el-input-number
          v-model="axisLine.symbolOffset[0]"
          controls-position="right"
          label="首端箭头偏移："
        />
      </config-item>
      <config-item label="末端箭头：">
        <el-radio-group v-model="axisLine.symbol[1]" size="small" label="末端箭头：">
          <el-radio-button label="none">无箭头</el-radio-button>
          <el-radio-button label="arrow">箭头</el-radio-button>
        </el-radio-group>
      </config-item>
      <config-item label="尾端箭头偏移：">
        <el-input-number
          v-model="axisLine.symbolOffset[1]"
          controls-position="right"
          label="尾端箭头偏移："
        />
      </config-item>
      <config-item label="箭头宽度：">
        <el-input-number
          v-model="axisLine.symbolSize[0]"
          controls-position="right"
          label="箭头宽度："
        />
      </config-item>
      <config-item label="箭头高度：">
        <el-input-number
          v-model="axisLine.symbolSize[1]"
          controls-position="right"
          label="箭头高度："
        />
      </config-item>
      <!-- <line-style :line-style="axisLine.lineStyle"></line-style> -->
    </template>
    <!-- <el-divider>X轴刻度</el-divider>
    <el-switch label="刻度：" v-model="axisTick.show"></el-switch>
    <div v-show="axisTick.show">
      <el-switch label="刻度朝内：" v-model="axisTick.inside"></el-switch>
      <el-input-number controls-position="right"  label="刻度长度：" v-model="axisTick.length"></el-input-number>
      <line-style :line-style="axisTick.lineStyle"></line-style>
    </div>
    <el-divider>X轴刻度标签</el-divider>
    <el-switch label="刻度标签：" v-model="axisLabel.show"></el-switch>
    <el-switch label="朝内：" v-model="axisLabel.inside"></el-switch>
    <el-input-number controls-position="right"  label="旋转角度：" v-model="axisLabel.rotate"></el-input-number>
    <el-input-number controls-position="right"  label="刻度线距离：" v-model="axisLabel.margin"></el-input-number> -->
    <!-- <border-style title="刻度标签边框样式" :border="axisLabel"></border-style> -->
    <!-- <text-style title="刻度标签文字样式" :text-style="axisLabel" style="margin-top: 10px;">
      <template #top>
        <div>
          <horizontal-align label="文字水平：" v-model="axisLabel.align"></horizontal-align>
          <vertical-align label="文字处置：" v-model="axisLabel.verticalAlign"></vertical-align>
        </div>
      </template>
    </text-style> -->
  </div>
</template>

<script>
// import SwitchInput from '../switchInput/SwitchInput';
// import SmartRadioGroup from '../../../components/smartRadio/SmartRadioGroup';
// import SmartRadio from '../../../components/smartRadio/SmartRadio';
// import NumberInput from '../numberInput/NumberInput';
// import TextInput from '../textInput/TextInput';
// import BorderStyle from '../border/BorderStyle';
// import TextStyle from '../textStyle/TextStyle';
// import Divider from '../../../components/el-divider/Divider';
// import LineStyle from '../lineStyle/LineStyle';
// import HorizontalAlign from '../horizontalAlign/HorizontalAlign';
// import VerticalAlign from '../verticalAlign/VerticalAlign';

import { defineComponent, inject, computed } from 'vue';

import componentsMap from '../index';

const { ConfigItem } = componentsMap;

export default defineComponent({
  name: 'XAxis',
  components: {
    // Divider,
    // SwitchInput,
    // SmartRadioGroup,
    // SmartRadio,
    // NumberInput,
    // TextInput,
    // BorderStyle,
    // TextStyle,
    // LineStyle,
    // VerticalAlign,
    // HorizontalAlign
    ConfigItem,
  },
  props: {
    xAxis: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // 刻度线
    axisLine() {
      return this.xAxis.axisLine;
    },
    // 刻度标签
    axisLabel() {
      return this.xAxis.axisLabel;
    },
    // 刻度
    axisTick() {
      return this.xAxis.axisTick;
    },
  },
});
</script>

<style scoped></style>
