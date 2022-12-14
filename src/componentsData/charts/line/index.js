import simpleLine from './simpleLineCharts';
import areaLine from './areaLineCharts';
import lineBarMixCharts from './lineBarMixCharts';
import ChartLine from '@/assets/chart-icon/chart-line.svg';

/**
 * 折线图
 */
export default {
  title: '折线图',
  icon: ChartLine,
  components: [simpleLine, areaLine, lineBarMixCharts],
};
