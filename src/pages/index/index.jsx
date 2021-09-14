import { Component } from 'react'
import { View, Text,Swiper,SwiperItem } from '@tarojs/components'
import styles from './index.module.less'

export default class Index extends Component {

  state = {
    userdata:{}
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className={styles.index}>
        <Text>首页</Text>
      </View>
    )
  }
}
