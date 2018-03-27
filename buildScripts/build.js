var webpack = require('webpack');
var webpackConfig = require('../webpack.config.prod');

webpack(webpackConfig).run((err,stats){})};
  if(err){
    console.log(err);
    return 1;
  }
  return 0;
