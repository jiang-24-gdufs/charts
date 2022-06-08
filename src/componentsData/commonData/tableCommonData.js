import gridCommonData from './gridCommonData';

export default {
  ...gridCommonData,
  tableAttr: {
    stripe: false, // 是否为斑马纹 table
    border: true, // 是否带有纵向边框,
    size: 'small', // medium / small / mini
    fit: true, // 列的宽度是否自撑开
    showHeader: true, // 是否显示表头
    tableHeaderHeight: 0, // 表头高度
    highlightCurrentRow: false, // 是否当前行高亮
    emptyText: '暂无数据',
    showSummary: true, // 是否在表尾显示合计行
    sumText: '合计',
  },
};
