<template>
  <div class="text-style">
    <div class="text-style-header" v-if="title !== null">{{ title }}</div>
    <slot name="top"></slot>
    <config-item label="字体颜色：">
      <el-color-picker v-model="textStyle.color"></el-color-picker>
    </config-item>
    <!-- <el-color-picker label="字体颜色：" v-model="textStyle.color"></el-color-picker> -->
    <!-- <smart-radio-group label="字体风格：" v-model="textStyle.fontStyle">
            <smart-radio value="normal" class="charts-font-style">标准</smart-radio>
            <smart-radio value="italic" class="charts-font-style">斜体字</smart-radio>
            <smart-radio value="oblique" class="charts-font-style">倾斜字</smart-radio>
        </smart-radio-group> -->
    <!-- <smart-radio-group label="字体风格：" v-model="textStyle.fontWeight">
            <smart-radio value="normal" class="charts-font-style">标准</smart-radio>
            <smart-radio value="lighter" class="charts-font-style">清淡的</smart-radio>
            <smart-radio value="bold" class="charts-font-style">粗体</smart-radio>
            <smart-radio value="bolder" class="charts-font-style">特粗</smart-radio>
        </smart-radio-group> -->
    <!-- <smart-radio-group label="字体系列：" v-model="textStyle.fontFamily">
            <smart-radio value="sans-serif" class="charts-font-style">无衬</smart-radio>
            <smart-radio value="monospace" class="charts-font-style">等宽</smart-radio>
            <smart-radio value="Microsoft YaHei" class="charts-font-style">微软雅黑</smart-radio>
        </smart-radio-group> -->
    <!-- <number-input label="字体大小：" v-model="textStyle.fontSize"></number-input>
        <color-style label="描边颜色：" v-model="textStyle.textBorderColor"></color-style>
        <number-input label="描边宽度：" v-model="textStyle.textBorderWidth"></number-input>
        <number-input label="边框模糊距离：" v-model="textStyle.textShadowBlur"></number-input>
        <color-style label="描边阴影颜色：" v-model="textStyle.textShadowColor"></color-style>
        <number-input label="向右偏移距离：" v-model="textStyle.textShadowOffsetX"></number-input>
        <number-input label="向上偏移距离：" v-model="textStyle.textShadowOffsetY"></number-input> -->
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import componentsMap from '../index';

const { ConfigItem } = componentsMap

export default defineComponent({
  name: 'TextStyle',
  components: {
    ConfigItem
  },
  props: {
    textStyle: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: null
    }
  }
});
</script>

<style scoped>
.text-style {
  border: 1px solid #ffd77a;
  background-color: #fff9e6;
  padding: 3px;
}

.text-style-header {
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 13px;
  border-bottom: 1px solid #ffd77a;
}

.charts-font-style {
  padding: 5px 3px;
  border-radius: 3px;
  border: 1px solid #abdcff;
  margin-right: 2px;
  font-size: 13px;
  color: #1298db;
}
</style>
