<template>
    <div>
        <CityHeader/>
        <CitySearch/>
        <CityList/>
        <CityAlphabet/>
    </div>
</template>

<script>
    import CityHeader from './../components/city/CityHeader'
    import CitySearch from './../components/city/CitySearch'
    import CityList from './../components/city/CityList'
    import CityAlphabet from './../components/city/CityAlphabet'
    export default {
        name:"City",
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        }
    }
</script>

<style lang="stylus" scoped>

</style>