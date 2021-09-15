import { observable } from 'mobx'

const authStore = observable({
  isLogin:false,
  userInfo:{},
  // 登陆
  login(){}
})

export default authStore