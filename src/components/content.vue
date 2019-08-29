<template lang="pug">
    ul
        Movie(v-for="m in Peliculas" v-bind:m="m")
</template>


<script>
import Movie from './movie'
export default {
    name:'content',
    props:['Peliculas'],
    data () {
        return {
            
        }
    },
    components:{
        Movie
    }
}
</script>
<style scoped lang="scss">

</style>