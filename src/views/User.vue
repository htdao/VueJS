<template>
  <div class="about">
    <h1>This is an user page</h1>
    <button @click="toProfilePage">Profile</button>
    <button @click="toPostPage">Post</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "User",
  methods:{
    toProfilePage(){
      this.$router.push({ name: 'profile', params: { name: 'Đào' }})
    },
    toPostPage(){
      this.$router.push({ name: 'post', params: { name: 'Đào' }})
    }
  },
}
</script>

<style scoped>

</style>