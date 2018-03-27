import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: false,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/login.html'));
});

app.get('/test', function(req, res){
  res.sendFile(path.join(__dirname, '../src/test.html'));
});

app.listen(port,function(err){
  if (err) {
    console.log
  }
  else {
    open('http://localhost:'+port);
  }
});
