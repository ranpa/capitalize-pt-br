import path from 'path'
import babel from 'rollup-plugin-babel';

const configuration = {
  input: path.join(__dirname, 'src', 'index.js'),
  output: {
    file: path.join(__dirname, 'dist', 'capitalize-pt-br.js'),
    format: 'cjs',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}

export default configuration
