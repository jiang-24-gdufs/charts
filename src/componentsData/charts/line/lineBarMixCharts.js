import chartsCommonData from '../../commonData/chartsCommonData';
import { line, bar } from '@/assets/defaultData';
import dataSetSource from '../../commonData/commonBaseData/dataSetSource';
import barXAxis from '../../commonData/xAxis/barXAxis';
import barYAxis from '../../commonData/yAxis/barYAxis';
import lineSeries from '../../commonData/series/lineSeries';
import barSeries from '../../commonData/series/barSeries';
import { deepCopy } from '@/utils';

export default {
  // image: require('../../../assets/data/simple-line.svg'),
  data: {
    title: '折柱混合图',
    renderComponent: 'render-simple-line-charts', // 渲染组件
    // 配置组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-simple-line-charts',
        icon: 'fa-sliders',
      },
      {
        name: '数据配置',
        component: 'data-simple-line-charts',
        icon: 'fa-database',
      },
    ],
    option: {
      ...deepCopy(chartsCommonData), // 图表公共数据
      title: {
        ...deepCopy(chartsCommonData.title), // 公共title数据
        ...deepCopy(line.simpleLine.title), // 外部默认配置
      },
      grid: { top: '20%', left: '3%', right: '4%', bottom: '3%', containLabel: true },
      // X轴配置
      xAxis: [
        {
          ...deepCopy(barXAxis),
          data: deepCopy(line.simpleLine.xAxis),
        },
      ],
      // Y轴配置
      yAxis: [deepCopy(barYAxis)],
      // 系列配置
      series: [
        {
          ...deepCopy(lineSeries),
          data: deepCopy(line.simpleLine.series),
        },
        {
          ...deepCopy(barSeries),
          data: deepCopy(bar.simpleBar.series),
          type: 'bar',
        },
      ],
    },
    // 其他选项
    otherOption: {
      ...dataSetSource,
    },
  },
};
