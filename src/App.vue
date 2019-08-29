<!--
<template lang="pug">
  #app
    section(class="section")
      div(class="container")
        img(src="./assets/header.jpg")
        h1(class="title"): b {{msg}}
        form
          .field
            label(class="label") Nombre
            .control
              input(class="input is-complete" type="text" placeholder="Platzetiro") 
          .field
            label(class="label") Apellido
            .control
              input(class="input is-complete" type="text" placeholder="Platzetiro") 
          .field
            label(class="label") Cargo
            .control
              input(class="input is-complete" type="text" placeholder="Platzetiro")
          div(class="field is-grouped is-grouped-right")
            p(class="control")
              a(class="button is-primary is-large") Enviar 

</template>
-->

<template lang="pug">
  #app(class="container-fluid")
    b-row(cols="12")  
      Search(Peliculas)
    b-row
      b-col(cols="1") 
        Menu
      b-col(cols="11")
        Content(Peliculas)
    
    
</template>
<script>
import Menu from './components/menu'
import Search from './components/search'
import Content from './components/content'
export default {
  name: 'app',
  data () {
    return {
      Peliculas: [],
      msg: 'Registro estación Platzi'
    }
  },
  components:{
    Search,
    Menu,
    Content
  },
  watch: {
    Peliculas:function(){
      console.log(this.Peliculas);
    }
  }
}

</script>

<style lang="scss">
@import  './scss/main.scss';
$color-first: #a3ecf3;
$color-secondary: #00BFD6;
$color-third: #212121;
$color-fourth: #ff9300;

.title{
  color: $color-secondary;
}
.is-complete{
  border-color:white;
  border-bottom: 2px solid $color-fourth;
}
.label{
  color:$color-fourth;
}
.container{
  display:flex;
  flex-flow:column wrap;
  align-content:center;
}



</style>
