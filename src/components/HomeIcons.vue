<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-imgcontent" src="https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'HomeIcons'
    }
</script>

<style scoped lang="stylus">
    @import '~styles/varibles.styl';
    .icons
        width 100%
        overflow hidden 
        height 0
        padding-bottom 50%
        .icon
            position relative
            float left
            overflow hidden 
            width 25%
            height 0
            padding-bottom 25%
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                .icon-imgcontent
                    display block
                    margin 0 auto
                    height 100%
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor

</style>