import simpleScatter from './simpleScatterCharts';
import basicScatter from './basicScatterCharts';
import ChartScatter from '@/assets/chart-icon/chart-scatter.svg';

/**
 * 散点图
 */
export default {
  title: '散点图',
  icon: ChartScatter,
  components: [simpleScatter, basicScatter],
};
