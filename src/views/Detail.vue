<template>
    <div>
        <DetailBanner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :galleryImgs="galleryImgs"
        />
        <DetailHeader/>
        <div class="content">
            <DetailList :list="list"/>
        </div>
    </div>
</template>

<script>
    import DetailBanner from './../components/detail/DetailBanner'
    import DetailHeader from './../components/detail/DetailHeader'
    import DetailList from './../components/detail/DetailList'
    import axios from 'axios'
    export default {
        name:"Detail",
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data () {
            return {
                list: [],
                sightName: '',
                bannerImg: '',
                galleryImgs: [],
            }
        },
        methods:{
            getDetailInfo() {
                axios.get("/mock/detail.json",{
                    params: {
                        id: this.$route.params.id
                    }
                })
                .then(this.handleGetDataSucc)
            },
            handleGetDataSucc (res) {
                res = res.data
                if(res.ret && res.data) {
                    const data = res.data
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.galleryImgs = data.gallaryImgs
                    this.list = data.categoryList
                }
            }
        },
        mounted () {
            this.getDetailInfo()
        },
        activated () {
            this.getDetailInfo()
        }
    }
</script>

<style lang="stylus" scoped>
.content
    height 50rem
</style>