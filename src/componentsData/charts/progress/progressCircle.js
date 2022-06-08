
import {progress} from '@/assets/defaultData';
import dataSetSource from '../../commonData/commonBaseData/dataSetSource';
import gridCommonData from '../../commonData/gridCommonData';
/**
 * 进度环
 */
export default {
  // image: require('../../../assets/data/progress-circle.svg'),
  data: {
    title: '进度环',
    renderComponent: 'render-progress-circle',
    // 配置组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-progress-circle',
        icon: 'fa-sliders'
      },
      {
        name: '数据配置',
        component: 'data-progress-circle',
        icon: 'fa-database'
      }
    ],
    option: {
      ...gridCommonData,
      title: progress.progressCircle.title,
      strokeLinecap: 'round', // square  round
      strokeWidth: 6, // stroke-color
      strokeColor: '#2db7f5', // 进度环的颜色
      dashboard: false, // 是否显示为仪表盘
      trailWidth: 5, // 进度换背景线宽
      trailColor: '#eaeef2', // 进度环背景的颜色
      value: progress.progressCircle.value,
      target: progress.progressCircle.target
    },
    otherOption: {
      ...dataSetSource
    }
  }
};
