/**
 * 柱形图
 */
// 简单柱形图
// import DataSimpleBarCharts from './bar/simpleBarCharts/DataSimpleBarCharts';
import StyleSimpleBarCharts from './bar/simpleBarCharts/StyleSimpleBarCharts.vue';
// 多Y轴柱形图
// import DataMultipleYAxisBarCharts from './bar/multipleYAxisBarCharts/DataMultipleYAxisBarCharts';
// import StyleMultipleYAxisBarCharts from './bar/multipleYAxisBarCharts/StyleMultipleYAxisBarCharts';

// // 多X轴柱形图
// import StyleMultipleXAxisBarCharts from './bar/multipleXAxisBarCharts/StyleMultipleXAxisBarCharts';
// import DataMultipleXAxisBarCharts from './bar/multipleXAxisBarCharts/DataMultipleXAxisBarCharts';

// // 多轴柱形图
// import StyleMultipleAxisBarCharts from './bar/multipleAxisBarCharts/StyleMultipleAxisBarCharts';
// import DataMultipleAxisBarCharts from './bar/multipleAxisBarCharts/DataMultipleAxisBarCharts';

// /**
//  * 饼状图
//  */
// // 简单饼图
import StyleSimplePieCharts from './pie/simplePieCharts/StyleSimplePieCharts.vue';
// import DataSimplePieCharts from './pie/simplePieCharts/DataSimplePieCharts';

// import StyleDoughnutPieCharts from './pie/doughnutPieCharts/StyleDoughnutPieCharts';
// import DataDoughnutPieCharts from './pie/doughnutPieCharts/DataDoughnutPieCharts';
// import StyleRosePieCharts from './pie/rosePieCharts/StyleRosePieCharts';
// import DataRosePieCharts from './pie/rosePieCharts/DataRosePieCharts';

// /**
//  * 折线图
//  */
// // 简单折线图
// import DataSimpleLineCharts from './line/simpleLineCharts/DataSimpleLineCharts';
import StyleSimpleLineCharts from './line/simpleLineCharts/StyleSimpleLineCharts.vue';

// /**
//  * 散点图
//  */
// // 简单散点图
// import DataSimpleScatterCharts from './scatter/simpleScatterCharts/DataSimpleScatterCharts';
import StyleSimpleScatterCharts from './scatter/simpleScatterCharts/StyleSimpleScatterCharts.vue';

// /**
//  * 地图
//  */
// // 中国地图
// import DataChinaMapCharts from './map/chinaMapCharts/DataChinaMapCharts';
// import StyleChinaMapCharts from './map/chinaMapCharts/StyleChinaMapCharts';

// // 中国省地图
// import StyleChinaProvinceMapCharts from './map/chinaProvinceMapCharts/StyleChinaProvinceMapCharts';
// import DataChinaProvinceMapCharts from './map/chinaProvinceMapCharts/DataChinaProvinceMapCharts';
// // 中国城市地图
// /* import StyleChinaCityMapCharts from './map/chinaCityMapCharts/StyleChinaCityMapCharts';
// import DataChinaCityMapCharts from './map/chinaCityMapCharts/DataChinaCityMapCharts';*/

// // 进度环
// import StyleProgressCircle from './progress/progressCircle/StyleProgressCircle';
// import DataProgressCircle from './progress/progressCircle/DataProgressCircle';
// // 进度条
// import StyleProgressBar from './progress/progressBar/StyleProgressBar';
// import DataProgressBar from './progress/progressBar/DataProgressBar';
// // 仪表盘
// import DataSimpleGaugeCharts from './gauge/simpleGaugeCharts/DataSimpleGaugeCharts';
// import StyleSimpleGaugeCharts from './gauge/simpleGaugeCharts/StyleSimpleGaugeCharts';
export default {
  install(Vue) {
    /**
		 * 简单柱形图
		 */
    // 简单柱形图
    // Vue.configComponent('data-simple-bar-charts', DataSimpleBarCharts);
    // Vue.configComponent('style-simple-bar-charts', StyleSimpleBarCharts);
    Vue.component('style-simple-bar-charts', StyleSimpleBarCharts);

    // 多Y轴柱形图
    // Vue.configComponent('data-multiple-yAxis-bar-charts', DataMultipleYAxisBarCharts);
    // Vue.configComponent('style-multiple-yAxis-bar-charts', StyleMultipleYAxisBarCharts);

    // // 多X轴柱形图
    // Vue.configComponent('style-multiple-xAxis-bar-charts', StyleMultipleXAxisBarCharts);
    // Vue.configComponent('data-multiple-xAxis-bar-charts', DataMultipleXAxisBarCharts);

    // // 多轴柱形图
    // Vue.configComponent('style-multiple-axis-bar-charts', StyleMultipleAxisBarCharts);
    // Vue.configComponent('data-multiple-axis-bar-charts', DataMultipleAxisBarCharts);

    // /**
		//  * 饼状图
		//  */
    // // 简单饼状图
    // Vue.configComponent('data-simple-pie-charts', DataSimplePieCharts);
    // Vue.configComponent('style-simple-pie-charts', StyleSimplePieCharts);
    Vue.component('style-simple-pie-charts', StyleSimplePieCharts);

    // Vue.configComponent('data-doughnut-pie-charts', DataDoughnutPieCharts);
    // Vue.configComponent('style-doughnut-pie-charts', StyleDoughnutPieCharts);

    // Vue.configComponent('data-rose-pie-charts', DataRosePieCharts);
    // Vue.configComponent('style-rose-pie-charts', StyleRosePieCharts);

    // /**
		//  * 折线图
		//  */
    // Vue.configComponent('data-simple-line-charts', DataSimpleLineCharts);
    // Vue.configComponent('style-simple-line-charts', StyleSimpleLineCharts);
    Vue.component('style-simple-line-charts', StyleSimpleLineCharts);

    // /**
		//  * 散点图
		//  */
    // Vue.configComponent('data-simple-scatter-charts', DataSimpleScatterCharts);
    // Vue.configComponent('style-simple-scatter-charts', StyleSimpleScatterCharts);
    Vue.component('style-simple-scatter-charts', StyleSimpleScatterCharts);

    // /**
		//  * 地图
		//  */

    // // 中国地图
    // Vue.configComponent('data-china-map-charts', DataChinaMapCharts);
    // Vue.configComponent('style-china-map-charts', StyleChinaMapCharts);
    // // 城市地图
    // /*		Vue.configComponent('data-china-city-map-charts',DataChinaCityMapCharts);
		// Vue.configComponent('style-china-city-map-charts',StyleChinaCityMapCharts);*/
    // // 省地图
    // Vue.configComponent('data-china-province-map-charts', DataChinaProvinceMapCharts);
    // Vue.configComponent('style-china-province-map-charts', StyleChinaProvinceMapCharts);

    // // 进度环
    // Vue.configComponent('style-progress-circle', StyleProgressCircle);
    // Vue.configComponent('data-progress-circle', DataProgressCircle);
    // // 进度条
    // Vue.configComponent('style-progress-bar', StyleProgressBar);
    // Vue.configComponent('data-progress-bar', DataProgressBar);
    // // 仪表盘
    // Vue.configComponent('style-simple-gauge-charts', StyleSimpleGaugeCharts);
    // Vue.configComponent('data-simple-gauge-charts', DataSimpleGaugeCharts);
    Vue.component('style-simple-gauge-charts', StyleSimpleScatterCharts);

  }
};
