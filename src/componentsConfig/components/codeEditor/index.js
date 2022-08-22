import Vue from 'vue';

let instance = null;
const getComponents = function (options) {
  const context = new Vue({
    component: {
      CodeEditor: () => import('./CodeEditor'),
    },
    render(h) {
      return h(this.$options.component.CodeEditor, {
        props: {
          options,
        },
      });
    },
  });
  const component = context.$mount();
  document.body.appendChild(component.$el);
  return component.$children[0];
};

export default function (options) {
  const defaultOptions = {
    title: '',
    value: '',
    change: () => {},
    show: () => {},
    close: () => {
      instance = null;
    },
    full: false,
    language: 'javascript',
  };
  Object.assign(defaultOptions, options);
  Vue.observable(defaultOptions);
  return instance || (instance = getComponents(defaultOptions));
}
