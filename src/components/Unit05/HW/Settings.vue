<template>
  <Page :active="active">
    <template #header>
      <b>Cài đặt hệ thống</b>
    </template>
    <template #main>
      <h1>Trang cài đặt hệ thống</h1>
    </template>
  </Page>
</template>

<script>
import Page from "./Page";
export default {
  name: "Settings",
  components: {
    Page
  },
  data() {
    return {
      active: '6'
    }
  }
}
</script>

<style scoped>
</style>