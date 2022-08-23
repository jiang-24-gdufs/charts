/**
 * 柱形图
 */
// 简单柱形图
import DataSimpleBarCharts from './bar/simpleBarCharts/DataSimpleBarCharts.vue';
import StyleSimpleBarCharts from './bar/simpleBarCharts/StyleSimpleBarCharts.vue';
// 多Y轴柱形图
import DataMultipleYAxisBarCharts from './bar/multipleYAxisBarCharts/DataMultipleYAxisBarCharts.vue';
import StyleMultipleYAxisBarCharts from './bar/multipleYAxisBarCharts/StyleMultipleYAxisBarCharts.vue';

// 多X轴柱形图
import StyleMultipleXAxisBarCharts from './bar/multipleXAxisBarCharts/StyleMultipleXAxisBarCharts.vue';
import DataMultipleXAxisBarCharts from './bar/multipleXAxisBarCharts/DataMultipleXAxisBarCharts.vue';

// // 多轴柱形图
// import StyleMultipleAxisBarCharts from './bar/multipleAxisBarCharts/StyleMultipleAxisBarCharts';
// import DataMultipleAxisBarCharts from './bar/multipleAxisBarCharts/DataMultipleAxisBarCharts';

// /**
//  * 饼状图
//  */
// // 简单饼图
import StyleSimplePieCharts from './pie/simplePieCharts/StyleSimplePieCharts.vue';
import DataSimplePieCharts from './pie/simplePieCharts/DataSimplePieCharts.vue';

// import StyleDoughnutPieCharts from './pie/doughnutPieCharts/StyleDoughnutPieCharts';
// import DataDoughnutPieCharts from './pie/doughnutPieCharts/DataDoughnutPieCharts';
// import StyleRosePieCharts from './pie/rosePieCharts/StyleRosePieCharts';
// import DataRosePieCharts from './pie/rosePieCharts/DataRosePieCharts';

// /**
//  * 折线图
//  */
// 简单折线图
import DataSimpleLineCharts from './line/simpleLineCharts/DataSimpleLineCharts.vue';
import StyleSimpleLineCharts from './line/simpleLineCharts/StyleSimpleLineCharts.vue';

// /**
//  * 散点图
//  */
// 简单散点图
import DataSimpleScatterCharts from './scatter/simpleScatterCharts/DataSimpleScatterCharts.vue';
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
  install(app) {
    /**
     * 简单柱形图
     */
    // 简单柱形图
    app.component('DataSimpleBarCharts', DataSimpleBarCharts);
    app.component('StyleSimpleBarCharts', StyleSimpleBarCharts);

    // 多Y轴柱形图
    app.component('DataMultipleYAxisBarCharts', DataMultipleYAxisBarCharts);
    app.component('StyleMultipleYAxisBarCharts', StyleMultipleYAxisBarCharts);

    // 多X轴柱形图
    app.component('StyleMultipleXAxisBarCharts', StyleMultipleXAxisBarCharts);
    app.component('DataMultipleXAxisBarCharts', DataMultipleXAxisBarCharts);

    // // 多轴柱形图
    // app.configComponent('style-multiple-axis-bar-charts', StyleMultipleAxisBarCharts);
    // app.configComponent('data-multiple-axis-bar-charts', DataMultipleAxisBarCharts);

    // /**
    //  * 饼状图
    //  */
    // 简单饼状图
    app.component('DataSimplePieCharts', DataSimplePieCharts);
    app.component('StyleSimplePieCharts', StyleSimplePieCharts);

    // app.configComponent('data-doughnut-pie-charts', DataDoughnutPieCharts);
    // app.configComponent('style-doughnut-pie-charts', StyleDoughnutPieCharts);

    // app.configComponent('data-rose-pie-charts', DataRosePieCharts);
    // app.configComponent('style-rose-pie-charts', StyleRosePieCharts);

    // /**
    //  * 折线图
    //  */
    app.component('DataSimpleLineCharts', DataSimpleLineCharts);
    app.component('StyleSimpleLineCharts', StyleSimpleLineCharts);

    // /**
    //  * 散点图
    //  */
    app.component('DataSimpleScatterCharts', DataSimpleScatterCharts);
    app.component('StyleSimpleScatterCharts', StyleSimpleScatterCharts);

    // /**
    //  * 地图
    //  */

    // // 中国地图
    // app.configComponent('data-china-map-charts', DataChinaMapCharts);
    // app.configComponent('style-china-map-charts', StyleChinaMapCharts);
    // // 城市地图
    // /*		app.configComponent('data-china-city-map-charts',DataChinaCityMapCharts);
    // app.configComponent('style-china-city-map-charts',StyleChinaCityMapCharts);*/
    // // 省地图
    // app.configComponent('data-china-province-map-charts', DataChinaProvinceMapCharts);
    // app.configComponent('style-china-province-map-charts', StyleChinaProvinceMapCharts);

    // // 进度环
    // app.configComponent('style-progress-circle', StyleProgressCircle);
    // app.configComponent('data-progress-circle', DataProgressCircle);
    // // 进度条
    // app.configComponent('style-progress-bar', StyleProgressBar);
    // app.configComponent('data-progress-bar', DataProgressBar);
    // // 仪表盘
    // app.configComponent('style-simple-gauge-charts', StyleSimpleGaugeCharts);
    // app.configComponent('data-simple-gauge-charts', DataSimpleGaugeCharts);
    app.component('StyleSimpleGaugeCharts', StyleSimpleScatterCharts);
  },
};
