<template>
  <base-collapse-style-component v-bind="$props">
    <smart-collapse-item title="全局样式配置" icon="fa fa-sliders">
      <text-style :text-style="textStyle" />
    </smart-collapse-item>
    <!--标题-->
    <smart-collapse-item>
      <div slot="title" style="display: flex; align-items: center; font-size: 13px">
        <i class="fa fa-header" style="width: 25px; text-align: center"></i>
        <span>标题</span>
        <span style="margin-left: 10px" @click.prevent.stop>
          <el-switch v-model="title.show" size="mini" />
        </span>
      </div>
      <!--图表标题配置项-->
      <charts-title :title="title" />
    </smart-collapse-item>
    <!--工具箱-->
    <smart-collapse-item>
      <div slot="title" style="display: flex; align-items: center; font-size: 13px">
        <i class="fa fa-gears" style="width: 25px; text-align: center"></i>
        <span>工具栏配置</span>
        <span style="margin-left: 10px" @click.prevent.stop>
          <el-switch v-model="toolbox.show" size="mini" />
        </span>
      </div>
      <!--图表工具箱配置项-->
      <charts-tool-box :toolbox="toolbox" />
    </smart-collapse-item>
    <!--提示框-->
    <smart-collapse-item>
      <div slot="title" style="display: flex; align-items: center; font-size: 13px">
        <i class="fa fa-window-maximize" style="width: 25px; text-align: center"></i>
        <span>提示框</span>
        <span style="margin-left: 10px" @click.prevent.stop>
          <el-switch v-model="tooltip.show" size="mini" />
        </span>
      </div>
      <!--提示框配置-->
      <charts-tool-tip :tool-tip="tooltip" />
    </smart-collapse-item>
    <!--图例配置-->
    <smart-collapse-item>
      <div slot="title" style="display: flex; align-items: center; font-size: 13px">
        <i class="fa fa-pie-chart" style="width: 25px; text-align: center"></i>
        <span>图例配置</span>
        <span style="margin-left: 10px" @click.prevent.stop>
          <el-switch v-model="legend.show" size="mini" />
        </span>
      </div>
      <!--图例配置相比-->
      <charts-legend :legend="legend" />
    </smart-collapse-item>
    <smart-collapse-item
      v-for="(item, index) in series"
      :key="index"
      :title="`绘图区(${item.name})`"
      icon="fa fa-paint-brush"
    >
      <series
        :series="item"
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
import chartsConfigMixins from '../../mixins/chartsConfigMixins';
import componentsConfigMixins from '../../mixins/componentsConfigMixins';
import SmartCollapseItem from '../../components/smartCollapse/SmartCollapseItem';
import BaseCollapseStyleComponent from './BaseCollapseStyleComponent';

export default {
  name: 'BaseChartsStyleComponents',
  components: {
    TextStyle: () => import('../components/textStyle/TextStyle'),
    SmartCollapseItem,
    ChartsTitle: () => import('../components/chartsTitle/ChartsTitle'),
    ChartsToolBox: () => import('../components/chartsToolBox/ChartsToolBox'),
    ChartsLegend: () => import('../components/chartsLegend/ChartsLegend'),
    Series: () => import('../components/series/Series'),
    ChartsToolTip: () => import('../components/chartsToolTip/ChartsToolTip'),
    BaseCollapseStyleComponent,
  },
  mixins: [componentsConfigMixins, chartsConfigMixins],
  methods: {
    /**
     * 切换图表类型
     * @param chartsType
     * @param series
     * @param index
     */
    handleSwitchChartsType(chartsType, series, index) {
      this.$set(this.series, index, series);
    },
  },
};
</script>

<style scoped></style>
