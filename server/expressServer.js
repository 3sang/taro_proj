/**
 * 路由模块
 */

// 引入express框架(模块)
var express = require('express');

// 引入body-parser中间件，用来解析post提交的数据
var bodyparser = require('body-parser');
// 导入cookie
var cookieParser = require('cookie-parser');

// 导入数据库模块，利用解构赋值(ES6)的方式,此处写数据库的路径
var { db } = require('./mysql.js');

// 定义用body-parser中间解析数据的类型;
// false，解析String 和 Array类型; true，解析全部类型;建议专项专制，避免耗费性能
var bodyurlencoded = bodyparser.urlencoded({ extended: false });

// 连接数据库
db.connect();

// express框架为一个函数，所以需要调用
var app = express();

// 使用cookie中间件
app.use(cookieParser());

// 设置静态文件目录(可以更改),express 会在静态资源目录下查找文件
// 相对路径也可以app.use(express.static('/static'));
app.use(express.static(__dirname + '/static'));

// 导出模块
module.exports = {
    app
}