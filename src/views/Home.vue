<template>
  <div class="home">
    <HomeHeader :city="city"/>
    <HomeSwiper :list="swiperList"/>
    <HomeIcons :list="iconList"/>
    <HomeRecommend :list="recommendList"/>
    <HomeWeekend :list="weekendList"/>
  </div>
</template>

<script>
import HomeHeader from './../components/home/HomeHeader'
import HomeSwiper from './../components/home/HomeSwiper'
import HomeIcons from './../components/home/HomeIcons'
import HomeRecommend from './../components/home/HomeRecommend'
import HomeWeekend from './../components/home/HomeWeekend'
import axios from 'axios'

export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return{
      city:"",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo() {
      axios.get("/mock/index.json")
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>
