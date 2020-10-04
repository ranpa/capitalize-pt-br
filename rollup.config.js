'use strict'

import path from 'path'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'

const configuration = {
  input: path.join(__dirname, 'src', 'index.js'),
  output: {
    file: path.join(__dirname, 'dist', 'capitalize-pt-br.min.js'),
    format: 'cjs',
    exports: 'default',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
    copy({
      targets: [{ src: 'src/index.d.ts', dest: 'dist' }]
    })
  ],
}

export default configuration
