/**
 * 柱形图的Y
 */
export default {
  id: null,
  show: true,
  position: 'left', // 'left' 'right'
  offset: 0, // Y 轴相对于默认位置的偏移，在相同的 position 上有多个 Y 轴的时候有用。
  type: 'value', //  'value' 数值轴，适用于连续数据。'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。'log' 对数轴。适用于对数数据。
  name: '',
  nameLocation: 'end',
  boundaryGap: true, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
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
    lineHeight: 56,
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
  nameGap: 15,
  axisLabel: {
    // 坐标轴刻度标签的相关设置。
    show: true,
    formatter: '{value} 单位',
    interval: 1, // 坐标轴刻度标签的显示间隔，在类目轴中有效,可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推。
    inside: false, // 刻度标签是否朝内，默认朝外。
    rotate: 0, //
    margin: 5, // 刻度标签与轴线之间的距离
    color: null,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    align: 'right',
    verticalAlign: 'middle',
    lineHeight: 56,
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
