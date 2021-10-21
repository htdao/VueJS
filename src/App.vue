<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link> |-->
<!--      <router-link :to="`/users/${userId}`">User</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
    <ListProduct/>
  </div>
</template>
<script>
import ListProduct from "./components/Unit07/HW/Ex7_1/ListProduct.vue";
export default {
  data() {
    return {
      userId: 5
    }
  },

  components:{
    ListProduct
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
