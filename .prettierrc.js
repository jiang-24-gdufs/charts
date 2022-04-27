module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
