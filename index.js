var express  = require('express'), app = express()
var fs = require('fs')
const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log('listening on port ' + port)
})
function buildBundle(){
    var webpack = require('webpack')
    var webpackDevMiddleware = require('webpack-dev-middleware')
    var webpackHotMiddleware = require('webpack-hot-middleware')
    var config = require('./webpack.config')
    var compiler = webpack(config)
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
    app.use(webpackHotMiddleware(compiler))
}
buildBundle()
app.use(express.static(__dirname + '/'));
app.get('/', function(req, res){
    var html = fs.readFileSync('./index.html', 'utf8')
    res.send(html)
})