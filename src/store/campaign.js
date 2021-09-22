import { observable } from 'mobx';
import request from '../server/request'

const campaignStore = observable({
  // 分页获取campaignList数据
  getCampaignList(params,callback){
    return request({
      url:'http://localhost:8081/getCampaignPage',
      data:params
    }).then(res=>{
      const {statusCode,data={},errMsg} = res
      if(statusCode === 200){
        return data
      }else{
        console.error(errMsg)
      }
    }).catch(err=>{
      console.error('catch err : ',err)
    })
  }
})

export default campaignStore