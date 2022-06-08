import { pie } from '@/assets/defaultData';
import chartsSeriesItemStyle from '../commonBaseData/chartsSeriesItemStyle';
import chartsSeriesLabel from '../commonBaseData/chartsSeriesLabel';
import chartsSeriesLineStyle from '../commonBaseData/chartsSeriesLineStyle';

export default {
  id: null,
  name: '访问来源',
  type: 'pie',
  legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
  hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。
  hoverOffset: 10, // 高亮扇区的偏移距离。
  selectedMode: false, // 选中模式，表示是否支持多个选中，默认关闭，
  selectedOffset: 10, // 选中扇区的偏移
  clockwise: true, // 饼图的扇区是否是顺时针排布。
  startAngle: 90, // 起始角度，支持范围[0, 360]。
  minAngle: 0, // 最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互。
  minShowLabelAngle: 0, // 小于这个角度（0 ~ 360）的扇区，不显示标签（label 和 labelLine）
  roseType: false, // 是否是否展示成南丁格尔图，
  avoidLabelOverlap: true, // 是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。
  stillShowZeroSum: true, // 是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区。
  cursor: 'pointer', // 鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
  label: {
    ...chartsSeriesLabel,
    position: 'outside', // 'outside'饼图扇区外侧 'inside'饼图扇区内部。'center'在饼图中心位置
  },
  labelLine: {
    show: false,
    length: null, // 视觉引导线第一段的长度。
    length2: null, // 视觉引导项第二段的长度。
    smooth: false, // 是否平滑视觉引导线，默认不平滑，可以设置成 true 平滑显示，
    lineStyle: chartsSeriesLineStyle,
    // 高亮状态下视觉引导线的样式。
    emphasis: {
      show: false,
      lineStyle: chartsSeriesLineStyle,
    },
  },
  // 图形样式表
  itemStyle: chartsSeriesItemStyle,
  // 高亮的扇区和标签样式。
  emphasis: {
    label: chartsSeriesLabel,
    itemStyle: chartsSeriesItemStyle,
  },
  radius: [0, '75%'], //
  center: ['50%', '50%'],
  data: pie.simplePie.series,
};
