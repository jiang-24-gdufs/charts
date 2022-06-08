import chartsSeriesLineStyle from '../commonBaseData/chartsSeriesLineStyle';
import chartsSeriesItemStyle from '../commonBaseData/chartsSeriesItemStyle';
import chartsTextStyle from '../commonBaseData/chartsTextStyle';
import chartsBorderStyle from '../commonBaseData/chartsBorderStyle';
import { deepCopy } from '@/utils';
import { gauge } from '@/assets/defaultData';
/**
 * 仪表盘
 */
export default {
  id: null,
  type: 'gauge',
  name: '仪表盘', // 系列名称
  radius: '75%', // 仪表盘半径
  startAngle: 225, // 0-360 仪表盘起始角度
  endAngle: -45, // 仪表盘结束角度。
  clockwise: true, // 仪表盘刻度是否是顺时针增长。
  // 系列中的数据内容数组
  data: [deepCopy(gauge.simpleGauge.value)],
  min: 0, // 最小的数据值
  max: 1000, // 最大的数据值
  splitNumber: 10, // 刻度分割
  // 仪表盘轴线样式
  axisLine: {
    show: true,
    lineStyle: {
      color: [
        [0.2, '#ff7e62'],
        [1, '#2aa179'],
      ],
      width: 30,
      shadowBlur: 0,
      shadowColor: null,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
  },
  // 分隔线样式。
  splitLine: {
    show: true,
    length: 30, // 分隔线线长。支持相对半径的百分比。
    lineStyle: deepCopy(chartsSeriesLineStyle),
  },
  // 刻度样式。
  axisTick: {
    show: true,
    splitNumber: 5, // 分隔线之间分割的刻度数。
    length: 8, // 刻度线长。支持相对半径的百分比。
    lineStyle: deepCopy(chartsSeriesLineStyle),
  },
  // 刻度标签
  axisLabel: {
    show: true,
    formatter: '{value}',
    distance: 5, // 标签与刻度线的距离
    ...chartsTextStyle,
    ...chartsBorderStyle,
  },
  // 仪表盘指针。
  pointer: {
    show: true,
    length: '80%',
    width: 8,
  },
  // 仪表盘指针样式。
  itemStyle: deepCopy(chartsSeriesItemStyle),
  // 仪表盘详情，用于显示数据。
  title: {
    show: true,
    ...chartsTextStyle,
    ...chartsBorderStyle,
  },
  detail: {
    show: true,
    ...chartsTextStyle,
    ...chartsBorderStyle,
    formatter: '{value}',
  },
};
