import chartsSeriesLabel from '../commonBaseData/chartsSeriesLabel';
import chartsSeriesItemStyle from '../commonBaseData/chartsSeriesItemStyle';
/**
 * 柱形图系列
 */
export default {
  id: null,
  name: '系列名称', // 系列名称
  legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
  xAxisIndex: 0,
  yAxisIndex: 0,
  label: chartsSeriesLabel,
  itemStyle: chartsSeriesItemStyle,
  type: 'bar',
  barWidth: null,
  barGap: '30%',
  data: [],
};
