import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import styles from 'addCampaign.module.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className={styles.index}>
        <Text>新增活动</Text>
      </View>
    )
  }
}
