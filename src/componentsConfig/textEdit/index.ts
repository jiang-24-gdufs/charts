
/**
 * 文本编辑
 */
import DataNormalText from './normalText/DataNormalText.vue';
import DataRichText from './richText/DataRichText.vue';

export default {
  install(app) {
    app.component('data-normal-text', DataNormalText);
    app.component('data-rich-text', DataRichText);
  }
};
