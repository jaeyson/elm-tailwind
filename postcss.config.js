// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: ['./*.html'],
//   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
// })
// const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // tailwindcss: {},
    // autoprefixer: {},
    // require('@fullhuman/postcss-purgecss')({
    //   content: [
    //     './public/*.html',
    //     './src/*.js',
    //   ],
    // }),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {removeAll: true}
        }
      ]
    })
  ]
}
