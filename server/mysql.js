/**
 * 数据库模块
 */

 const mysql = require('mysql')

 // 创建mysql连接
 const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Dxy666666',
   port: '3306',
   database: 'wx_campaign'
 })
 
 exports.db = connection;
 
 // connection.connect();
 // const sql = "select * from user"; // 执行查询语句
 
 // connection.query(sql, (err, result) => {
 //   if (err) {
 //     console.log(err);
 //     return
 //   }
 //   console.log(JSON.parse(JSON.stringify(result)))
 //   connection.destroy(); // 释放资源
 // })