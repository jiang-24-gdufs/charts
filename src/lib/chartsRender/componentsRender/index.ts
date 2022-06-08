import type { App } from 'vue';
// import RenderSimpleBarCharts from './charts/bar/RenderSimpleBarCharts.vue';
import RenderSimpleBarCharts from './charts/bar/RenderSimpleBarCharts';

import RenderSimplePieCharts from './charts/pie/RenderSimplePieCharts';

import './charts/map/registerMap';
import RenderChinaMapCharts from './charts/map/RenderChinaMapCharts';
import RenderChinaProvinceMapCharts from './charts/map/RenderChinaProvinceMapCharts';
import RenderSimpleLineCharts from './charts/line/RenderSimpleLineCharts';

import RenderSimpleGaugeCharts from './charts/gauge/RenderSimpleGaugeCharts';
import RenderSimpleScatterCharts from './charts/scatter/RenderSimpleScatterCharts';

export default {
  install(app: App) {
    /**
     * 柱状图
     */
    // 简单柱状图
    app.component('RenderSimpleBarCharts', RenderSimpleBarCharts);
    /**
     * 饼状图
     */
    // 简单饼状图
    app.component('RenderSimplePieCharts', RenderSimplePieCharts);

    /**
     * 折线图
     */
    app.component('RenderSimpleLineCharts', RenderSimpleLineCharts);

    /**
     * 散点图
     */
    app.component('RenderSimpleScatterCharts', RenderSimpleScatterCharts);

    /**
     * 仪表盘
     * */
    app.component('RenderSimpleGaugeCharts', RenderSimpleGaugeCharts);
    /**
     * 地图
     *  */
    app.component('RenderChinaMapCharts', RenderChinaMapCharts);
    app.component('RenderChinaProvinceMapCharts', RenderChinaProvinceMapCharts);
  },
};
