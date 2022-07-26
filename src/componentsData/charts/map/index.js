import chinaMap from './chinaMap';
// import chinaCityMap from './chinaCityMap';
import chinaProvinceMap from './chinaProvinceMap';
import ChartMap from '@/assets/chart-icon/chart-map.svg'


export default {
  title: '二维地图',
  icon: ChartMap,
  components: [chinaMap, chinaProvinceMap],
};
