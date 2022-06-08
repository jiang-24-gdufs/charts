/**
 * 网格项的样式配置
 * 网格公共配置数据,包含在每个配置数据的option选项中
 */
export default {
  borderWidth: 0,
  borderColor: null,
  borderStyle: 'solid', // dashed
  borderRadius: [0, 0, 0, 0],
  borderImageSource: null,
  borderImageWidth: 0,
  borderImageRepeat: 'repeat', // 用于设置图像边界是否应重复（repeat）、拉伸（stretch）或铺满（round）。

  backgroundColor: null, // 背景颜色
  shadowColor: null, // 阴影颜色
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowSpread: 0, // 阴影大小

  backgroundImage: null,
  backgroundWidthSize: 100, // 百分比 100%
  backgroundHeightSize: 100, // 百分比 100%
  backgroundRepeat: 'no-repeat', // repeat-y  repeat-x  repeat
};
