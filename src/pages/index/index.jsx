import Taro,{getCurrentInstance} from '@tarojs/taro'
import { Component } from 'react'
import { View, Text,Image,Swiper,SwiperItem, ScrollView } from '@tarojs/components'
import {inject, observer} from "mobx-react";
import CampaignItem from './components/CampaignItem'
import styles from './index.module.less'
import swiper1 from '../../static/images/swiper/1.jpeg'
import swiper2 from '../../static/images/swiper/2.jpeg'
import swiper3 from '../../static/images/swiper/3.jpeg'
import swiper4 from '../../static/images/swiper/4.jpeg'

@inject('authStore','campaignStore')
@observer
export default class Index extends Component {

  state = {
    userdata:{},
    campainList:[],
    page:1,
    size:10,
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    this.getCampaignList()
   }

  componentDidHide () { }

  // 分页获取campaignList数据
  getCampaignList(){
    const {page,size,campainList} = this.state
    const {campaignStore} = this.props;
    campaignStore.getCampaignList({
      page,size
    }).then((res={})=>{
      const {errMsg='',success,data=[]} = res;
      if(success){
        this.setState({
          campainList: page === 1 ? data : [...campainList,...data]
        })
      }else{
        console.error(errMsg)
      }
    })
  }

  render () {
    const { campainList=[] } = this.state
    return (
      <View className={styles.index}>
        <Swiper
          className={styles.swiper}
          indicatorColor='#fff'
          indicatorActiveColor='#47b8e0'
          circular
          indicatorDots
          autoplay>
            <SwiperItem><Image src={swiper1} /></SwiperItem>
            <SwiperItem><Image src={swiper2} /></SwiperItem>
            <SwiperItem><Image src={swiper3} /></SwiperItem>
            <SwiperItem><Image src={swiper4} /></SwiperItem>
        </Swiper>
        <ScrollView className={styles.contain}>
          {
            campainList.map(item=><CampaignItem data={item} />)
          }
        </ScrollView>
      </View>
    )
  }
}