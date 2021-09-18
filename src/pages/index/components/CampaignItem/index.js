import Taro,{getCurrentInstance} from '@tarojs/taro'
import { Component } from 'react'
import { View, Text,Image,Swiper,SwiperItem } from '@tarojs/components'
import {inject, observer} from "mobx-react";
import {getWeekTime} from '../../../../utils/index'
import styles from './index.module.less'

@inject('authStore','campaignStore')
@observer
export default class Index extends Component {

  state = {
    data:{}
  }


  componentDidMount () { 
    const {data} = this.props;
    this.setState({
      data
    })
  }

  render () {
    const {data} = this.state;
    return (
      <View className={styles.container}>
        <View className={styles.header}>
          <View>{data.name}</View>
          <View>参与人数：{data.enterNumber}&nbsp;&nbsp;&nbsp;{getWeekTime(data.beginTime)} - {getWeekTime(data.endTime)}</View>
        </View>
        <Image src={data.cover} />
        <Text>{data.description}</Text>
      </View>
    )
  }
}