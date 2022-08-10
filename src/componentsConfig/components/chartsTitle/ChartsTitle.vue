<template>
  <div v-show="title.show">
    <!--全局配置-->
    <el-divider>全局</el-divider>
    <!--距离左侧-->
    <horizontal-align label="距离左侧：" v-model="title.left"></horizontal-align>
    <!--距离上侧-->
    <vertical-align label="距离上侧：" v-model="title.top"></vertical-align>
    <!-- <switch-input label="触发事件：" v-model="title.triggerEvent"></switch-input> -->
    <!--边框样式配置-->
    <!-- <border-style  :border="title"></border-style> -->
    <!--主标题配置-->
    <el-divider>主标题</el-divider>
    <!--主标题文本配置-->
    <text-style :text-style="textStyle">
      <template v-slot:top>
        <config-item label="标题内容：">

          <el-input label="标题内容：" v-model="title.text"></el-input>
        </config-item>
        <!-- <text-input label="标题链接：" v-model="title.link" ></text-input>
              <config-item label="窗口打开方式:" >
                  <el-select v-model="title.target" style="width: 100%;" size="mini">
                      <el-option label="新窗口" value="blank"></el-option>
                      <el-option label="当前窗口" value="self"></el-option>
                  </el-select>
              </config-item> -->
      </template>
    </text-style>
    <!--副标题配置-->
    <el-divider>副标题</el-divider>
    <text-style :text-style="subtextStyle">
      <template v-slot:top>
        <!-- <horizontal-align label="水平对齐：" v-model="subtextStyle.align"></horizontal-align>
        <vertical-align label="垂直对齐：" v-model="subtextStyle.verticalAlign"></vertical-align> -->
        <config-item label="标题内容：">

          <el-input label="标题内容：" v-model="title.subtext"></el-input>
        </config-item>
        <!-- <text-input label="标题链接：" v-model="title.sublink" ></text-input>
              <config-item label="窗口打开方式:">
                  <el-select v-model="title.subtarget" style="width: 100%;" size="mini">
                      <el-option label="新窗口" value="blank"></el-option>
                      <el-option label="当前窗口" value="self"></el-option>
                  </el-select>
              </config-item> -->
      </template>
    </text-style>
  </div>
</template>

<script>
// import ConfigItem from '../configItem/ConfigItem';
// import BorderStyle from '../border/BorderStyle';
// import TextStyle from '../textStyle/TextStyle';
// import VerticalAlign from '../verticalAlign/VerticalAlign.vue';
// import HorizontalAlign from '../horizontalAlign/HorizontalAlign.vue';
// import TextInput from '../textInput/TextInput';
// import SwitchInput from '../switchInput/SwitchInput';

import componentsMap from '../index'
const { VerticalAlign,
  HorizontalAlign, TextStyle, ConfigItem } = componentsMap;

export default {
  name: 'ChartsTitleConfig',
  components: {
    // ConfigItem,
    // BorderStyle,
    TextStyle,
    VerticalAlign,
    HorizontalAlign,
    ConfigItem,
    // TextInput,
    // SwitchInput
  },
  props: {
    // 图表标题
    title: {
      type: Object,
      required: true
    }
  },
  computed: {
    textStyle() {
      return this.title.textStyle;
    },
    subtextStyle() {
      return this.title.subtextStyle;
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
}

.flex-1 {
  flex: 1
}

.keep-all {
  word-break: keep-all;
}
</style>
