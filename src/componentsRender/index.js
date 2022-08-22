/**
 * 图表
 */
import charts from './charts';
/**
 * 其他组件
 */
// import other from './other';
/**
 * 表格
 */
// import table from './table';
/**
 * 表单组件
 */
// import form from './form';
/**
 * 文本编辑组件
 */
// import textEdit from './textEdit';
// 引入富文本样式文件
// import 'quill/dist/quill.core.css';
// import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';
// 注册地图服务
// import './registerMap';
// 引入echarts
// import 'echarts';
// 引入axios
// import axios from 'axios';

export default {
  install(Vue) {
    Vue.use(charts);
    // Vue.use(other);
    // Vue.use(table);
    // Vue.use(form);
    // Vue.use(textEdit);

    // 解决打包umd时加载后Vue.$http为undefined的问题
    // Vue.prototype.$http = axios;
  },
};
