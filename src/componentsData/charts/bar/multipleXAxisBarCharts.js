import chartsCommonData from '../../commonData/chartsCommonData';
import { bar } from '@/assets/defaultData';
import dataSetSource from '../../commonData/commonBaseData/dataSetSource';
import barSeries from '../../commonData/series/barSeries';
import barXAxis from '../../commonData/xAxis/barXAxis';
import barYAxis from '../../commonData/yAxis/barYAxis';
import { deepCopy } from '@/utils';
/**
 * 多X轴柱形图
 */
export default {
  // image: require('../../../assets/data/multiple-xAxis-charts.png'),
  data: {
    title: '多X轴柱形图',
    renderComponent: 'render-multiple-xAxis-bar-charts', // 渲染组件
    // 配置组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-multiple-xAxis-bar-charts',
        icon: 'fa-sliders',
      },
      {
        name: '数据配置',
        component: 'data-multiple-xAxis-bar-charts',
        icon: 'fa-database',
      },
    ],
    option: {
      ...deepCopy(chartsCommonData), // 图表公共数据
      title: {
        ...deepCopy(chartsCommonData.title), // 公共title数据
        ...deepCopy(bar.multipleXAxisBar.title), // 外部默认配置
      },
      grid: { top: '20%', left: '3%', right: '4%', bottom: '3%', containLabel: true },
      // X轴配置
      xAxis: [
        {
          ...deepCopy(barXAxis),
          data: deepCopy(bar.multipleXAxisBar.xAxis),
        },
        {
          ...deepCopy(barXAxis),
          data: deepCopy(bar.multipleXAxisBar.xAxis),
          position: 'top',
        },
      ],
      // Y轴配置
      yAxis: [deepCopy(barYAxis)],
      // 系列配置
      series: [
        {
          ...deepCopy(barSeries),
          data: deepCopy(bar.multipleXAxisBar.series),
        },
      ],
    },
    // 其他选项
    otherOption: {
      ...dataSetSource,
    },
  },
};
