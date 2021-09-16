import Taro,{getCurrentInstance} from '@tarojs/taro'
import { Component } from 'react'
import { View, Text,Image,Swiper,SwiperItem } from '@tarojs/components'
import {inject, observer} from "mobx-react";
import styles from './index.module.less'
import swiper1 from '../../static/images/swiper/1.jpeg'
import swiper2 from '../../static/images/swiper/2.jpeg'
import swiper3 from '../../static/images/swiper/3.jpeg'
import swiper4 from '../../static/images/swiper/4.jpeg'

@inject('authStore','campaignStore')
@observer
export default class Index extends Component {

  state = {
    userdata:{}
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    console.log(getCurrentInstance())
    const query = Taro.createSelectorQuery()
    console.log(query.select('.'+styles.swiper).boundingClientRect())
    console.log(query.selectViewport().scrollOffset())
   }

  componentDidHide () { }

  render () {
    return (
      <View className={styles.index}>
        <Swiper
          className={styles.swiper}
          indicatorColor='#999'
          indicatorActiveColor='#47b8e0'
          circular
          indicatorDots
          autoplay>
            <SwiperItem><Image src={swiper1} /></SwiperItem>
            <SwiperItem><Image src={swiper2} /></SwiperItem>
            <SwiperItem><Image src={swiper3} /></SwiperItem>
            <SwiperItem><Image src={swiper4} /></SwiperItem>
        </Swiper>
      </View>
    )
  }
}