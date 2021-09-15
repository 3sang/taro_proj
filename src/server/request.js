import Taro from '@tarojs/taro'

export default function request(options){
  let requestObj = {
    url: options.url,
    timeout: 10000,
    method: options.method || 'GET',
    data: options.data || {},
    header: options.header || {}
  };

  if (requestObj.method === 'GET') {
    requestObj.header["content-type"] = 'application/x-www-form-urlencoded'
  }

  // errMsg\data\statusCode
  return new Promise((resolve, reject) => {
    Taro.request(requestObj)
      .then((res) => {
        resolve(res)
      }).catch(err => {
      console.error(err)
    })
  })
};

// 分页数据结构
// {
//   page:1,
//   size:10,
//   total:23,
//   data:[]
// }