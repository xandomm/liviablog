module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'require-await': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side-effect imports
          ['^\\u0000'],
          // Packages.
          ['^@?\\w'],
          // Any other packages and src/*
          ['^(src)?'],
          // Relative imports
          ['^\\.'],
        ],
      },
    ],
    'sort-imports': 'off',
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
    'no-shadow': 'off',
    radix: 'off',
    'no-undef': 'off',
  },
}
