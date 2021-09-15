import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import { Provider } from '@tarojs/mobx'
import { Component } from 'react'
import store from './store'
import './app.less'

class App extends Component {

  componentDidMount () {
    // Taro.login({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
  }

  // 项目启动显示的时候触发
  componentDidShow () {}

  // 项目切换后台时触发
  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
