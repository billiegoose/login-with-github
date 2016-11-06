const elixir = require('laravel-elixir')
require('laravel-elixir-vueify')

elixir((mix) => {
  mix
    .browserify('app.js')
    .browserSync({proxy: null, server: 'public'})
})
