axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
records      = require 'roots-records'
collections  = require 'roots-collections'
excerpt      = require 'html-excerpt'
moment       = require 'moment'
path         = require 'path'

monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/includes/_*', '.gitignore', 'ship.*conf', '**/general_custom.jade', '**/general.jade']

  locals:
    postExcerpt: (html, length, ellipsis) ->
      excerpt.text(html, length || 100, ellipsis || '...')
    dateFormat: (date, format) ->
      moment(date).format(format)

  extensions: [
    records(
      menu: { file: "data/menu.json" }
      site: { file: "data/site.json" }
      files: { file: "data/files.json" }
    ),
    collections(
      folder: 'posts',
      layout: 'post'
      prepare: (post) ->
        l = path.basename(post.permalink, '.html')
        post.cardActivator = l
    ),
    collections(folder: 'page', layout: 'post'),
    collections(folder: 'page', layout: 'post'),
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl')

  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true