/**
 * 位置信息
 * @type {{}}
 */
export const position = [
  'top',
  'left',
  'right',
  'bottom',
  'inside',
  'insideRight',
  'insideTop',
  'insideBottom',
  'insideTopLeft',
  'insideBottomLeft',
  'insideTopRight',
  'insideBottomRight'
];

export const coordinateSystem = {
  CARTESIAN2D: 'cartesian2d', // 使用二维的直角坐标系
  POLAR: 'polar', // 使用极坐标系
  GEO: 'geo'// 使用地理坐标系
};
/**
 * 日期格式
 */
export const dateFormat = [
  'yyyy-MM-dd HH:mm:ss',
  'yyyy-MM-dd hh:mm:ss',
  /* 'yyyy/MM/dd  HH:mm:ss',
	'yyyy/MM/dd  hh:mm:ss',*/
  'yyyy-MM-dd',
  /* 'yyyy/MM/dd',*/
  'HH:mm:ss',
  'hh:mm:ss'
];
/**
 * 日期类型
 * @type {{}}
 */
export const dateType = {
  DATE: 'date',
  DATE_TIME: 'datetime',
  DATE_TIME_RANGE: 'datetimerange',
  DATE_RANGE: 'daterange'
};

/**
 * 表单控件
 */
export const formWidget = {
  TEXT_INPUT: 'textInput',
  NUMBER_INPUT: 'numberInput',
  SELECT_INPUT: 'selectInput',
  DATE_INPUT: 'dateInput',
  BETWEEN_NUMBER_INPUT: 'betweenNumberInput'
};
/**
 * 编辑器主题
 * @type {{VS_DARK: string, VS: string}}
 */
export const editorTheme = {
  VS: 'vs',
  VS_DARK: 'vs-dark',
  HC_BLACK: 'hc-black'
};
// 系统id
export const systemId = '00000000-0000-0015-0001-000000000001';
/**
 * 中国城市
 */
export const city = {
  'anhui': '安徽',
  'aomen': '澳门',
  'beijing': '北京',
  'chongqing': '重庆',
  'fujian': '福建',
  'gansu': '甘肃',
  'guangdong': '广东',
  'guangxi': '广西',
  'guizhou': '贵州',
  'hainan': '海南',
  'hebai': '河北',
  'heilongjiang': '黑龙江',
  'henan': '河南',
  'hubei': '湖北',
  'hunan': '湖南',
  'jiangsu': '江苏',
  'jiangxi': '江西',
  'jilin': '吉林',
  'liaoning': '辽宁',
  'neimenggu': '内蒙古',
  'ningxia': '宁夏',
  'qinghai': '青海',
  'shandong': '山东',
  'shanghai': '上海',
  'shanxi': '山西',
  'sichuan': '四川',
  'taiwan': '台湾',
  'tianjin': '天津',
  'xianggang': '香港',
  'xinjiang': '新疆',
  'yunnan': '云南',
  'zhejiang': '浙江'
};

export const relation = {
  'AND': 'and',
  'OR': 'or'
};
