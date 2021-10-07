<template>
  <div class="container">
    <ProductForm class="productForm" @createProduct="create" :product=data @updateProduct="update">

    </ProductForm>
    <ProductList class="productList" :products=products @edit="edit"  @destroy="destroy">

    </ProductList>
  </div>
</template>

<script>
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
export default {
  name: "Exercise",
  components:{
    ProductForm,
    ProductList
  },
  data() {
    return{
      products: [
        {
          code: 'SP7163359260',
          name: 'Điện thoại iphone 13',
          price: '4000000',
          quantity: '12'
        },
        {
          code: 'SP7163359261',
          name: 'Điện thoại iphone 12',
          price: '4000000',
          quantity: '12'
        },
        {
          code: 'SP7163359262',
          name: 'Điện thoại iphone 11',
          price: '4000000',
          quantity: '12'
        },
        {
          code: 'SP7163359263',
          name: 'Điện thoại iphone 10',
          price: '4000000',
          quantity: '12'
        },
        {
          code: 'SP7163359264',
          name: 'Điện thoại iphone 9',
          price: '4000000',
          quantity: '12'
        },
        {
          code: 'SP7163359265',
          name: 'Điện thoại iphone 8',
          price: '4000000',
          quantity: '12'
        }
      ],
      data: '',
    }
  },
  methods: {
    create(value){
      let today = new Date();
      let code = '';
      code = 'SP'+today.getDate()+today.getTime();
      let data = {
          code: code,
          name: value.name,
          price: value.price,
          quantity: value.quantity
        }
      ;
      return this.products.push(data)
    },

    edit(product){
      return this.data = product;
    },

    update(product){
      console.log(product)
      for (let i=0; i<this.products.length; i++){
        if (this.products[i].code === product.code){
          return [
              this.products[i].quantity  = product.quantity,
              this.products[i].name = product.name,
              this.products[i].price = product.price,
          ]
        }
      }
      this.products.push([])
      this.products.pop()
    },

    destroy(product){
      for (let i=0; i<this.products.length; i++){
        if (this.products[i].code === product.code){
          return this.products.splice(i, 1)
        }
      }
      console.log(this.products)
    }
  },
}
</script>

<style scoped lang="scss">
.container{
  padding: 50px;
  display: flex;
  justify-content: left;

  .productForm{
    width: 40%;
  }

  .productList{
    width: 60%;
  }

}
</style>