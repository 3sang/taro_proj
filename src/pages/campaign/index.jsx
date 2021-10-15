import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className={styles.index}>
        <Text>活动详情</Text>
      </View>
    )
  }
}
