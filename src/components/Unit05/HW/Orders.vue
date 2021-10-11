<template>
  <Page :active="active">
    <template #header>
      <b>Đơn hàng</b>
    </template>
    <template #main>
      <h1>Trang đơn hàng</h1>
    </template>
  </Page>
</template>

<script>
import Page from "./Page";
export default {
  name: "Order",
  components: {
    Page
  },
  data() {
    return {
      active: '5-2'
    }
  }
}
</script>

<style scoped>
</style>