<template>
  <div class="home">
    <HomeHeader/>
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
import { mapState } from 'vuex'

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
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
      lastCity:''
    }
  },
  methods: {
    getHomeInfo() {
      axios.get("/mock/index.json?city=" + this.city)
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  computed: {
    ...mapState(["city"])
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
