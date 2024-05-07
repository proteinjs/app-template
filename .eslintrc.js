module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: ['**/dist/*', '**/node_modules/*'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
