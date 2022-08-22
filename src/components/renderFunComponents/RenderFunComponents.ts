/**
 * 以渲染函数为载体
 */
export default {
  name: 'RenderFunComponents',
  functional: true,
  props: {
    renderFun: {
      type: Function,
      required: true,
    },
  },
  render(h, context) {
    return context.props.renderFun(h);
  },
};
