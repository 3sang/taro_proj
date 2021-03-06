import Taro,{getCurrentInstance} from '@tarojs/taro'
import { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import {inject, observer} from "mobx-react";
import {getWeekTime} from '../../../../utils/index'
import styles from './index.module.less'

@inject('authStore','campaignStore')
@observer
export default class Index extends Component {

  /** 查看活动详情 */
  onClick = () =>{
    const {data} = this.props;
    Taro.navigateTo({url:`/pages/campaign/index?campaignId=${data.id}`})
  }

  render () {
    const {data} = this.props;
    return (
      <View className={styles.container}>
        <View className={styles.header}>
          <View onClick={this.onClick}>{data.name}</View>
          <View>参与人数：{data.enterNumber}</View>
          <View>活动时间：{getWeekTime(data.beginTime)} 至 {getWeekTime(data.endTime)}</View>
        </View>
        <Image onClick={this.onClick} src={`http://localhost:8081/images/data/${data.cover}`} />
        <Text className={styles.desc}>{data.description}</Text>
      </View>
    )
  }
}