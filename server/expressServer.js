/**
 * 路由模块
 */

// 引入express框架(模块)
var express = require('express');

// 引入body-parser中间件，用来解析post提交的数据
var bodyParser = require('body-parser');
// 导入cookie
var cookieParser = require('cookie-parser');

// 导入数据库模块，利用解构赋值(ES6)的方式,此处写数据库的路径
var { db } = require('./mysql.js');

// 连接数据库
db.connect();

// express框架为一个函数，所以需要调用
var app = express();

// 使用cookie中间件
app.use(cookieParser());

app.all('*', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');  
    res.setHeader('Cache-Control', 'max-age=20000'); 
    // res.setHeader("Content-Type", "application/json;charset=utf-8"); 
    next();
});

// 设置静态文件目录(可以更改),express 会在静态资源目录下查找文件
// 相对路径也可以app.use(express.static('/static'));
app.use(express.static(__dirname + '/static'));

// 定义用body-parser中间解析数据的类型;
// false，解析String 和 Array类型; true，解析全部类型;建议专项专制，避免耗费性能
var bodyurlencoded = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());//使用bodyparser并配置其参数
app.use(bodyurlencoded);//使用bodyparser并配置其参数

// 导出模块
module.exports = {
    app
}

// 登陆
app.post('/login', function (req, res) {
    if (req.body.name === '') {
        res.send('用户名不能为空');
    } else if (req.body.password === '') {
        res.send('密码不能为空');
    } else {
        // 创建sql语句，用于查询数据库
        var sql = `select * from user where name=${req.body.name}`;
        // 查询数据库的方法
        db.query(sql, function (err, data) {
            if (err) {
                console.log(err)
            } else {
                if (data.length === 0) {
                    res.send({success:false,errMsg:'用户名不存在'})
                } else if (data[0].password !== req.body.password) {
                    res.send({success:false,errMsg:'账号或密码错误'})
                } else {
                    // 存储用户名至cookie
                    res.cookie('name', req.body.name);
                    res.send({success:true,errMsg:'',data:data[0]})
                }
            }
        });
    }
  });

// 获取赛事信息
app.get('/getCampaignPage', function (req, res) {
    var sql = `select * from campaign`;
    // 查询数据库的方法
    db.query(sql, function (err, data) {
        if (err) {
            res.send({success:false,errMsg:err,data:[]})
        } else {
            res.send({success:true,errMsg:'',data})
        }
    });
});