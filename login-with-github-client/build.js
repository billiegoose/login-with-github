"use strict"
let rollup = require('rollup')
let babel = require('rollup-plugin-babel')

rollup.rollup({
  entry: 'src/LoginWithGithub.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}).then(function (bundle) {
  bundle.write({
    moduleName: 'LoginWithGithub',
    format: 'umd',
    dest: 'dist/LoginWithGithub.umd.js',
    sourceMap: true,
  })
  bundle.write({
    format: 'es',
    dest: 'dist/LoginWithGithub.es2015.js',
    sourceMap: true,
  })
  bundle.write({
    format: 'commonjs',
    dest: 'dist/LoginWithGithub.browserify.js',
    sourceMap: true,
  })
})
