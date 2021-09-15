import { observable } from 'mobx';
import request from '../server/request'

const campaignStore = observable({
  campainList:[],// 首页展示的所有campaign数据

  // 分页获取campaignList数据
  getCampaignList(params){
    return request({
      url:'',
      data:params
    }).then(res=>{
      const {statusCode,data={},errMsg} = res
      if(statusCode === 200){
        if(data.page === 1) {
          this.campainList = [];
        }
        this.campainList = [...this.campainList,...data.data]
      }else{
        console.error(errMsg)
      }
    }).catch(err=>{
      console.error('catch err : ',err)
    })
  }
})

export default campaignStore