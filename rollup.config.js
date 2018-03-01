import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'index.js',
    output: {
      name: 'create-immutable-selector',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [resolve(), commonjs()]
  },
  {
    input: 'index.js',
    external: ['immutable', 'reselect'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
