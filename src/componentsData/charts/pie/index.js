// import doughnutPieCharts from './doughnutPieCharts';
// import rosePieCharts from './rosePieCharts';
import roseTypePieCharts from './roseTypePieCharts';
import simplePieCharts from './simplePieCharts';
import ChartPie from '@/assets/chart-icon/chart-pie.svg';

/**
 * 饼图
 */
export default {
  title: '饼状图',
  icon: ChartPie,
  components: [simplePieCharts, roseTypePieCharts],
  // doughnutPieCharts,
  // rosePieCharts,
};
