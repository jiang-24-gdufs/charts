import chartsCommonData from '../../commonData/chartsCommonData';
import { deepCopy } from '@/utils';
import dataSetSource from '../../commonData/commonBaseData/dataSetSource';
import { map } from '@/assets/defaultData';
/**
 * 中国地图
 */
export default {
  // image: require('../../../assets/data/china.svg'),
  data: {
    title: '中国地图',
    renderComponent: 'render-china-map-charts',
    // 配置组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-china-map-charts',
        icon: 'fa-sliders',
      },
      {
        name: '数据配置',
        component: 'data-china-map-charts',
        icon: 'fa-database',
      },
    ],
    option: {
      ...deepCopy(chartsCommonData),
      visualMap: {
        show: true,
        x: 'left',
        y: 'center',
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026',
          ],
        },
        color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea'],
      },
      series: [
        {
          name: '中国地图',
          type: 'map',
          roam: true,
          map: 'china',
          itemStyle: {
            emphasis: {
              label: {
                show: true,
              },
              normal: {
                show: true, // 省份名称
              },
            },
          },
          // 文本位置修正
          /*	textFixed: {
						Alaska: [ 20, -20 ]
					},*/
          data: deepCopy(map.chinaMap.data),
        },
      ],
    },
    // 其他选项
    otherOption: {
      ...dataSetSource,
    },
  },
};
