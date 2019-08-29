<template lang="pug">
    <div>
        <b-navbar toggleable="lg"  >
            <b-navbar-brand href="#">
                img(src="../assets/movie.jpg")            
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-form>
                    <b-form-input  class="mr-sm-2" placeholder="Search" v-model="Buscar"></b-form-input>
                    <b-button  class="my-2 my-sm-0" type="button" @click="search" >Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                <template slot="button-content">
                    <em>Bambi Rodríguez</em>
                    <font-awesome-icon icon="user" size="2x" data-fa-transform="shrink-3.5 down-1.6 right-1.25" data-fa-mask="fas fa-circle" style="background:MistyRose" class="text-danger"/>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

import getMovies from '../services/index';

export default {
    name:'search',
    props:['Peliculas'],
    data(){
        return {
            Buscar :''
        }
    },
    methods:{
        search(){
            console.info("[+]" + this.Buscar)
            const self = this;
            getMovies(this.Buscar).then(function(data){
                self.Peliculas = data;
            })
            
        }
    }
}
</script>
<style scoped lang="scss">
    .search{
        line-height: 65px;
        text-align: center;
        height: 65px;
    }
</style>