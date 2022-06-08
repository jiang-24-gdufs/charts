import chartsSeriesItemStyle from '../commonBaseData/chartsSeriesItemStyle';
import chartsSeriesLabel from '../commonBaseData/chartsSeriesLabel';
import chartsSeriesLineStyle from '../commonBaseData/chartsSeriesLineStyle';
import chartsSeriesAreaStyle from '../commonBaseData/chartsSeriesAreaStyle';
/**
 * 折线图系列
 */
export default {
  type: 'line',
  id: null,
  name: '折线图系列',
  coordinateSystem: 'cartesian2d', // 'cartesian2d'使用二维的直角坐标系  'polar' 使用极坐标系
  xAxisIndex: 0, // 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
  yAxisIndex: 0, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
  polarIndex: 0, // 使用的极坐标系的 index，在单个图表实例中存在多个极坐标系的时候有用。
  hoverAnimation: true, // 是否开启 hover 在拐点标志上的提示动画效果。
  legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
  cursor: 'pointer', // 鼠标悬浮时在图形元素上时鼠标的样式是什么
  connectNulls: false, // 是否连接空数据。
  clipOverflow: true, // 是否对超出部分裁剪，默认裁剪。
  step: false, // 是否是阶梯线图
  label: chartsSeriesLabel,
  itemStyle: chartsSeriesItemStyle,
  lineStyle: chartsSeriesLineStyle,
  areaStyle: chartsSeriesAreaStyle,
  emphasis: {
    label: chartsSeriesLabel,
    itemStyle: chartsSeriesItemStyle,
  },
  smooth: false, // 是否平滑曲线显示
};
