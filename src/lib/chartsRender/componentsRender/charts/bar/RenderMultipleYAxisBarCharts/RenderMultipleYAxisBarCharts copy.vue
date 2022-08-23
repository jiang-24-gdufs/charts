<template>
    <base-grid-item v-bind="$props">
        <v-chart :options="option" :init-options="initOption" :other-option="otherOption"/>
    </base-grid-item>
</template>

<script>
import chartsDataSourceWatchMixin from '../../../mixins/chartsDataSourceWatchMixin';
import { bar, color } from '../@/assets/defaultData';
import BaseGridItem from '../../baseComponents/BaseGridItem';
import http from '../../http';
import series from '../../../componentsData/commonData/series';
import yAxis from '../../../componentsData/commonData/yAxis';
import { deepCopy } from '../../../utils';
import Echarts from '../../../components/echarts/Echarts';
import renderComponentMixin from '../../../mixins/renderComponentMixin';

const { multipleYAxisBar } = bar;

export default {
  name: 'RenderMultipleYAxisBarCharts',
  components: {
    BaseGridItem,
    VChart: Echarts
  },
  mixins: [ renderComponentMixin, chartsDataSourceWatchMixin ],
  methods: {
    /**
			 * 恢复默认数据
			 */
    handleReCoverDefaultData() {
      this.handleClearData();
      this.option.series[0].data = deepCopy(multipleYAxisBar.series);
      this.option.xAxis[0].data = deepCopy(multipleYAxisBar.xAxis);
    },
    /**
			 * 清空图表数据
			 */
    handleClearData() {
      // 清空x轴数据
      this.option.xAxis[0].data = [];
      // 清空系列数据
      this.option.series.forEach((item) => {
        item.data = [];
      });
      const seriesLen = this.option.series.length;
      // 删除系列配置项
      if (seriesLen > 1) {
        for (let index = 0; index < seriesLen - 1; ++index) {
          this.option.series.splice(1, 1);
        }
      }
      // 删除y轴配置项
      const yAxisLen = this.option.yAxis.length;
      if (yAxisLen > 1) {
        for (let yIndex = 0; yIndex < yAxisLen - 1; ++yIndex) {
          this.option.series.splice(1, 1);
        }
      }
    },
    /**
			 * 访问数据源
			 */
    handleAccessDataSource() {
      const { dataSetId, dimensionList, measureList, whereList, conditionSql } = this.otherOption;
      if (dataSetId && dimensionList.length && measureList.length) {
        http.post(`${ this.baseUrl }/chartsData/getSingleDimensionAxisView`, {
          dataSetId,
          whereList: whereList.concat(this.globalConditionQuery),
          dimensionList,
          measureList,
          conditionSql
        }).then((response) => {
          const { status, data } = response;
          if (status === 0) {
            const { xList, yList } = data;
            xList.forEach((item, index) => {
              this.option.xAxis[index].data = item.data;
              this.option.xAxis[index].name = item.name;
            });
            const oldSeries = this.option.series;
            const oldYAxis = this.option.yAxis;
            this.option.series = [];
            this.option.yAxis = [];
            yList.forEach((item, index) => {

              const id = `${ item.tableName }_-${ item.column }`;
              // 查找旧配置
              const oldSeriesItem = oldSeries.find((seriesItem) => seriesItem.id === id);
              // 如果存在旧配置
              if (oldSeriesItem) {
                this.$set(this.option.series, index, oldSeriesItem);
              } else {
                this.$set(this.option.series, index, deepCopy(series.bar));
                this.option.series[index].id = `${ item.tableName }_-${ item.column }`;
                this.option.series[index].name = item.name;
              }
              this.option.series[index].data = item.data;
              this.option.series[index].yAxisIndex = index;

              // 查找是否有y轴的配置
              const oldYAxisItem = oldYAxis.find((yAxisItem) => yAxisItem.id === id);
              if (oldYAxisItem) {
                this.$set(this.option.yAxis, index, oldYAxisItem);
              } else {
                const { offset, position } = this.handleGetPositionAndOffset();
                this.$set(this.option.yAxis, index, deepCopy({
                  ...yAxis.bar,
                  offset,
                  position
                }));
                this.option.yAxis[index].name = item.name;
                this.option.yAxis[index].id = id;
              }
              this.handleSetYAxisColor(index);
            });
          }
        });
      }
    },
    /**
			 * 访问API
			 */
    handleAssessApi() {

    },
    handleGetPositionAndOffset() {
      const leftResult = this.option.yAxis.some((item) => item.id !== null && item.position === 'left');
      // 判断坐标的左边是否存在Y坐标
      if (!leftResult) {
        return {
          position: 'left',
          offset: 0
        };
      }

      const rightResult = this.option.yAxis.some((item) => item.id !== null && item.position === 'right');
      // 判断坐标的左边是否存在Y坐标
      if (rightResult) {
        const offsetList = this.option.yAxis.filter((yAxisItem) => yAxisItem.id !== null && yAxisItem.position === 'right').map((yAxis) => yAxis.offset).sort();
        return {
          position: 'right',
          offset: offsetList.pop() + 80
        };
      }
      return {
        position: 'right',
        offset: 0
      };
    },
    /**
     * 设置Y轴颜色
     * @param index
     */
    handleSetYAxisColor(index) {
      const yAxisItem = this.option.yAxis[index];
      yAxisItem.axisLine.lineStyle.color = color[index];
      yAxisItem.axisLabel.color = color[index];
      yAxisItem.axisTick.lineStyle.color = color[index];
      yAxisItem.nameTextStyle.color = color[index];
    }
  }
};
</script>

<style scoped>
</style>

