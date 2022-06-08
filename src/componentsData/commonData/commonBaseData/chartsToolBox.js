/**
 * 图表工具箱公共数据
 */
export default {
  // 工具栏
  show: false, // 是否显示工具栏
  orient: 'horizontal', // 工具栏 icon 的布局朝向。'horizontal''vertical'
  itemSize: 15, // 工具栏 icon 的大小。
  itemGap: 10, // 工具栏 icon 每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
  showTitle: true, // 是否在鼠标 hover 的时候显示每个工具 icon 的标题。
  feature: {
    dataView: { show: true, readOnly: false },
    restore: { show: true },
    magicType: { type: ['line', 'bar'], show: true },
    saveAsImage: { show: true },
  },
};
