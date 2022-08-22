/**
 * 以组件为载体
 */
export default {
  name: 'RenderComponents',
  functional: true,
  props: {
    component: {
      type: [Object, String],
      required: true,
    },
    prop: {
      type: Object,
      required: false,
      default: function () {
        return {};
      },
    },
  },
  render(h, context) {
    const { prop, component } = context.props;
    return h(component, {
      ...prop,
    });
  },
};
