<template>
    <div>
        <DetailBanner/>
        <DetailHeader/>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from './../components/detail/DetailBanner'
    import DetailHeader from './../components/detail/DetailHeader'
    export default {
        name:"Detail",
        components: {
            DetailBanner,
            DetailHeader
        }
    }
</script>

<style lang="stylus" scoped>
.content
    height 50rem
</style>