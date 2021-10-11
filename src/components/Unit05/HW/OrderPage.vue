<template>
  <Page :active="active">
    <template #header>
      <b>Quản lý hóa đơn</b>
    </template>
    <template #main>
      <h1>Trang quản lý hóa đơn</h1>
    </template>
  </Page>
</template>

<script>
import Page from "./Page";
export default {
  name: "OrderPage",
  components: {
    Page
  },
  data() {
    return {
      active: '3'
    }
  }
}
</script>

<style scoped>
</style>