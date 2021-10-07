<template>
<BaseLayout>
  <template #header>
    <h1>Here might be a page title 2</h1>
  </template>

  <template #default>
    <p>A paragraph for the main content. 2</p>
    <p>And another one.</p>
  </template>

  <template #footer>
    <p>Here's some contact info 2</p>
  </template>
</BaseLayout>
</template>


<script>
import BaseLayout from './BaseLayout.vue'
export default {
  name: "Page1",
  components: {
    BaseLayout
  }
}
</script>

<style scoped>

</style>