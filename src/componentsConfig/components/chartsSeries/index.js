import componentsMap from '../index'
const {BarSeries,
  LineSeries,
  PieSeries,
  ScatterSeries,
  MapSeries,
  GaugeSeries} = componentsMap

/**
 * 系列的key按照echarts的series命名；
 */
export default {
  bar: BarSeries,
  line: LineSeries,
  pie: PieSeries,
  scatter: ScatterSeries,
  map: MapSeries,
  gauge: GaugeSeries
};
