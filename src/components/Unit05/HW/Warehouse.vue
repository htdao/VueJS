<template>
  <Page :active="active">
    <template #header>
      <b>Tồn kho</b>
    </template>
    <template #main>
      <h1>Trang tồn kho</h1>
    </template>
  </Page>
</template>

<script>
import Page from "./Page";
export default {
  name: "Warehouse",
  components: {
    Page
  },
  data() {
    return {
      active: '5-5'
    }
  }
}
</script>

<style scoped>
</style>