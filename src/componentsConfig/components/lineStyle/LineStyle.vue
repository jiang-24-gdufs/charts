<template>
  <div class="line-style">
    <config-item label="颜色：">
      <el-coloc-picker label="颜色：" v-model="lineStyle.color"></el-coloc-picker>
    </config-item>
    <config-item label="轴线宽度：">
      <el-input-number controls-position="right" v-model="lineStyle.width" :min="0">
      </el-input-number>
    </config-item>
    <config-item label="轴线类型：">
      <el-radio-group size="small" v-model="lineStyle.type">
        <el-radio-button label="solid">实线</el-radio-button>
        <el-radio-button label="dashed">虚线</el-radio-button>
        <el-radio-button label="dotted">点线</el-radio-button>
      </el-radio-group>
    </config-item>
    <config-item label="边框模糊距离：">
      <el-input-number controls-position="right" v-model="lineStyle.shadowBlur">
      </el-input-number>
    </config-item>
    <config-item label="描边阴影颜色：">
      <el-coloc-picker v-model="lineStyle.shadowColor"></el-coloc-picker>

    </config-item>
    <config-item label="向右偏移距离：">
      <el-input-number controls-position="right" v-model="lineStyle.shadowOffsetX">
      </el-input-number>
    </config-item>
    <config-item label="向上偏移距离：">
      <el-input-number controls-position="right" v-model="lineStyle.shadowOffsetY">
      </el-input-number>
    </config-item>

    <config-item label="透明度：">
      <el-input-number controls-position="right" v-model="lineStyle.opacity" :step="0.1" :min="0" :max="1">
      </el-input-number>
    </config-item>

  </div>
</template>

<script>
// import SmartRadioGroup from '../../../components/smartRadio/SmartRadioGroup';
// import SmartRadio from '../../../components/smartRadio/SmartRadio';
// import ColorInput from '../colorInput/ColorInput';
// import NumberInput from '../numberInput/NumberInput';

import { defineComponent, inject, computed } from 'vue';

import componentsMap from '../index';

const { ConfigItem } = componentsMap

export default defineComponent({
  name: 'LineStyle',
  components: {
    // SmartRadioGroup,
    // SmartRadio,
    // ColorInput,
    // NumberInput
    ConfigItem
  },
  props: {
    lineStyle: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped>
.line-style {
  padding: 3px;
  border: 1px solid #8ce6b0;
  background-color: #edfff3;
}
</style>
