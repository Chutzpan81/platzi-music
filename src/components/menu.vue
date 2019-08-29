<template lang="pug">
    div
        b-nav(vertical class="w-15")
            b-nav-item(class="btn btn-app") 
                <font-awesome-icon icon="home" size="3x" /> Home
            b-nav-item(class="btn btn-app") 
                <font-awesome-icon icon="fire" size="3x" /> Trending  
            b-nav-item(class="btn btn-app") 
                <font-awesome-icon icon="heart" size="3x" /> Mas Likes  
            b-nav-item(class="btn btn-app bottom") 
                <font-awesome-icon icon="cog" size="3x" /> Ajustes 
</template>

<script>
export default {
    name:'menu'
}
</script>
<style scoped lang="scss">
.flex-column{
  width: 110px;
  height: 100vh;
  background-image: linear-gradient(#FF535B,#fd746c);
}

.btn-app{
  border-radius: 3px;
  position: relative;
  min-width: 80px;
  max-width: 100px;
  height: 60px;
  text-align: center;
  font-size: 12px;
}
.btn-app > a{
  color: #ffffff !important;
  font-family: 'Lato' 
}

.bottom{
  position: absolute;
  bottom: 50px;
}
</style>