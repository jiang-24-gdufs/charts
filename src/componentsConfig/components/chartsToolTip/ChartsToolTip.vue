<template>
  <div v-show="toolTip.show">
    <config-item label="触发类型：">
      <el-radio-group v-model="toolTip.trigger" size="small" label="触发类型：">
        <el-radio-button label="item">数据项</el-radio-button>
        <el-radio-button label="axis">坐标轴</el-radio-button>
        <el-radio-button label="none">无</el-radio-button>
      </el-radio-group>
    </config-item>
    <config-item label="触发方式：">
      <el-radio-group v-model="toolTip.triggerOn" size="small" label="触发方式：">
        <el-radio-button label="mousemove">鼠标移动</el-radio-button>
        <el-radio-button label="click">点击</el-radio-button>
        <el-radio-button label="mousemove|click">前两者</el-radio-button>
      </el-radio-group>
    </config-item>
    <config-item label="显示提示浮层：">
      <el-switch v-model="toolTip.showContent" label="显示提示浮层：" />
    </config-item>
    <config-item label="总是显示提示框：">
      <el-switch v-model="toolTip.alwaysShowContent" label="总是显示提示框：" />
    </config-item>
    <el-alert
      title="输出格式"
      style="margin: 10px 0"
      type="success"
      description="模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。"
    />
    <config-item label="输出格式：">
      <el-input v-model="toolTip.formatter" label="输出格式：" />
    </config-item>
    <config-item label="背景颜色：">
      <el-color-picker v-model="toolTip.backgroundColor" label="背景颜色：" />
    </config-item>
    <config-item label="边框颜色：">
      <el-color-picker v-model="toolTip.borderColor" label="边框颜色：" />
    </config-item>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import componentsMap from '../index';

const { ConfigItem } = componentsMap;

export default defineComponent({
  name: 'ChartsToolTip',
  components: {
    ConfigItem,
  },
  props: {
    toolTip: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped></style>
