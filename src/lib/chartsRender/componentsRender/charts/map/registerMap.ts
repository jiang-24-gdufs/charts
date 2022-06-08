import * as echarts from 'echarts';
import china from '@/assets/mapData/china.json';
// import chinaCity from '../assets/mapData/china-cities';
import guangdong from '@/assets/mapData/province/guangdong.json';
// 注册地图
echarts.registerMap('china', china as any);
// echarts.registerMap('china-city',{geoJSON:chinaCity});
echarts.registerMap('guangdong', guangdong as any);
