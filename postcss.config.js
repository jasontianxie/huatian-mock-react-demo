const fs = require('fs');
module.exports = {
  plugins: [
    require('autoprefixer')({"browsers": [
    "Firefox < 20"
  ]})
  // require('postcss-modules')({
  //   // scopeBehaviour: 'global',
  //   getJSON: function(cssFileName, json) {
  //     var path          = require('path');
  //     var cssName       = path.basename(cssFileName, '.scss');
  //     var jsonFileName  = path.resolve('./build/postcss-modules/' + cssName + '.json');
  //     fs.writeFileSync(jsonFileName, JSON.stringify(json));
  //   }
  // })
  ]
}