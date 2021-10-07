<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
  data(){
    return{
      header: 'slotHeader',
      footer: 'slotFooter',
      name: 'Hà Thị Đào'
    }
  },
}
</script>

<style scoped>

</style>