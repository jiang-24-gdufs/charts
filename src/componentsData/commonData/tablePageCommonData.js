/**
 * 分页的表格公共数据
 */
import tableCommonData from './tableCommonData';
import { deepCopy } from '../../utils';
import pageStyle from './commonBaseData/pageStyle';
export default {
  ...tableCommonData,
  // 分页
  page: {
    pageSize: 20, // 分页，每页页数
    pagerCount: 10, // 页码按钮的数量
    background: false, // 是否为分页按钮添加背景色
    pageStyle: deepCopy(pageStyle),
    pageLayout: ['sizes', 'total', 'prev', 'pager', 'next', 'jumper']
  }
};
