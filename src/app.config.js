export default {
  pages: [
    'pages/index/index',
    'pages/order/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color:'#8a8a8a',
    selectedColor:'#1296db',
    list:[{
      pagePath:'pages/index/index',
      text:'首页',
      iconPath:'./static/images/icon/home.png',
      selectedIconPath:'./static/images/icon/home_ac.png'
    },{
      pagePath:'pages/order/index',
      text:'订单',
      iconPath:'./static/images/icon/layout.png',
      selectedIconPath:'./static/images/icon/layout_ac.png'
    },{
      pagePath:'pages/user/index',
      text:'我的',
      iconPath:'./static/images/icon/user.png',
      selectedIconPath:'./static/images/icon/user_ac.png'
    }]
  }
}
