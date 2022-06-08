import simpleBarCharts from './simpleBarCharts'; // 简单柱形图
import multipleYAxisBarCharts from './multipleYAxisBarCharts'; // 多Y轴柱形图
// import multipleXAxisBarCharts from './multipleXAxisBarCharts'; // 多X轴柱形图
// import multipleAxisBarCharts from './multipleAxisBarCharts'; // 多轴柱形图
/**
 * 柱状图
 */
export default {
  title: '柱形图',
  components: [
    simpleBarCharts,
    multipleYAxisBarCharts,
    // multipleXAxisBarCharts,
  ],
  // multipleAxisBarCharts
};
