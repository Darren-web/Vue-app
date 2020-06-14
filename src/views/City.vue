<template>
    <div>
        <CityHeader/>
        <CitySearch/>
        <CityList :cities="cities" :hotCities="hotCities"/>
        <CityAlphabet :cities="cities"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from './../components/city/CityHeader'
    import CitySearch from './../components/city/CitySearch'
    import CityList from './../components/city/CityList'
    import CityAlphabet from './../components/city/CityAlphabet'
    export default {
        name:"City",
        data() {
            return{
                cities:{},
                hotCities:[]
            }
        },
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        methods:{
            getCityInfo() {
                axios.get("/mock/city.json")
                .then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc(res) {
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>

<style lang="stylus" scoped>

</style>