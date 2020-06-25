module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended', // agregar el plugin de reactjs para eslint
    'airbnb-typescript-prettier',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', // agrega las reglas de prettier a eslint
    'plugin:prettier/recommended', // agregar el plugin que integra eslint con prettier
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // permite a eslint analizar los archivos jsx o tsx
    },
  },
  rules: {
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
  },
  settings: {
    react: {
      version: 'detect', // para detectar la versión de reactjs
    },
    overrides: [
      {
        // enable the rule specifically for TypeScript files
        files: ['*.ts', '*.tsx'],
        rules: {
          'no-console': 'off',
          'no-restricted-globals': ['error', 'event', 'fdescribe'],
          'no-useless-constructor': 'off',
          'react/prefer-stateless-function': 'off',
          'class-methods-use-this': 'off',
          '@typescript-eslint/no-inferrable-types': 'off',
          '@typescript-eslint/no-useless-constructor': 'error',
          '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
              allowExpressions: true,
              allowTypedFunctionExpressions: true,
              allowHigherOrderFunctions: true,
            },
          ],
          '@typescript-eslint/no-unused-vars': [
            'error',
            {
              vars: 'all',
              args: 'after-used',
              ignoreRestSiblings: true,
            },
          ],
        },
      },
    ],
  },
};
