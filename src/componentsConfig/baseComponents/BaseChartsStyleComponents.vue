<template>
  <base-collapse-style-component v-bind="$props">
    <smart-collapse-item title="全局样式配置" icon="fa fa-sliders">
      <!-- <text-style :text-style="textStyle"></text-style> -->
    </smart-collapse-item>
    <!--标题-->
    <smart-collapse-item>
      <template #title>
        <div style="display: flex; align-items: center; font-size: 13px">
          <i class="fa fa-header" style="width: 25px; text-align: center"></i>
          <span>标题</span>
          <span style="margin-left: 10px" @click.prevent.stop>
            <el-switch v-model="title.show" size="small" />
          </span>
        </div>
      </template>
      <!--图表标题配置项-->
      <charts-title :title="title" />
    </smart-collapse-item>
    <!--工具箱-->
    <smart-collapse-item>
      <template #title>
        <div style="display: flex; align-items: center; font-size: 13px">
          <i class="fa fa-gears" style="width: 25px; text-align: center"></i>
          <span>工具栏配置</span>
          <span style="margin-left: 10px" @click.prevent.stop>
            <el-switch v-model="toolbox.show" size="small" />
          </span>
        </div>
      </template>
      <!--图表工具箱配置项-->
      <charts-tool-box :toolbox="toolbox" />
    </smart-collapse-item>
    <!--提示框-->
    <smart-collapse-item>
      <template #title>
        <div style="display: flex; align-items: center; font-size: 13px">
          <i class="fa fa-window-maximize" style="width: 25px; text-align: center"></i>
          <span>提示框</span>
          <span style="margin-left: 10px" @click.prevent.stop>
            <el-switch v-model="tooltip.show" size="small" />
          </span>
        </div>
      </template>
      <!--提示框配置-->
      <charts-tool-tip :tool-tip="tooltip" />
    </smart-collapse-item>
    <!--图例配置-->
    <smart-collapse-item>
      <template #title>
        <div style="display: flex; align-items: center; font-size: 13px">
          <i class="fa fa-pie-chart" style="width: 25px; text-align: center"></i>
          <span>图例配置</span>
          <span style="margin-left: 10px" @click.prevent.stop>
            <el-switch v-model="legend.show" size="small" />
          </span>
        </div>
      </template>
      <!--图例配置相比-->
      <charts-legend :legend="legend" />
    </smart-collapse-item>
    <smart-collapse-item
      v-for="(item, index) in series"
      :key="index"
      :title="`绘图区(${item.name})`"
      icon="fa fa-paint-brush"
      @contextmenu.prevent.stop="onRightClickSeries"
    >
      <series
        :series="item"
        :y-axis="yAxis"
        @switch-charts="
          ({ chartsType, series }) => {
            handleSwitchChartsType(chartsType, series, index);
          }
        "
      />
    </smart-collapse-item>
    <!--        <smart-collapse-item title="响应式配置" icon="fa fa-tablet">

        </smart-collapse-item>-->
    <slot></slot>
  </base-collapse-style-component>
</template>

<script>
import { defineComponent, defineAsyncComponent, computed } from 'vue';
// import chartsConfigMixins from '../../mixins/chartsConfigMixins';
// import componentsConfigMixins from '../../mixins/componentsConfigMixins';
import SmartCollapseItem from '@/components/smartCollapse/SmartCollapseItem.vue';
import BaseCollapseStyleComponent from './BaseCollapseStyleComponent.vue';
import { useReportingEditStore } from '@/stores/reporting-edit';
import componentsMap from '../components';

const { ChartsTitle, ChartsLegend, ChartsToolBox, ChartsToolTip, Series } = componentsMap;

export default defineComponent({
  name: 'BaseChartsStyleComponents',
  // mixins: [ componentsConfigMixins, chartsConfigMixins ],
  components: {
    // TextStyle: () => import('../components/textStyle/TextStyle'),
    SmartCollapseItem,
    ChartsTitle,
    ChartsToolBox,
    ChartsLegend,
    Series,
    ChartsToolTip,
    BaseCollapseStyleComponent,
  },
  setup(props) {
    const store = useReportingEditStore();
    const currConfigItem = computed(() => store.currConfigItem);

    const title = computed(() => currConfigItem.value.option.title);
    const toolbox = computed(() => currConfigItem.value.option.toolbox);
    const legend = computed(() => currConfigItem.value.option.legend);
    const series = computed(() => currConfigItem.value.option.series);
    const yAxis = computed(() => currConfigItem.value.option.yAxis);
    const tooltip = computed(() => currConfigItem.value.option.tooltip);

    function onRightClickSeries() {
      // 新增/删除
    }

    function handleSwitchChartsType(chartsType, series, index) {
      series[index] = series;
    }

    return {
      title,
      toolbox,
      legend,
      series,
      yAxis,
      tooltip,

      onRightClickSeries: console.log,
    };
  },
});
</script>

<style scoped></style>
