<template>
  <div v-show="toolTip.show">
    <config-item label="触发类型：">
      <el-radio-group size="small" label="触发类型：" v-model="toolTip.trigger">
        <el-radio-button label="item">数据项</el-radio-button>
        <el-radio-button label="axis">坐标轴</el-radio-button>
        <el-radio-button label="none">无</el-radio-button>
      </el-radio-group>
    </config-item>
    <config-item label="触发方式：">
      <el-radio-group size="small" label="触发方式：" v-model="toolTip.triggerOn">
        <el-radio-button label="mousemove">鼠标移动</el-radio-button>
        <el-radio-button label="click">点击</el-radio-button>
        <el-radio-button label="mousemove|click">前两者</el-radio-button>
      </el-radio-group>
    </config-item>
    <config-item label="显示提示浮层：">
      <el-switch label="显示提示浮层：" v-model="toolTip.showContent"></el-switch>
    </config-item>
    <config-item label="总是显示提示框：">
      <el-switch label="总是显示提示框：" v-model="toolTip.alwaysShowContent"></el-switch>
    </config-item>
    <el-alert title="输出格式" style="margin: 10px 0;" type="success"
      description="模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。"></el-alert>
    <config-item label="输出格式：">
      <el-input label="输出格式：" v-model="toolTip.formatter"></el-input>
    </config-item>
    <config-item label="背景颜色：">
      <el-color-picker label="背景颜色：" v-model="toolTip.backgroundColor"></el-color-picker>
    </config-item>
    <config-item label="边框颜色：">
      <el-color-picker label="边框颜色：" v-model="toolTip.borderColor"></el-color-picker>
    </config-item>


  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import componentsMap from '../index'
const { ConfigItem } = componentsMap;

export default defineComponent({
  name: 'ChartsToolTip',
  components: {
    ConfigItem
  },
  props: {
    toolTip: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped>
</style>
