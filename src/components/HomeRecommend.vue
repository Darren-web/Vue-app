<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl" alt="" class="item-img"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"HomeRecommend",
        data() {
            return{
                recommendList: [
                {
                    id:'0001',
                    imgUrl:"https://img1.qunarzz.com/sight/p0/1805/35/35d8ce88ca9b2488a3.water.jpg_256x160_1218274a.jpg",
                    title:"秦皇岛老龙头",
                    desc:"秦皇岛老龙头景点"
                },
                {
                    id:'0002',
                    imgUrl:"https://img1.qunarzz.com/sight/p0/1805/35/35d8ce88ca9b2488a3.water.jpg_256x160_1218274a.jpg",
                    title:"秦皇岛老龙头",
                    desc:"秦皇岛老龙头景点"
                },
                {
                    id:'0003',
                    imgUrl:"https://img1.qunarzz.com/sight/p0/1805/35/35d8ce88ca9b2488a3.water.jpg_256x160_1218274a.jpg",
                    title:"秦皇岛老龙头",
                    desc:"秦皇岛老龙头景点"
                },
                {
                    id:'0004',
                    imgUrl:"https://img1.qunarzz.com/sight/p0/1805/35/35d8ce88ca9b2488a3.water.jpg_256x160_1218274a.jpg",
                    title:"秦皇岛老龙头",
                    desc:"秦皇岛老龙头景点"
                },
            ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~styles/mixins.styl";
    .title
        margin-top .3rem
        line-height .8rem
        background #eeeeee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                ellipsis()
                line-height .54rem
                font-size .32rem
            .item-desc
                ellipsis()
                line-height .4rem
                color #ccc
            .item-button
                line-height .44rem
                margin-top .16rem
                background #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff
</style>