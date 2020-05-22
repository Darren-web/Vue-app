<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:'HomeSwiper',
        data () {
            return{
                swiperOption:{
                    pagination: '.swiper-pagination',
                    loop:true
                },
                swiperList:[
                    {
                        id:'0001',
                        imgUrl:"https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg"
                    },
                    {
                        id:'0002',
                        imgUrl:"https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang='stylus'>
    .wrapper >>>.swiper-pagination-bullet-active
        background #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 31.25%
        background #cccccc
        .swiper-img
            width 100%
</style>