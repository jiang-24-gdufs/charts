import chartsCommonData from '../../commonData/chartsCommonData';
import { bar } from '@/assets/defaultData';
import dataSetSource from '../../commonData/commonBaseData/dataSetSource';
import barSeries from '../../commonData/series/barSeries';
import barXAxis from '../../commonData/xAxis/barXAxis';
import barYAxis from '../../commonData/yAxis/barYAxis';
import { deepCopy } from '@/utils';

export default {
  // image: require('../../../assets/data/multiple-yAxis-bar-charts.png'),
  data: {
    title: '多Y轴柱形图',
    renderComponent: 'render-multiple-yAxis-bar-charts', // 渲染组件
    // 配置组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-multiple-yAxis-bar-charts',
        icon: 'fa-sliders',
      },
      {
        name: '数据配置',
        component: 'data-multiple-yAxis-bar-charts',
        icon: 'fa-database',
      },
    ],
    option: {
      ...deepCopy(chartsCommonData), // 图表公共数据
      title: {
        ...deepCopy(chartsCommonData.title), // 公共title数据
        ...deepCopy(bar.multipleYAxisBar.title), // 外部默认配置
      },
      grid: { top: '20%', left: '3%', right: '4%', bottom: '3%', containLabel: true },
      // X轴配置
      xAxis: [
        {
          ...deepCopy(barXAxis),
          data: deepCopy(bar.multipleYAxisBar.xAxis),
        },
      ],
      // Y轴配置
      yAxis: [
        deepCopy(barYAxis),
        {
          ...deepCopy(barYAxis),
          ...{
            position: 'right',
            name: 'y轴名称2',
          },
        },
      ],
      // 系列配置
      series: [
        {
          ...deepCopy(barSeries),
          data: deepCopy(bar.multipleYAxisBar.series),
        },
        {
          ...deepCopy(barSeries),
          data: deepCopy(bar.multipleYAxisBar.series),
          ...{
            name: '系列名称2',
            // yAxisIndex: 1,
          },
        },
        {
          ...deepCopy(barSeries),
          data: deepCopy(bar.multipleYAxisBar.series),
          ...{
            name: '系列名称3',
            // yAxisIndex: 2,
          },
        },
      ],
    },
    // 其他选项
    otherOption: {
      ...dataSetSource,
    },
  },
};
