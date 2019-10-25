// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    babel(babelrc())
  ]
};
