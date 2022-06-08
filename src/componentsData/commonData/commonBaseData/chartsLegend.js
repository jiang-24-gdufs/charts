/**
 * 图表图例
 */
export default {
  show: true,
  type: 'scroll', // plain 普通 scroll滚动翻页
  zlevel: 0, // 层叠权重
  left: 'auto', // 图例组件离容器左侧的距离。left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'。如果 left 的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐。
  top: 'auto', // 图例组件离容器上侧的距离。top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'。
  right: 'auto', // 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比。
  bottom: 'auto', // bottom 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比。
  width: 'auto',
  height: 'auto',
  orient: 'vertical', // 图例列表的布局朝向。'horizontal','vertical'',
  align: 'auto', // 图例标记和文本的对齐。默认自动，根据组件的位置和 orient 决定，当组件的 left 值为 'right' 以及纵向布局（orient 为 'vertical'）的时候为右对齐，及为 'right'。'auto'left''right'
  padding: [5, 5, 5, 5], // 图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
  itemGap: 10, // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
  itemWidth: 25, // 图例标记的图形宽度。
  itemHeight: 14, // 图例标记的图形高度。
  symbolKeepAspect: true, // 如果图标（可能来自系列的 symbol 或用户自定义的 legend.data.icon）是 path:// 的形式，是否在缩放时保持该图形的长宽比。
  formatter: '{name}', // 格式化图例文本
  selectedMode: true, // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
  // inactiveColor: '#ccc', // 图例关闭时的颜色。
  textStyle: {
    // backgroundColor: 'transparent',
    // borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    shadowColor: 'transparent',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    lineHeight: 30,
    // color: '#333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
  // backgroundColor: 'transparent',
  // borderColor: '#ccc',
  borderWidth: 0,
  borderRadius: [0, 0, 0, 0],
  shadowBlur: 0,
  // shadowColor: '#ccc',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
};
