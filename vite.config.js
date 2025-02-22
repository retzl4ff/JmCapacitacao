import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@rollup/plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
      plugins: [
        [
          '@babel/plugin-proposal-optional-chaining-assign',
          {
            version: '2023-07',
          },
        ],
      ],
    }),
  ],
  server: {
    port: 3000,
  },
});
