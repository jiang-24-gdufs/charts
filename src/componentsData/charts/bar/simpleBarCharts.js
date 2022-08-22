import chartsCommonData from '../../commonData/chartsCommonData';
import { bar } from '@/assets/defaultData';
import dataSetSource from '../../commonData/commonBaseData/dataSetSource';
import barSeries from '../../commonData/series/barSeries';
import barXAxis from '../../commonData/xAxis/barXAxis';
import barYAxis from '../../commonData/yAxis/barYAxis';
import { deepCopy } from '@/utils';

export default {
  // image: require('../../../assets/data/simple-bar.svg'),
  data: {
    title: '简单的柱形图',
    renderComponent: 'render-simple-bar-charts', // 渲染组件
    // 配置组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-simple-bar-charts',
        icon: 'fa-sliders',
      },
      {
        name: '数据配置',
        component: 'data-simple-bar-charts',
        icon: 'fa-database',
      },
    ],
    option: {
      ...deepCopy(chartsCommonData), // 图表公共数据
      title: {
        ...deepCopy(chartsCommonData.title), // 公共title数据
        ...deepCopy(bar.simpleBar.title), // 外部默认配置
      },
      grid: { top: '20%', left: '3%', right: '4%', bottom: '3%', containLabel: true },
      // X轴配置
      xAxis: [
        {
          ...deepCopy(barXAxis),
          data: deepCopy(bar.simpleBar.xAxis),
        },
      ],
      // Y轴配置
      yAxis: [deepCopy(barYAxis)],
      // 系列配置
      series: [
        {
          ...deepCopy(barSeries),
          data: deepCopy(bar.simpleBar.series),
        },
      ],
    },
    /* option: {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    }, */
    // 其他选项
    otherOption: {
      ...dataSetSource,
    },
  },
};
