import chartsSeriesLabel from '../commonBaseData/chartsSeriesLabel';
import chartsSeriesItemStyle from '../commonBaseData/chartsSeriesItemStyle';
/**
 * 散点图系列
 */
export default {
  id: null,
  type: 'scatter',
  name: '散点图',
  coordinateSystem: 'cartesian2d', // 'cartesian2d' 使用二维的直角坐标系 'polar' 使用极坐标系 'geo' 使用地理坐标系
  xAxisIndex: 0,
  yAxisIndex: 0,
  polarIndex: 0, // 使用的极坐标系的 index，在单个图表实例中存在多个极坐标系的时候有用。
  geoIndex: 0, // 使用的地理坐标系的 index，在单个图表实例中存在多个地理坐标系的时候有用。
  hoverAnimation: true, // 是否开启鼠标 hover 的提示动画效果。
  legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
  cursor: 'pointer',
  label: chartsSeriesLabel,
  itemStyle: chartsSeriesItemStyle,
  emphasis: {
    label: chartsSeriesLabel,
    itemStyle: chartsSeriesItemStyle
  }
};
