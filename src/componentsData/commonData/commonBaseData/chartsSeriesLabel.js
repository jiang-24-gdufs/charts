/**
 * 系列标签配置
 */
export default {
  show: false,
  position: 'top', //   标签的位置 'top''left' 'right' 'bottom' 'inside''insideLeft''insideRight''insideTop''insideBottom''insideTopLeft''insideBottomLeft''insideTopRight''insideBottomRight'
  distance: 0, // 距离图形元素的距离
  rotate: 0, // 标签旋转
  offset: [0, 0], // 是否对文字进行偏移。默认不偏移。例如：[30, 40] 表示文字在横向上偏移 30，纵向上偏移 40。
  formatter: '{a}{b}{c}',
  /* 文字 */
  color: null,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
  fontSize: 12,
  align: 'center',
  verticalAlign: 'auto',
  lineHeight: 15,
  textBorderColor: 'transparent',
  textBorderWidth: 0,
  textShadowColor: 'transparent',
  textShadowBlur: 0,
  textShadowOffsetX: 0,
  textShadowOffsetY: 0,
  /* 边框 */
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  borderWidth: 0,
  borderRadius: [0, 0, 0, 0],
  padding: [0, 0, 0, 0],
  shadowColor: 'transparent',
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
};
