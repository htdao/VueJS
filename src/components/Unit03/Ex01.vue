<template>
  <div class="container">
    <inputWrap @onLogin="login"/>
    <infoWrap :password="password"/>
  </div>
</template>

<script>
import inputWrap from './inputWrap.vue'
import infoWrap from './infoWrap.vue'
export default {
  name: 'Ex01',
  data(){
    return{
      password: ''
    }
  },
  components: {
    inputWrap,
    infoWrap,
  },
  methods: {
    login(value){
      console.log(value)
      if (value === '' || value.length<6){
        this.password = 'Lỗi'
      }else {
        this.password = value
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
}
</style>
