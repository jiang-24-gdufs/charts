// 柱状图的系列配置
import bar from './barSeries';

// 饼状图的系列配置
import pie from './pieSeries';

// 散点图
import scatter from './scatterSeries';

// 折线图
import line from './lineSeries';

// 仪表盘
import gauge from './gaugeSeries';

export const chartTypeOptions = [
  {
    key: 'bar',
    label: '柱状图',
    value: 'bar',
    disabled: true,
  },
  {
    key: 'pie',
    label: '饼状图',
    value: 'pie',
    disabled: true,
  },
  {
    key: 'scatter',
    label: '散点图',
    value: 'scatter',
  },
  {
    key: 'line',
    label: '折线图',
    value: 'line',
  },
  {
    key: 'gauge',
    label: '仪表盘',
    value: 'gauge',
    disabled: true,
  },
];

export default {
  bar,
  pie,
  scatter,
  line,
  gauge,
};
