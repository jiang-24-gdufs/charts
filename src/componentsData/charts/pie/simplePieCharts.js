import chartsCommonData from '../../commonData/chartsCommonData';
import { pie } from '@/assets/defaultData';
import dataSetSource from '../../commonData/commonBaseData/dataSetSource';
import chartsToolTip from '../../commonData/commonBaseData/chartsToolTip';
import pieSeries from '../../commonData/series/pieSeries';
import { deepCopy } from '@/utils';

export default {
  // image: require('../../../assets/data/simple-pie.svg'),
  data: {
    title: '简单饼图',
    renderComponent: 'render-simple-pie-charts', // 渲染组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-simple-pie-charts',
        icon: 'fa-sliders',
      },
      {
        name: '数据配置',
        component: 'data-simple-pie-charts',
        icon: 'fa-database',
      },
    ],
    option: {
      ...deepCopy(chartsCommonData),
      title: {
        ...deepCopy(chartsCommonData.title),
        ...deepCopy(pie.simplePie.title),
      },
      series: [deepCopy(pieSeries)],
      tooltip: {
        ...deepCopy(chartsToolTip),
        trigger: 'item',
      },
    },
    // 其他选项
    otherOption: {
      ...dataSetSource,
    },
  },
};
