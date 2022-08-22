import { bar } from '@/assets/defaultData';
/**
 * 饼状图的X轴
 */
export default {
  show: true,
  id: null,
  position: 'bottom', // x轴位置 'top' 'bottom'
  offset: 0, // X 轴相对于默认位置的偏移，在相同的 position 上有多个 X 轴的时候有用
  type: 'category', // 坐标轴类型。 'value'数值, 'category' 类目轴,'time' 时间轴 'log'对数轴
  name: 'x轴名称', // 坐标轴名称
  nameLocation: 'end', // 'start','center','end'
  nameTextStyle: {
    /**
     * 文字
     */
    color: null,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    align: 'auto',
    verticalAlign: 'auto',
    // lineHeight: 56,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
    /**
     * 边框
     */
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    shadowColor: 'transparent',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
  },
  boundaryGap: true, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
  nameGap: 0, // 坐标轴名称与轴线之间的距离。
  data: bar.simpleBar.xAxis,
  nameRotate: 0, // 坐标轴名字旋转，角度值。
  inverse: false, // 是否是反向坐标轴
  /* 刻度标签 */
  axisLabel: {
    show: true,
    inside: false,
    rotate: 0,
    margin: 8,
    /**
     * 文字
     */
    color: null,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    align: 'auto',
    verticalAlign: 'auto',
    lineHeight: 16,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
    /**
     * 边框
     */
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    shadowColor: 'transparent',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
  },
  axisLine: {
    // 刻度线
    show: true,
    onZero: true, // X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效。
    symbol: ['none', 'none'],
    symbolSize: [10, 15],
    symbolOffset: [0, 0],
    lineStyle: {
      // color: '#333',
      width: 1, // 坐标轴线线宽。
      type: 'solid', // 坐标轴线线的类型。'solid','dashed','dotted' //癫痫
      shadowBlur: 0,
      shadowColor: '#ccc',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
  },
  /* 刻度 */
  axisTick: {
    show: false,
    inside: false,
    length: 5,
    lineStyle: {
      // color: '#333',
      width: 1, // 坐标轴线线宽。
      type: 'solid', // 坐标轴线线的类型。'solid','dashed','dotted'
      shadowBlur: 0,
      shadowColor: '#ccc',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
  },
};
