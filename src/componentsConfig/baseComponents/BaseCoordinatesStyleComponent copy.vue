<template>
  <base-charts-style-components v-bind="$props">
    <smart-collapse-item v-for="(item, index) in xAxis" :key="index + 'x'">
      <!--X轴配置-->
      <div slot="title" style="display: flex; align-items: center; font-size: 13px">
        <i class="fa fa-arrows-h" style="width: 25px; text-align: center"></i>
        <span>X轴({{ item.name }}）</span>
        <span style="margin-left: 10px" @click.prevent.stop>
          <el-switch v-model="item.show" size="mini" />
        </span>
      </div>
      <x-axis :x-axis="item" />
    </smart-collapse-item>
    <smart-collapse-item v-for="(item, index) in yAxis" :key="index + 'y'">
      <!--y轴配置-->
      <div slot="title" style="display: flex; align-items: center; font-size: 13px">
        <i class="fa fa-arrows-v" style="width: 25px; text-align: center"></i>
        <span>Y轴({{ item.name }}）</span>
        <span style="margin-left: 10px" @click.prevent.stop>
          <el-switch v-model="item.show" size="mini" />
        </span>
      </div>
      <y-axis :y-axis="item" />
    </smart-collapse-item>
    <slot></slot>
  </base-charts-style-components>
</template>

<script>
import chartsConfigMixins from '../../mixins/chartsConfigMixins';
import componentsConfigMixins from '../../mixins/componentsConfigMixins';
import SmartCollapseItem from '../../components/smartCollapse/SmartCollapseItem';
import BaseChartsStyleComponents from '../baseComponents/BaseChartsStyleComponents';

export default {
  name: 'StyleMultipleXAxisBarCharts',
  components: {
    SmartCollapseItem,
    XAxis: () => import('../components/xAxis/XAxis'),
    YAxis: () => import('../components/yAxis/YAxis'),
    BaseChartsStyleComponents,
  },
  mixins: [componentsConfigMixins, chartsConfigMixins],
};
</script>

<style scoped></style>
