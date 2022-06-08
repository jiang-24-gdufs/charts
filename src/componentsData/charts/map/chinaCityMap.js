import chartsCommonData from '../../commonData/chartsCommonData';
import { deepCopy } from '@/utils';

/**
 * 中国地图
 */
export default {
  // image: require('../../../assets/data/simple-map.jpg'),
  data: {
    title: '中国城市地图',
    renderComponent: 'render-china-city-map-charts',
    // 配置组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-china-city-map-charts',
        icon: 'fa-sliders',
      },
      {
        name: '数据配置',
        component: 'data-china-city-map-charts',
        icon: 'fa-database',
      },
    ],
    option: {
      ...deepCopy(chartsCommonData),
      series: [
        {
          name: 'USA PopEstimates',
          type: 'map',
          roam: true,
          map: 'china-city',
          itemStyle: {
            emphasis: { label: { show: true } },
          },
          // 文本位置修正
          textFixed: {
            Alaska: [20, -20],
          },
          data: [],
        },
      ],
    },
  },
};
