<template>
  <div class="container">
    <ProductForm/>
    <ProductList/>
  </div>
</template>

<script>
import ProductForm from './ProductForm'
import ProductList from './ProductList'
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Exercise',
  components: {
    ProductForm,
    ProductList
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      "product",

    ])
  },
  methods: {
    ...mapMutations([

    ]),
  },
}
</script>

<style lang="scss" scoped>
$colorDefault: #253036;

.container {
  height: 100vh;
  padding: 24px;
  color: $colorDefault;
  display: flex;
  align-items: flex-start;
}
</style>