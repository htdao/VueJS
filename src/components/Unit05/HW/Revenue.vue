<template>
  <Page :active="active">
    <template #header>
      <b>Doanh thu</b>
    </template>
    <template #main>
      <h1>Trang doanh thu</h1>
    </template>
  </Page>
</template>

<script>
import Page from "./Page";
export default {
  name: "Revenue",
  components: {
    Page
  },
  data() {
    return {
      active: '5-4'
    }
  }
}
</script>

<style scoped>
</style>