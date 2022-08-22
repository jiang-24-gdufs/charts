import { scatter } from '@/assets/defaultData';
import chartsCommonData from '../../commonData/chartsCommonData';
import dataSetSource from '../../commonData/commonBaseData/dataSetSource';
import scatterSeries from '../../commonData/series/scatterSeries';
import barXAxis from '../../commonData/xAxis/barXAxis';
import barYAxis from '../../commonData/yAxis/barYAxis';
import { deepCopy } from '@/utils';

export default {
  // image: require('../../../assets/data/simple-scatter.svg'),
  data: {
    title: '基础散点图',
    renderComponent: 'render-simple-scatter-charts', // 渲染组件
    // 配置组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-simple-scatter-charts',
        icon: 'fa-sliders',
      },
      {
        name: '数据配置',
        component: 'data-simple-scatter-charts',
        icon: 'fa-database',
      },
    ],
    option: {
      ...deepCopy(chartsCommonData), // 图表公共数据
      title: {
        ...deepCopy(chartsCommonData.title), // 公共title数据
        ...deepCopy(scatter.basicScatter.title), // 外部默认配置
      },
      grid: { top: '20%', left: '3%', right: '4%', bottom: '3%', containLabel: true },
      // X轴配置
      // xAxis: [
      //   {
      //     ...deepCopy(barXAxis),
      //     data: deepCopy(scatter.simpleScatter.xAxis),
      //   },
      // ],
      // Y轴配置
      // yAxis: [deepCopy(barYAxis)],
      xAxis: {},
      yAxis: {},
      // 系列配置
      series: [
        {
          ...deepCopy(scatterSeries),
          ...deepCopy(scatter.basicScatter.series),
        },
      ],
    },
    // 其他选项
    otherOption: {
      ...dataSetSource,
    },
  },
};
