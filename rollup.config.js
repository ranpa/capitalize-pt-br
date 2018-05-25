'use strict'

import path from 'path'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const configuration = {
  input: path.join(__dirname, 'src', 'index.js'),
  output: {
    file: path.join(__dirname, 'dist', 'capitalize-pt-br.min.js'),
    format: 'cjs',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
}

export default configuration
