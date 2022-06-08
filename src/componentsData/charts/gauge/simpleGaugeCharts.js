import dataSetSource from '../../commonData/commonBaseData/dataSetSource';
import { deepCopy } from '@/utils';
import chartsCommonData from '../../commonData/chartsCommonData';
import { gauge } from '@/assets/defaultData';
import gaugeSeries from '../../commonData/series/gaugeSeries';

/**
 * 简单仪表盘
 */
export default {
  // image: require('../../../assets/data/simple-gauge.svg'),
  data: {
    title: '简单仪表盘', // 显示在报告标记的页头
    renderComponent: 'render-simple-gauge-charts', // 渲染组件
    // 配置组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-simple-gauge-charts',
        icon: 'fa-sliders',
      },
      {
        name: '数据配置',
        component: 'data-simple-gauge-charts',
        icon: 'fa-database',
      },
    ],
    option: {
      ...deepCopy(chartsCommonData), // 图表公共数据
      title: {
        ...deepCopy(chartsCommonData.title), // 公共title数据
        ...deepCopy(gauge.simpleGauge.title), // 外部默认配置
      },
      series: [deepCopy(gaugeSeries)],
    },
    // 其他选项
    otherOption: {
      ...dataSetSource,
    },
  },
};
