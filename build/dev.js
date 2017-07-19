var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.dev.config");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
    publicPath: '/dist/'  // ±ØĞëÅäÖÃ
});
server.listen(8808, "0.0.0.0", function () {
    // Æô¶¯¼àÌıºó£¬´ò¿ªä¯ÀÀÆ÷
    /*var c = require('child_process');
    c.exec("start http://127.0.0.1:8808/");*/
});