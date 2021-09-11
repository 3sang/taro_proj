/** 创建服务器启动模块 */

// 引入路由模块，此处写路由模块路径
var { app } = require('./expressServer');
// 启动服务器，第一个参数是端口
app.listen(8081, function () {
    // 此处只是提示服务器运行成功
    console.log('http://localhost:8081/ server is running');
});