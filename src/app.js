import { Component } from 'react'
import './app.less'

class App extends Component {

  componentDidMount () {}

  // 项目启动显示的时候触发
  componentDidShow () {}

  // 项目切换后台时触发
  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
