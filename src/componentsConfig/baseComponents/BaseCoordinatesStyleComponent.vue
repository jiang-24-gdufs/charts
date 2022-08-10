<template>
  <base-charts-style-components v-bind="$props">
    <smart-collapse-item v-for="(item, index) in xAxis" :key="index + 'x'">
      <!--X轴配置-->
      <template v-slot:title>
        <div style="display: flex;align-items: center;font-size: 13px;">
          <i class="fa fa-arrows-h" style="width: 25px;text-align: center;"></i>
          <span>X轴({{ item.name }}）</span>
          <span @click.prevent.stop style="margin-left: 10px;">
            <el-switch v-model="item.show" size="small"></el-switch>
          </span>
        </div>
      </template>
      <x-axis :x-axis="item"></x-axis>
    </smart-collapse-item>
    <smart-collapse-item v-for="(item, index) in yAxis" :key="index + 'y'">
      <!--y轴配置-->
      <template v-slot:title>
        <div style="display: flex;align-items: center;font-size: 13px;">
          <i class="fa fa-arrows-v" style="width: 25px;text-align: center;"></i>
          <span>Y轴({{ item.name }}）</span>
          <span @click.prevent.stop style="margin-left: 10px;">
            <el-switch v-model="item.show" size="small"></el-switch>
          </span>
        </div>
      </template>
      <y-axis :y-axis="item"></y-axis>
    </smart-collapse-item>
    <slot></slot>
  </base-charts-style-components>
</template>

<script>
import { defineComponent, computed } from 'vue';
// import chartsConfigMixins from '../../mixins/chartsConfigMixins';
// import componentsConfigMixins from '../../mixins/componentsConfigMixins';
import SmartCollapseItem from '@/components/smartCollapse/SmartCollapseItem.vue';
import BaseChartsStyleComponents from '../baseComponents/BaseChartsStyleComponents.vue';
import { useReportingEditStore } from '@/stores/reporting-edit';
import componentsMap from '../components'

const { YAxis, XAxis } = componentsMap;

export default defineComponent({
  name: 'BaseCoordinatesStyle',
  // mixins: [componentsConfigMixins, chartsConfigMixins],
  // props: {
  //   xAxis: {
  //     type: Array,
  //     default: ()=>[]
  //   },
  //   yAxis: {
  //     type: Array,
  //     default: ()=>[]
  //   }
  // },
  components: {
    SmartCollapseItem,
    XAxis,
    YAxis,
    BaseChartsStyleComponents
  },
  setup(props) {
    const store = useReportingEditStore();
    const currConfigItem = computed(() => store.currConfigItem);

    const xAxis = computed(() => currConfigItem.value.option.xAxis);
    const yAxis = computed(() => currConfigItem.value.option.yAxis);

    return {
      xAxis,
      yAxis,
    }
  }
});
</script>

<style scoped>
</style>

