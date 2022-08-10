<template>
  <div v-show="legend.show">
    <!-- <el-divider>公用样式</el-divider> -->
    <!--图例公共文字样式设置-->
    <!-- <text-style :text-style="textStyle" title="文字"></text-style>-->
    <!--图例公共边框样式设置-->
    <!-- <border-style :border="borderStyle" style="margin-top: 6px;" title="边框"></border-style>-->
    <el-divider>配置</el-divider>

    <config-item label="图例类型：">
      <el-radio-group size="small" label="图例类型：" v-model="legend.type">
        <el-radio-button label="plain">普通图例</el-radio-button>
        <el-radio-button label="scroll">滚动翻页图例</el-radio-button>
      </el-radio-group>
    </config-item>

    <!--图例距离左边的距离-->
    <horizontal-align label="左边距离：" v-model="legend.left"></horizontal-align>
    <!--图例距离上边的距离-->
    <vertical-align label="上边距离：" v-model="legend.top"></vertical-align>
    <!--方向-->
    <config-item label="布局朝向：">
      <el-radio-group size="small" v-model="legend.orient">
        <el-radio-button label="horizontal">水平</el-radio-button>
        <el-radio-button label="vertical">垂直</el-radio-button>
      </el-radio-group>
    </config-item>
    <!--  <vertical-align label="标记与文本对齐：" v-model="legend.align"></vertical-align>-->
    <!-- <padding-style label="内边距：" :padding="legend.padding"></padding-style>-->
    <!-- <number-input label="图例项间隔：" v-model="legend.itemGap"></number-input>
    <number-input label="图例项宽度：" v-model="legend.itemWidth"></number-input>
    <number-input label="图例项高度：" v-model="legend.itemHeight"></number-input>
    <text-input label="格式化图例项(在{name}两边填写)：" v-model="legend.formatter"></text-input>
    <color-style label="图例关闭颜色" v-model="legend.inactiveColor"></color-style> -->
    <!-- <border-style :border="legend"></border-style>-->
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import componentsMap from '../index'

const { HorizontalAlign,
  VerticalAlign, ConfigItem } = componentsMap;

export default defineComponent({
  name: 'ChartsLegend',
  components: {
    HorizontalAlign,
    VerticalAlign,
    ConfigItem
  },
  props: {
    legend: {
      type: Object,
      required: true
    }
  },
  computed: {
    textStyle() {
      return this.legend.textStyle;
    },
    borderStyle() {
      return this.legend.textStyle;
    }
  }
});
</script>

<style scoped>
</style>
