import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import bundleSize from 'rollup-plugin-bundle-size';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const IS_PROD = process.env.NODE_ENV === 'production';

const INPUT_FILE = './src/index.ts';
const INPUT_FILE_BROWSER = './src/browser.ts';

const getPlugins = (tsDeclaration = false) => [
  typescript(
    tsDeclaration
      ? {
          useTsconfigDeclarationDir: true,
          tsconfigOverride: {
            compilerOptions: {
              declaration: true,
              declarationDir: 'dist/types'
            },
            exclude: ['test/*']
          }
        }
      : {}
  ),
  babel(),
  nodeResolve({ mainFields: ['module', 'jsnext'] }),
  commonjs({ include: 'node_modules/**' }),
  bundleSize()
];

const cjs = {
  plugins: getPlugins(true),
  input: INPUT_FILE,
  output: {
    exports: 'named',
    file: pkg.main,
    format: 'cjs'
  }
};

const es = {
  plugins: getPlugins(),
  input: INPUT_FILE,
  output: [
    {
      file: pkg.module,
      format: 'es'
    }
  ]
};

const umd = {
  plugins: [...getPlugins(), uglify()],
  input: INPUT_FILE_BROWSER,
  output: [
    {
      file: pkg.browser,
      format: 'umd'
    }
  ]
};

export default IS_PROD ? [cjs, es, umd] : cjs;
