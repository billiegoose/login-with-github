var fs = require("fs")
var browserify = require('browserify')
var vueify = require('vueify')

browserify('./index.js')
  .transform(vueify)
  .bundle()
  .pipe(fs.createWriteStream("bundle.js"))
