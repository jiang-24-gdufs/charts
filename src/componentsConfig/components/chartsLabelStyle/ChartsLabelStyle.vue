<template>
  <div>
    <el-row>
      <el-col :span="8" />
      <el-col :span="16" />
    </el-row>
    <!-- <el-row>
      <el-col :span="8">显示标签：</el-col>
      <el-col :span="16">
        <el-switch v-model="label.show">
        </el-switch>
      </el-col>
    </el-row> -->
    <config-item label="显示标签：">
      <el-switch v-model="label.show" />
    </config-item>
    <template v-if="label.show">
      <config-item label="标签位置：">
        <el-select v-model="label.position" placeholder="请选择" size="small" style="width: 100%">
          <el-option v-for="(item, index) of position" :key="index" :label="item" :value="item" />
        </el-select>
      </config-item>

      <config-item label="距离图形的距离：">
        <el-input-number v-model="label.distance" controls-position="right" />
      </config-item>
      <config-item label="标签旋转角度：">
        <el-input-number v-model="label.rotate" controls-position="right" />
      </config-item>
      <config-item label="标签格式：">
        <el-input v-model="label.formatter" />
      </config-item>
    </template>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import componentsMap from '../index';

const { HorizontalAlign, VerticalAlign, ConfigItem } = componentsMap;

export default defineComponent({
  name: 'ChartsLabelStyle',
  components: {
    ConfigItem,
    HorizontalAlign,
    VerticalAlign,
  },
  props: {
    label: {
      type: Object,
      required: true,
    },
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
        'insideBottomRight',
      ],
    };
  },
});
</script>

<style scoped></style>
