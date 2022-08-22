<template>
  <base-charts-style-components v-bind="$props">
    <smart-collapse-item
      v-for="(item, index) in xAxis"
      :key="index + 'x'"
      @contextmenu.prevent.stop="onRightClickX"
    >
      <!--X轴配置-->
      <template #title>
        <div style="display: flex; align-items: center; font-size: 13px">
          <i class="fa fa-arrows-h" style="width: 25px; text-align: center"></i>
          <span>X轴({{ item.name }}）</span>
          <span style="margin-left: 10px" @click.prevent.stop>
            <el-switch v-model="item.show" size="small" />
          </span>
        </div>
      </template>
      <x-axis :x-axis="item" />
    </smart-collapse-item>
    <smart-collapse-item
      v-for="(item, index) in yAxis"
      :key="index + 'y'"
      @contextmenu.prevent.stop="onRightClickY"
    >
      <!--y轴配置-->
      <template #title>
        <div style="display: flex; align-items: center; font-size: 13px">
          <i class="fa fa-arrows-v" style="width: 25px; text-align: center"></i>
          <span>Y轴({{ item.name }}）</span>
          <span style="margin-left: 10px" @click.prevent.stop>
            <el-switch v-model="item.show" size="small" />
          </span>
        </div>
      </template>
      <y-axis :y-axis="item" />
    </smart-collapse-item>
    <slot></slot>
  </base-charts-style-components>
</template>

<script>
import { defineComponent, computed } from 'vue';
import SmartCollapseItem from '@/components/smartCollapse/SmartCollapseItem.vue';
import BaseChartsStyleComponents from './BaseChartsStyleComponents.vue';
import { useReportingEditStore } from '@/stores/reporting-edit';
import componentsMap from '../components';

const { YAxis, XAxis } = componentsMap;

export default defineComponent({
  name: 'BaseCoordinatesStyle',

  components: {
    SmartCollapseItem,
    XAxis,
    YAxis,
    BaseChartsStyleComponents,
  },
  setup(props) {
    const store = useReportingEditStore();
    const currConfigItem = computed(() => store.currConfigItem);

    const xAxis = computed(() => currConfigItem.value.option.xAxis);
    const yAxis = computed(() => currConfigItem.value.option.yAxis);
    function onRightClickX() {}
    function onRightClickY() {}

    return {
      xAxis,
      yAxis,
      onRightClickX: console.log,
      onRightClickY: console.log,
    };
  },
});
</script>

<style scoped></style>
