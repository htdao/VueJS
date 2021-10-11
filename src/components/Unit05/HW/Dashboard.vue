<template>
  <Page :active="active">
    <template #header>
      <b>Tổng quan</b>
    </template>
    <template #main>
      <h1>Trang tổng quan</h1>
    </template>
  </Page>
</template>

<script>
import Page from "./Page";
export default {
  name: "Dashboard",
  components: {
    Page
  },
  data() {
    return {
      active: '1'
    }
  }
}
</script>

<style scoped>
</style>