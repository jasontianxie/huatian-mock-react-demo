module.exports = {
  plugins: [
    require('autoprefixer')({"browsers": [
    "Firefox < 20"
  ]}),
  require('postcss-uncss')
  ]
}