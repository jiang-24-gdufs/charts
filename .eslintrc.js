module.exports = {
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    '@vue/prettier',
    '@smart/typescript',
  ],
  rules: {
    // vue
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/require-default-prop': 'off',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
