// NOTE: 执行lint命令式需要把package.json中的"type":"module"删掉, 不然会报不支持cjs
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
      tsx: true,
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
    'semi': ['warn', 'always'],
    'indent': [
      'warn',
      2,
      {
        'SwitchCase': 1,
        'ignoredNodes': ['VariableDeclaration[declarations.length=0]']
      }
    ],
    'no-plusplus': 'off',
    'no-param-reassign': ['error', { 'props': false }],

    'import/no-relative-packages': 'off',
    'arrow-parens': ['error', 'always', { 'requireForBlockBody': true }],

    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false },
    ],

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
    'vue/require-explicit-emits': 'off',

    '@typescript-eslint/no-unused-vars': ['error', { 'args': 'none' }],

    'import/no-extraneous-dependencies': 'off'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
