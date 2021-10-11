<template>
  <Page :active="active">
    <template #header>
      <b>Sản phẩm</b>
    </template>
    <template #main>
      <h1>Trang Sản phẩm</h1>
    </template>
  </Page>
</template>

<script>
import Page from "./Page";
export default {
  name: "Product",
  components: {
    Page
  },
  data() {
    return {
      active: '5-1'
    }
  }
}
</script>

<style scoped>
</style>