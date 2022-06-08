import chartsCommonData from '../../commonData/chartsCommonData';
import { deepCopy } from '@/utils';

/**
 * 中国省地图
 */
export default {
  // image: require('../../../assets/data/guangdong.svg'),
  data: {
    title: '中国省地图',
    renderComponent: 'render-china-province-map-charts',
    // 配置组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-china-province-map-charts',
        icon: 'fa-sliders'
      },
      {
        name: '数据配置',
        component: 'data-china-province-map-charts',
        icon: 'fa-database'
      }
    ],
    option: {
      ...deepCopy(chartsCommonData),
      series: [
        {
          name: 'USA PopEstimates',
          type: 'map',
          roam: true,
          map: 'guangdong',
          itemStyle: {
            emphasis: {label: {show: true}}
          },
          // 文本位置修正
          textFixed: {
            Alaska: [20, -20]
          },
          data: []
        }
      ]
    }
  }
};
