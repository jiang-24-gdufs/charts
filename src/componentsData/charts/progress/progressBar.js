import gridCommonData from '../../commonData/gridCommonData';
import { progress } from '@/assets/defaultData';
import dataSetSource from '../../commonData/commonBaseData/dataSetSource';

// 进度条
export default {
  // image: require('../../../assets/data/progress-bar.svg'),
  data: {
    title: '进度条',
    renderComponent: 'render-progress-bar',
    // 配置组件
    configComponent: [
      {
        name: '样式配置',
        component: 'style-progress-bar',
        icon: 'fa-sliders',
      },
      {
        name: '数据配置',
        component: 'data-progress-bar',
        icon: 'fa-database',
      },
    ],
    option: {
      ...gridCommonData,
      title: progress.progressBar.title,
      value: progress.progressBar.value,
      target: progress.progressBar.target,
      status: 'normal', // normal  active  wrong  success
      strokeWidth: 10, // 进度条的线宽，单位 px
      strokeColor: [], // 进度条的颜色
      hideInfo: false, // 隐藏数值或状态图标
      vertical: false, // 是否在垂直方向显示
      successPercent: 0, // 已完成的分段百分比
    },
    otherOption: {
      ...dataSetSource,
    },
  },
};
