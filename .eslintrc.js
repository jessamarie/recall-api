module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    semi: 'error',
    quotes: ['error', 'single'],
    'space-before-function-paren': ['error', 'never'],
    indent: ['error', 2]
  }
};
