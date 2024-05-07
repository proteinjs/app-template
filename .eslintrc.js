module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  ignorePatterns: ['**/dist/*', '**/node_modules/*'],
  rules: {
    'prettier/prettier': ['error'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'keyword-spacing': ['error', { before: true }],
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
