const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  ...expoConfig, // Spread the array if expoConfig returns one
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // Disable rules that don't play nice with TS types
      'no-undef': 'off',
      'no-unused-vars': 'off',
      // Enable the TypeScript-aware version of unused vars
      '@typescript-eslint/no-unused-vars': ['error'],
    },
  },
  {
    ignores: ['dist/*'],
  },
]);