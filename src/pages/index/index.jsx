import { Component } from 'react'
import { View, Text,Image,Swiper,SwiperItem } from '@tarojs/components'
import styles from './index.module.less'
import swiper1 from '../../static/images/swiper/1.jpeg'
import swiper2 from '../../static/images/swiper/2.jpeg'
import swiper3 from '../../static/images/swiper/3.jpeg'
import swiper4 from '../../static/images/swiper/4.jpeg'

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
        <Swiper
          className={styles.swiper}
          indicatorColor='#999'
          indicatorActiveColor='#333'
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