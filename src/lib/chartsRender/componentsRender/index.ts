import type { App } from 'vue';
// import RenderSimpleBarCharts from './charts/bar/RenderSimpleBarCharts.vue';
import RenderSimpleBarCharts from './charts/bar/RenderSimpleBarCharts';
import RenderMultipleYAxisBarCharts from './charts/bar/RenderMultipleYAxisBarCharts';
import RenderMultipleXAxisBarCharts from './charts/bar/RenderMultipleXAxisBarCharts';

import RenderSimplePieCharts from './charts/pie/RenderSimplePieCharts';
import RenderRoseTypePieCharts from './charts/pie/RenderRoseTypePieCharts';

import './charts/map/registerMap';
import RenderChinaMapCharts from './charts/map/RenderChinaMapCharts';
import RenderChinaProvinceMapCharts from './charts/map/RenderChinaProvinceMapCharts';
import RenderSimpleLineCharts from './charts/line/RenderSimpleLineCharts';

import RenderSimpleGaugeCharts from './charts/gauge/RenderSimpleGaugeCharts';
import RenderSimpleScatterCharts from './charts/scatter/RenderSimpleScatterCharts';

/* ---- 文本编辑 ---- */
import { RenderNormalText, RenderRichText } from './textEdit';

export default {
  install(app: App) {
    /**
     * 柱状图
     */
    // 简单柱状图
    app.component('RenderSimpleBarCharts', RenderSimpleBarCharts);
    app.component('RenderMultipleYAxisBarCharts', RenderMultipleYAxisBarCharts);
    app.component('RenderMultipleXAxisBarCharts', RenderMultipleXAxisBarCharts);
    /**
     * 饼状图
     */
    // 简单饼状图
    app.component('RenderSimplePieCharts', RenderSimplePieCharts);
    app.component('RenderRoseTypePieCharts', RenderRoseTypePieCharts);

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

    /* 文本编辑 */
    app.component('render-normal-text', RenderNormalText);
    app.component('render-rich-text', RenderRichText);
  },
};
