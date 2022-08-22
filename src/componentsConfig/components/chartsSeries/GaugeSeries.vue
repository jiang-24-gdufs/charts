<template>
  <div>
    <el-divider>基本配置</el-divider>
    <template v-for="(item, i) of series.data" :key="i">
      <config-item label="数据项的名称：">
        <el-input v-model="item.name" />
      </config-item>
      <config-item :label="`数据项的值 ${i + 1}：`">
        <el-input-number v-model="item.value" controls-position="right" />
        <!-- Add or Remove -->
        <i v-if="i === 0" class="fa fa-plus" aria-hidden="true" @click="addData"></i>
        <i v-else class="fa fa-times" aria-hidden="true" @click="removeData(i)"></i>
      </config-item>
    </template>

    <config-item label="仪表盘半径：">
      <el-input-number
        controls-position="right"
        :model-value="Number.parseInt(series.radius)"
        label="仪表盘半径："
        @change="
          (value) => {
            series.radius = `${value}%`;
          }
        "
      />
    </config-item>
    <config-item label="开始角度：">
      <el-input-number
        v-model="series.startAngle"
        controls-position="right"
        label="开始角度："
        :min="0"
        :max="360"
      />
    </config-item>
    <config-item label="结束角度：">
      <el-input-number
        v-model="series.endAngle"
        controls-position="right"
        label="结束角度："
        :min="-360"
        :max="360"
      />
    </config-item>
    <config-item label="顺时针增长：">
      <el-switch v-model="series.clockwise" label="顺时针增长：" />
    </config-item>
    <config-item label="最小值：">
      <el-input-number v-model="series.min" controls-position="right" label="最小值：" />
    </config-item>
    <config-item label="最大值：">
      <el-input-number v-model="series.max" controls-position="right" label="最大值：" />
    </config-item>
    <config-item label="刻度分割：">
      <el-input-number v-model="series.splitNumber" controls-position="right" label="刻度分割：" />
    </config-item>
    <el-divider>轴线</el-divider>
    <config-item label="轴线：">
      <el-switch v-model="axisLine.show" label="轴线：" />
    </config-item>
    <template v-if="axisLine.show">
      <config-item label="轴线宽度：">
        <el-input-number
          v-model="axisLine.lineStyle.width"
          controls-position="right"
          label="轴线宽度："
        />
      </config-item>
      <!-- <gauge-color :color="axisLine.lineStyle.color"></gauge-color> -->
    </template>
    <el-divider>分割线</el-divider>
    <config-item label="显示分割线：">
      <el-switch v-model="splitLine.show" label="显示分割线：" />
    </config-item>
    <template v-if="splitLine.show">
      <config-item label="分隔线线长：">
        <el-input-number
          v-model="splitLine.length"
          controls-position="right"
          :min="0"
          label="分隔线线长："
        />
      </config-item>
      <!-- <line-style :line-style="splitLine.lineStyle" title="分割线"></line-style> -->
    </template>
    <el-divider>刻度样式</el-divider>
    <config-item label="刻度样式：">
      <el-switch v-model="axisTick.show" label="刻度样式：" />
    </config-item>
    <template v-if="axisTick.show">
      <config-item label="线间刻度数量：">
        <el-input-number
          v-model="axisTick.splitNumber"
          controls-position="right"
          label="线间刻度数量："
        />
      </config-item>
      <config-item label="刻度线长：">
        <el-input-number v-model="axisTick.length" controls-position="right" label="刻度线长：" />
      </config-item>
      <!-- <line-style :line-style="axisTick.lineStyle" title="分割线"></line-style> -->
    </template>
    <el-divider>刻度标签</el-divider>
    <config-item label="显示刻度标签：">
      <el-switch v-model="axisLabel.show" label="显示刻度标签：" />
    </config-item>
    <template v-if="axisLabel.show">
      <config-item label="标签格式：">
        <el-input v-model="axisLabel.formatter" label="标签格式：" />
      </config-item>
      <config-item label="卡度线距离：">
        <el-input-number
          v-model="axisLabel.distance"
          controls-position="right"
          label="卡度线距离："
        />
      </config-item>
      <config-item label="" />
      <!-- <text-style :text-style="axisLabel"></text-style> -->
      <!-- <border-style :border="axisLabel" style="margin-top: 10px;"></border-style> -->
    </template>
    <el-divider>仪表盘指针</el-divider>
    <config-item label="仪表盘指针：">
      <el-switch v-model="pointer.show" label="仪表盘指针：" />
    </config-item>
    <template v-if="pointer.show">
      <config-item label="指针长度：">
        <el-input-number
          controls-position="right"
          :min="0"
          label="指针长度："
          :max="100"
          :value="Number.parseInt(pointer.length)"
          @change="
            (value) => {
              pointer.length = `${value}%`;
            }
          "
        />
      </config-item>
      <config-item label="指针宽度：">
        <el-input-number
          v-model="pointer.width"
          controls-position="right"
          :min="0"
          label="指针宽度："
        />
      </config-item>
      <!-- <item-style :item-style="itemStyle"></item-style> -->
    </template>
    <el-divider>标题</el-divider>
    <config-item label="标题：">
      <el-switch v-model="title.show" label="标题：" />
    </config-item>
    <template v-if="title.show">
      <text-style :text-style="title">
        <template #top>
          <el-input v-model="title.name" />
        </template>
      </text-style>
      <!-- <border-style :border="title" style="margin-top: 10px;"></border-style> -->
    </template>
    <el-divider>仪表盘详情</el-divider>
    <config-item label="仪表盘详情：">
      <el-switch v-model="detail.show" label="仪表盘详情：" />
    </config-item>
    <template v-if="detail.show">
      <config-item label="详情格式：">
        <el-input v-model="detail.formatter" label="详情格式：" />
      </config-item>
      <!-- <text-style :text-style="detail"></text-style>
      <border-style :border="detail" style="margin-top: 10px;"></border-style> -->
    </template>
  </div>
</template>

<script>
// import LineStyle from '../lineStyle/LineStyle';
// import BorderStyle from '../border/BorderStyle';
// import GaugeColor from '../gaugeColor/GaugeColor';

import { defineComponent, computed } from 'vue';
import componentsMap from '../index';

const { ChartsLabelStyle, ConfigItem, TextStyle, ItemStyle } = componentsMap;

export default defineComponent({
  name: 'GaugeSeries',
  components: {
    // LineStyle,
    // TextStyle,
    // BorderStyle,
    // ItemStyle,
    // GaugeColor,
    ConfigItem,
    TextStyle,
  },
  props: {
    series: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const series = computed(() => props.series);
    const {
      axisLine, // 轴线
      splitLine, // 分隔线样式
      axisTick, // 刻度样式
      axisLabel, // 刻度标签
      pointer, // 仪表盘指针
      itemStyle, // 仪表盘指针样式。
      title,
      detail,
    } = series.value;

    function addData() {
      series.value.data.push({
        name: '',
        value: 50,
      });
    }

    function removeData(i) {
      series.value.data.splice(i, 1);
    }

    return {
      axisLine,
      splitLine,
      axisTick,
      axisLabel,
      pointer,
      itemStyle,
      title,
      detail,

      addData,
      removeData,
    };
  },
});
</script>
