<template>
  <Page :active="active">
    <template #header>
      <b>Báo cáo thống kê</b>
    </template>
    <template #main>
      <h1>Trang báo cáo thống kê</h1>
    </template>
  </Page>
</template>

<script>
import Page from "./Page";
export default {
  name: "Statistic",
  components: {
    Page
  },
  data() {
    return {
      active: '4'
    }
  }
}
</script>

<style scoped>
</style>