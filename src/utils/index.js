// @ts-check
/**
 * 深度复制
 * @param obj
 */
export function deepCopy(obj) {
  if (!obj || typeof obj === 'number' || typeof obj === 'string') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => {
      if (Array.isArray(item) || typeof item === 'object') {
        return deepCopy(item);
      }
      return item;
    });
  }

  const result = {};
  if (typeof obj === 'object') {
    for (const key in obj) {
      // 不复制原型上的
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj[key]) || typeof obj[key] === 'object') {
          result[key] = deepCopy(obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
  }
  return result;
}

/**
 * 时间戳转日期
 * @param timestamp
 * @returns {string}
 * @constructor
 */
export function timeStampToDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

/**
 * 时间戳转时间
 * @param timestamp
 * @returns {string}
 */
export function timeStampToTime(timestamp) {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}   ${date.getHours()}:${date.getMinutes()}`;
}
/**
 * 格式化数据库列
 * @param fields
 */
export function handleFormatterFields(fields) {
  if (!Array.isArray(fields)) {
    return null;
  }
  const array = [];
  fields.forEach((item) => {
    array.push({
      column: item.label,
      alias: item.prop || null,
      type: item.type,
      delete: false,
    });
  });
  return array;
}

export const joinType = {
  left: 'LEFT JOIN',
  right: 'RIGHT JOIN',
  inner: 'INNER JOIN',
  full: 'FULL JOIN',
};

export function handleClearOtherOption(otherOption) {
  otherOption.dataSetId = null;
  otherOption.dimensionJson = [];
  otherOption.measureJson = [];
  otherOption.whereJson = [];
}

// 聚和类型
export const gatherType = {
  AVG: 'AVG', //
  SUM: 'SUM',
  MIN: 'MIN',
  COUNT: 'COUNT',
  MAX: 'MAX',
};
// 排序方式
export const sortType = {
  ASC: 'ASC', // 递增
  DESC: 'DESC', // 递减
};
// 查询条件类型
export const conditionType = {
  BETWEEN: 'BETWEEN', // （时间格式）；EQ（等于）；LIKE（模糊查询）
  EQ: 'EQ', // 等于
  LIKE: 'LIKE', // 模糊查询
  NOT_LIKE: 'NOTLIKE', //
  GT: 'GT', // 大于
  LT: 'LT', // 小于
  EGT: 'EGT', // 大于等于
  ELT: 'ELT', // 小于等于
  UEQ: 'UEQ', // 不等于
  ISNULL: 'ISNULL', // 空值查询
  ISNOTNULL: 'ISNOTNULL', // 非空查询
};

// 数据类型，数据源数据分为三种类型，number(数字类型),string(字符串类型)，dateTime(时间类型)
export const dataType = {
  NUMBER: 'NUMBER', // 数字类型
  STRING: 'STRING',
  DATETIME: 'DATETIME',
};

/**
 * 获取数据类型名字
 * @param type
 * @returns {string}
 */
export function getDataTypeName(type) {
  switch (type) {
    case dataType.DATETIME:
      return '时间';
    case dataType.STRING:
      return '字符串';
    case dataType.NUMBER:
      return '数字类型';
    default:
      return '';
  }
}

/**
 * 格式化时间
 * @param time
 * @returns {string}
 */
export function formatDate(time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const // 月份是从0开始的
    day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day} ${
    hour < 10 ? `0${hour}` : hour
  }:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}

/**
 * 格式化日期
 */
export function formatTime(time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const // 月份是从0开始的
    day = date.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
}

/**
 * 获取url的查询参数
 */
export function handleGetQueryParams() {
  const { search } = window.location;
  const paramsArray = search.slice(1).split('&');
  const paramsObj = {};
  paramsArray.forEach((item) => {
    const array = item.split('=');
    paramsObj[array[0]] = array[1];
  });
  return paramsObj;
}

export function openNewWindow(url) {
  // 如果历览器支持 window.open 函数
  if (window.open !== undefined) {
    window.open(url);
  } else {
    const dom = document.createElement('a');
    dom.href = url;
    dom.target = '_blank';
    dom.click();
  }
}

/**
 * 判断当前环境是否是手机
 * @returns {boolean | string | boolean}
 */
export function isPhone() {
  return (
    /(iPhone|iPod|Android)/i.test(navigator.userAgent) ||
    (window.location.hash && /isPhone/.test(window.location.hash))
  );
}

/**
 * 确保函数只执行一次
 */
export function once(fn) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      fn(...arguments);
    }
  };
}

/**
 * 在单位时间内，确保只执行一次
 * @param fn
 * @param time
 * @returns {Function}
 */
export function onceTime(fn, time = 50) {
  let called = false;
  return function () {
    if (!called) {
      window.setTimeout(() => {
        called = true;
        fn(...arguments);
      }, time);
    }
  };
}

/**
 * 判断是否为空字符串
 * @param str
 * @returns {boolean}
 */
export function isEmptyString(str) {
  return !str || (typeof str === 'string' && str.trim() === '');
}

/**
 * 判断是否为对象
 * @param obj
 * @returns {boolean}
 */
export function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * 判断是否为 function
 * @param fun
 * @returns {boolean}
 */
export function isFunction(fun) {
  return Object.prototype.toString.call(fun) === '[object Function]';
}

/**
 * 合并配置
 * @param source
 * @param target
 */
export function mergeConfig(source, target) {
  // 合并数组
  function mergeArray(sourceArray, targetArray) {
    sourceArray.forEach((item, index) => {
      if (targetArray[index] === undefined || isFunction(sourceArray[index])) {
        targetArray[index] = sourceArray[index];
        return targetArray[index];
      }

      if (isPlainObject(sourceArray[index] && isPlainObject(sourceArray[index]))) {
        return merge(sourceArray[index], sourceArray[index]);
      } else if (Array.isArray(sourceArray[index]) && Array.isArray(targetArray[index])) {
        return mergeArray(sourceArray[index], targetArray[index]);
      }
    });
  }

  // 合并对象
  function merge(sourceObj, targetObj) {
    Object.keys(sourceObj).forEach((key) => {
      // 如果目标对象为空或者 源对象属性为函数
      if (targetObj[key] === undefined || isFunction(sourceObj[key])) {
        targetObj[key] = sourceObj[key];
        return targetObj[key];
      }
      if (isPlainObject(sourceObj[key] && isPlainObject(targetObj[key]))) {
        merge(sourceObj[key], targetObj[key]);
      } else if (Array.isArray(sourceObj[key]) && Array.isArray(targetObj[key])) {
        mergeArray(sourceObj[key], targetObj[key]);
      }
    });
  }

  merge(source, target);
}

/**
 * 比较两个参数是否相等
 * @param sourceObj
 * @param targetObj
 * @returns {boolean|*|(function(*, *): (boolean|*|*|undefined))|boolean|boolean|*}
 */
export function isEqual(sourceObj, targetObj) {
  // 如果类型不一样，直接返回去
  if (Object.prototype.toString.call(sourceObj) !== Object.prototype.toString.call(targetObj)) {
    return false;
  }

  // 判断是否是相同的数组
  function isEqualArray(source, target) {
    if (source.length !== target.length) {
      return false;
    }
    for (const [index, item] of source.entries()) {
      if (Object.prototype.toString.call(item) !== Object.prototype.toString.call(target[index])) {
        return false;
      }
      if (isPlainObject(item)) {
        return isEqualObject(item, target[index]);
      } else if (Array.isArray(item)) {
        return isEqualArray(item, target[index]);
      } else if (item !== target[index]) {
        return false;
      }
    }
    return true;
  }

  // 判断是否是相同的对象
  function isEqualObject(source, target) {
    // 如果两个对象的可遍历的key  的数量一样
    if (Object.keys(source).length !== Object.keys(target).length) {
      return false;
    }
    for (const [key, item] of Object.entries(source)) {
      if (target[key] === undefined) {
        return false;
      }
      if (Object.prototype.toString.call(item) !== Object.prototype.toString.call(target[key])) {
        return false;
      }
      if (isPlainObject(item)) {
        isEqualObject(item, target[key]);
      } else if (Array.isArray(item)) {
        isEqualArray(item, target[key]);
      } else if (item !== target[key]) {
        return false;
      }
    }
    return true;
  }

  if (isPlainObject(sourceObj)) {
    return isEqualObject(sourceObj, targetObj);
  }
  return isEqualArray(sourceObj, targetObj);
}

/**
 * 判断是否为ie 浏览器
 */
export const isIE = !!window.ActiveXObject || 'ActiveXObject' in window;

/**
 *优化图表数据
 * @param obj
 */
export function optimizeChartsData(obj) {
  if (isPlainObject(obj)) {
  }
}

/**
 * 获取条件类型的符号名称
 * @param condition
 * @returns {string}
 */
export function getConditionTypeName(condition) {
  switch (condition) {
    case conditionType.EQ:
      return '=';
    case conditionType.UEQ:
      return '!=';
    case conditionType.BETWEEN:
      return 'between';
    case conditionType.LIKE:
      return 'like';
    case conditionType.NOT_LIKE:
      return 'not like';
    case conditionType.LT:
      return '<';
    case conditionType.EGT:
      return '>=';
    case conditionType.ELT:
      return '<=';
    case conditionType.GT:
      return '>';
    default:
      return '';
  }
}

/**
 * 获取富文本便签的内容
 * @param html
 */
export function getRichContent(html) {
  if (isEmptyString(html)) {
    return '';
  }
  const reg = /(?:>)([\w|\s]+?)(?:<)/g;
  let content = '';
  let array = null;
  do {
    array = reg.exec(html);
    if (array !== null) {
      const result = array[1].trim();
      content += result;
    }
  } while (array);
  return content;
}
