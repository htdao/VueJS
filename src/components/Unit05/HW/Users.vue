<template>
  <Page :active="active">
    <template #header>
      <b>Khách hàng</b>
    </template>
    <template #main>
      <h1>Trang khách hàng</h1>
    </template>
  </Page>
</template>

<script>
import Page from "./Page";
export default {
  name: "Users",
  components: {
    Page
  },
  data() {
    return {
      active: '5-3'
    }
  }
}
</script>

<style scoped>
</style>