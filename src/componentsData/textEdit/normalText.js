import {textEdit} from '@/assets/defaultData';
import gridCommonData from '../commonData/gridCommonData';
import Text from '@/assets/text-icon/text.svg';

/**
 * 富文本编辑
 */
export default {
  // image: require('../../assets/data/rich-text.svg'),
  data: {
    title: '文本',
    renderComponent: 'render-normal-text', // 渲染组件
    // 配置组件
    configComponent: [{
      name: '样式配置',
      component: 'data-normal-text',
      icon: 'fa-sliders',
    }],
    // configComponent: 'data-rich-text',
    option: {
      ...gridCommonData,
      content: textEdit.richText.content
    }
  }
};
