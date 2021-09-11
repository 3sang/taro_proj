// 引入路由模块，此处写路由模块路径
var { app } = require('./expressServer');

// 获取赛事信息
app.post('/getCampaignPage', bodyurlencoded, function (req, res) {
      var sql = `select * from campaign`;
      // 查询数据库的方法
      db.query(sql, function (err, data) {
          if (err) {
              console.log(err)
          } else {
              res.send({data})
          }
      });
});