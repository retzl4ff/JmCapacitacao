import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: { prettier },
    rules: {
      'prettier/prettier': ['warn'],
      'react/react-in-jsx-scope': 'off',
      quotes: ['warn', 'single'],
    },
  },
];
