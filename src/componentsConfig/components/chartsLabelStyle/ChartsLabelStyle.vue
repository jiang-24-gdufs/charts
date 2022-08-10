<template>
  <div>
    <el-row>
      <el-col :span="8"></el-col>
      <el-col :span="16"></el-col>
    </el-row>
    <!-- <el-row>
      <el-col :span="8">显示标签：</el-col>
      <el-col :span="16">
        <el-switch v-model="label.show">
        </el-switch>
      </el-col>
    </el-row> -->
    <config-item label="显示标签：">
      <el-switch v-model="label.show">
      </el-switch>
    </config-item>
    <template v-if="label.show">
      <config-item label="标签位置：">
        <el-select v-model="label.position" placeholder="请选择" size="small" style="width: 100%;">
          <el-option :key="index" :label="item" :value="item" v-for="(item, index) of position"></el-option>
        </el-select>
      </config-item>


      <config-item label="距离图形的距离：">
        <el-input-number controls-position="right"  v-model="label.distance"></el-input-number>
      </config-item>
      <config-item label="标签旋转角度：">
        <el-input-number controls-position="right"  v-model="label.rotate"></el-input-number>
      </config-item>
      <config-item label="标签格式：">
        <el-input v-model="label.formatter"></el-input>
      </config-item>
    </template>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

import componentsMap from '../index'

const { HorizontalAlign, VerticalAlign, ConfigItem } = componentsMap;

export default defineComponent({
  name: 'ChartsLabelStyle',
  components: {
    ConfigItem,
    HorizontalAlign,
    VerticalAlign
  },
  props: {
    label: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      position: [
        'top',
        'left',
        'right',
        'bottom',
        'inside',
        'insideRight',
        'insideTop',
        'insideBottom',
        'insideTopLeft',
        'insideBottomLeft',
        'insideTopRight',
        'insideBottomRight'
      ]
    }
  }
});
</script>

<style scoped>
</style>
