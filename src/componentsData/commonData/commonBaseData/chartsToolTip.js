/**
 * 提示框
 */
export default {
  show: true,
  trigger: 'axis', // 触发类型 'item' 数据项触发 ,'axis' 坐标轴触发 'none' 不触发
  showContent: true, // 是否显示提示框浮层
  alwaysShowContent: false, // 是否永远显示提示框内容
  triggerOn: 'mousemove|click', // 可选 'mousemove','click' 'mousemove|click' none
  showDelay: 0, // 浮层显示的延迟，单位为 ms
  hideDelay: 100, // 浮层隐藏的延迟，单位为 ms
  transitionDuration: 0.4, // 提示框浮层的移动动画过渡时间，单位是 s，
  // position:['50%','50%'],// 通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。
  formatter: '', // 框浮层内容格式器
  axisPointer: {
    // 坐标轴指示器，坐标轴触发有效
    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
  },
  // backgroundColor: 'rgba(50,50,50,0.7)',
  // borderColor: '#333',
  borderWidth: 0,
  padding: [5, 5, 5, 5],
  textStyle: {
    // color: '#fff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 14,
    lineHeight: 25,
    // textBorderColor: 'transparent',
    textBorderWidth: 0,
    // textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
};
