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
    campainList:[{
      name:'aaa',
      beginTime:'1631696400000',
      endTime:'1632380400000',
      enterNumber:200,
      description:'dssdad',
      fee:'12',
      cover:swiper1
    }],
    page:1,
    size:10,
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


  // 分页获取campaignList数据
  getCampaignList(params){
    const {page,size,campainList} = this.state
    const {campaignStore} = this.props;
    campaignStore.getCampaignList({
      page,size
    }).then(res=>{
      const {data=[{
        name:'aaa',
        beginTime:'1631696400000',
        endTime:'1632380400000',
        enterNumber:200,
        description:'dssdad',
        fee:'12',
        cover:swiper1
      }]} = res
      this.setState({
        campainList: page === 1 ? data.data : [...campainList,...data.data]
      })
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
        <ScrollView>
          {
            campainList.map(item=><CampaignItem data={item} />)
          }
        </ScrollView>
      </View>
    )
  }
}