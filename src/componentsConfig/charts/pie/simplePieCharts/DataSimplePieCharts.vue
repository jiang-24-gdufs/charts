<template>
  <base-charts-data-component v-bind="$props">
    <template #data-source>
      <!--条件查询-->
      <!-- <data-source-entry :coords-type="$options.coordsTypeEnum.CONDITION.status"
                               :limit="100"
                               :fields="otherOption.whereList"
                               v-model="otherOption.dataSetId"
                               title="查询条件">
            </data-source-entry> -->
      <!--接收数据源X轴-->
      <!-- <data-source-entry :coords-type="$options.coordsTypeEnum.X.status"
                               :limit="1"
                               :fields="otherOption.dimensionList"
                               v-model="otherOption.dataSetId"
                               title="维度">
            </data-source-entry> -->
      <!--接收数据源Y轴-->
      <!-- <data-source-entry v-model="otherOption.dataSetId"
                               :fields="otherOption.measureList"
                               :coords-type="$options.coordsTypeEnum.Y.status"
                               :limit="1" title="度量">
            </data-source-entry> -->
    </template>
  </base-charts-data-component>
</template>

<script>
// import DataSourceEntry from '../../../../components/dataSourceEntry/DataSourceEntry';
// import coordsTypeEnum from '../../../../enum/coordsTypeEnum';
import BaseChartsDataComponent from '../../../baseComponents/BaseChartsDataComponent.vue';

export default {
  name: 'DataSimplePieCharts',
  // coordsTypeEnum,
  components: {
    BaseChartsDataComponent,
    // DataSourceEntry
  },
};
</script>

<style scoped></style>
