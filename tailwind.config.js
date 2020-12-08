module.exports = {
  purge: [
    './*.html',
    './src/*.js',
    './src/*.css',
    './dist/*.js',
    './dist/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    float: false
  }
}
