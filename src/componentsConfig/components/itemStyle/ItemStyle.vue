<template>
  <div class="item-style">
    <config-item label="图形颜色：">
      <el-color-picker v-model="itemStyle.color" />
    </config-item>
    <config-item label="边框颜色：">
      <el-color-picker v-model="itemStyle.borderColor" />
    </config-item>
    <config-item label="边框宽度：">
      <el-input-number v-model="itemStyle.borderWidth" controls-position="right" />
    </config-item>
    <config-item label="边框类型：">
      <el-radio-group v-model="itemStyle.borderType" size="small">
        <el-radio-button label="solid">实线</el-radio-button>
        <el-radio-button label="dashed">虚线</el-radio-button>
        <el-radio-button label="dotted">点线</el-radio-button>
      </el-radio-group>
    </config-item>
    <config-item label="阴影模糊距离：">
      <el-input-number v-model="itemStyle.shadowBlur" controls-position="right" />
    </config-item>
    <config-item label="阴影颜色：">
      <el-color-picker v-model="itemStyle.shadowColor" />
    </config-item>
    <config-item label="X轴的偏移：">
      <el-input-number v-model="itemStyle.shadowOffsetX" controls-position="right" />
    </config-item>
    <config-item label="Y轴的偏移：">
      <el-input-number v-model="itemStyle.shadowOffsetY" controls-position="right" />
    </config-item>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, inject, computed } from 'vue';
import componentsMap from '../index';

const { ConfigItem } = componentsMap;

export default defineComponent({
  name: 'ItemStyle',
  components: {
    ConfigItem,
  },
  props: {
    itemStyle: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.item-style {
  padding: 3px;
  border: 1px solid #8ce6b0;
  background-color: #edfff3;
}
</style>
