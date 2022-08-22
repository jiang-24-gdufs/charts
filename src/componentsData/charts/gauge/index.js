import simpleGaugeCharts from './simpleGaugeCharts';
import multipleTitleGaugeCharts from './multipleTitleGaugeCharts';
import ChartGauge from '@/assets/chart-icon/chart-gauge.svg';

/**
 * 仪表盘
 */
export default {
  title: '仪表盘',
  icon: ChartGauge,
  components: [simpleGaugeCharts, multipleTitleGaugeCharts],
};
