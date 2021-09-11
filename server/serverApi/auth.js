// 引入路由模块，此处写路由模块路径
var { app } = require('./expressServer');

// 登陆
app.post('/login', bodyurlencoded, function (req, res) {
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
                  res.send('用户名不存在');
              } else if (data[0].password !== req.body.password) {
                  res.send('账号或密码错误');
              } else {
                  // 存储用户名至cookie
                  res.cookie('name', req.body.name);
              }
          }
      });
  }
});