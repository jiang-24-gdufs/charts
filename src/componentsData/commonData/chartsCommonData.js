import chartsTitle from './commonBaseData/chartsTitle';
import chartsToolBox from './commonBaseData/chartsToolBox';
import chartsTextStyle from './commonBaseData/chartsTextStyle';
import chartsToolTip from './commonBaseData/chartsToolTip';
import chartsLegend from './commonBaseData/chartsLegend';
import { color } from '@/assets/defaultData.json';
import gridCommonData from './gridCommonData';

export default {
  ...gridCommonData,
  title: chartsTitle,
  toolbox: chartsToolBox,
  legend: chartsLegend,
  tooltip: chartsToolTip,
  textStyle: chartsTextStyle,
  // backgroundColor: 'transparent',
  // color,
};
