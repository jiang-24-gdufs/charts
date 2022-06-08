/**
 * 图表标题公共数据
 */
export default {
  show: true, // 是否显示标题组件
  /**
   * ************标题公共样式
   */
  left: 'center', // grid 组件离容器左侧的距离。 left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'。
  top: 'auto', // grid 组件离容器上侧的距离。top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'。如果 top 的值为'top', 'middle', 'bottom'，组件会根据相应的位置自动对齐。
  right: 'auto', // grid 组件离容器右侧的距离。 right 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比。
  bottom: 'auto', // grid 组件离容器右侧的距离。right 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比。
  // textAlign:'center',//整体（包括 text 和 subtext）的水平对齐'auto'、'left'、'right'、'center'。
  textVerticalAlign: 'auto', // 整体（包括 text 和 subtext）的垂直对齐。 'auto'、'top'、'bottom'、'middle'
  triggerEvent: false, // 是否触发事件。
  itemGap: 10, // 主副标题之间的间距。
  // backgroundColor: 'transparent', // 标题背景色，默认透明。
  padding: [5, 5, 5, 5], // 标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
  // borderColor: '#ccc', // 标题的边框颜色
  borderWidth: 0, // 边框的的线宽
  borderRadius: [0, 0, 0, 0], // 圆角半径，单位px，支持传入数组分别指定 4 个圆角半径
  shadowBlur: 0, // 图形阴影的模糊大小
  // shadowColor: 'transparent',
  shadowOffsetX: 0, // 阴影水平方向上的偏移距离。
  shadowOffsetY: 0, // 阴影垂直方向上的偏移距离。
  /**
   * ************主标题
   */
  text: '主标题', // 主标题文本，支持\n换行
  link: '', // 主标题超文本链接
  target: 'blank', // self 当前窗口 blank 新窗口
  textStyle: {
    // 主标题文字颜色
    // color: '#333', // 默认值
    fontStyle: 'normal', // 字体风格  normal标准字  italic斜体字  oblique 倾斜字
    fontWeight: 'normal', // 主标题文字字体的粗细 normal标准 lighter清淡的  bold粗体 bolder特粗体
    fontFamily: 'sans-serif', // 主标题文字字体系列  sans-serif 无衬线字体 monospace等宽字体  Arial英文黑体 Courier New新等宽字体 Microsoft YaHei微软雅黑
    fontSize: 18, // 主标题字体大小
    lineHeight: 20, // 主标题行高
    // textBorderColor: 'transparent', // 主标题文本描边颜色
    textBorderWidth: 0, // 主标题文字本身的描边宽度
    // textShadowColor: 'transparent', // 主标题文字本身的阴影颜色。
    textShadowBlur: 0, // 主标题文字本身的阴影长度。
    textShadowOffsetX: 0, // 主标题文字本身的阴影 X 偏移
    textShadowOffsetY: 0, // 主标题文字本身的阴影 Y 偏移。
  },
  /**
   * ************副标题
   */
  subtext: '副标题',
  sublink: '', // 副标题超文本链接
  subtarget: 'self', // 副标题文本超链接。
  // 副标题样式
  subtextStyle: {
    // color: '#aaa', // 默认值
    fontStyle: 'normal', // 副标题字体风格  normal标准字  italic斜体字  oblique 倾斜字
    fontWeight: 'normal', // 副标题文字字体的粗细 normal标准 lighter清淡的  bold粗体 bolder特粗体
    fontFamily: 'sans-serif', // 副标题文字字体系列  sans-serif 无衬线字体 monospace等宽字体  Arial英文黑体 Courier New新等宽字体 Microsoft YaHei微软雅黑
    fontSize: 12, // 副标题字体大小
    align: 'center', // 副标题文字水平对齐方式，默认自动。auto left,center,right
    verticalAlign: 'center', // 副标题文字垂直对齐方式，默认自动auto。 top middle bottom
    lineHeight: 16, // 副标题行高
    textBorderColor: 'transparent', // 副标题文本描边颜色
    textBorderWidth: 0, // 副标题文字本身的描边宽度
    textShadowColor: 'transparent', // 副标题文字本身的阴影颜色。
    textShadowBlur: 0, // 副标题文字本身的阴影长度。
    textShadowOffsetX: 0, // 副标题文字本身的阴影 X 偏移
    textShadowOffsetY: 0, // 副标题文字本身的阴影 Y 偏移。
  },
};
