import { getCurrentInstance } from '@tarojs/taro'
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.less'

export default class Index extends Component {

  state = {
    id:'',
  }

  componentWillMount () {
    const instance = getCurrentInstance();
    this.setState({
      id:instance.router.params.campaignId
    })
   }

  getCampaignData = (id)=>{

  }

  render () {
    return (
      <View className={styles.index}>
        <Text>活动详情</Text>
      </View>
    )
  }
}
