<template>
  <div class="productForm">
    <h3>Sản phẩm</h3>
    <div class="inputWrap">
      <div class="inputLabel">Tên sản phẩm<span>(*)</span></div>
      <input type="text" v-model="name.value" placeholder="Nhập tên sản phẩm" :style="name.border" v-if="product===''" @keyup="errName">
      <input type="text" v-model="data.name" placeholder="Nhập tên sản phẩm" :style="name.border" v-else>
      <span class="error">{{name.message}}</span>
    </div>
    <div class="inputWrap">
      <div class="inputLabel">Đơn giá<span>(*)</span></div>
      <input type="text" v-model="price.value" placeholder="Nhập đơn giá sản phẩm" :style="price.border" v-if="product===''" @keyup="errPrice">
      <input type="text" v-model="data.price" placeholder="Nhập tên sản phẩm" :style="price.border" v-else>

      <span class="error">{{price.message}}</span>
    </div>
    <div class="inputWrap">
      <div class="inputLabel">Số lượng<span>(*)</span></div>
      <input type="text" v-model="quantity.value" placeholder="Nhập số lượng sản phẩm" :style="quantity.border" v-if="product===''" @keyup="errQuantity">
      <input type="text" v-model="data.quantity" placeholder="Nhập tên sản phẩm" :style="quantity.border" v-else>
      <span class="error">{{quantity.message}}</span>
    </div>
    <div class="btn">
      <button v-if="product===''" class="createButton" @click="validate">Tạo mới</button>
      <button v-else class="createButton" @click="update()">Cập nhật</button>
      <button class="cancelButton" @click="cancel()">Huỷ</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      name: {
        value: '',
        message: '',
        border: 'border: ',
        statusMes: false,
      },
      price: {
        value: '',
        message: '',
        border: 'border: ',
        statusMes: false,
      },
      quantity: {
        value: '',
        message: '',
        border: 'border: ',
        statusMes: false,
      },
      data: {
        name: '',
        price: '',
        quantity: ''
      },
    }
  },
  methods: {
    validate(){
      if (this.name.value==='' || this.price.value==='' || this.quantity.value==='') {
        if (this.name.value === '') {
          this.name.message = 'Tên sản phẩm không được để trống'
          this.name.border = 'border-color: red'
        }
        // else {
        //   this.name.message = ''
        //   this.name.border = 'border-color: #f2f4f8'
        // }
        if (this.price.value === '') {
          this.price.message = 'Giá sản phẩm không được để trống'
          this.price.border = 'border-color: red'
        }
        // else {
        //   this.price.message = ''
        //   this.price.border = 'border-color: #f2f4f8'
        // }
        if (this.quantity.value === '') {
          this.quantity.message = 'Số lượng sản phẩm không được để trống'
          this.quantity.border = 'border-color: red'
        }
        // else {
        //   this.quantity.message = ''
        //   this.price.border = 'border-color: #f2f4f8'
        // }
        return [
          this.name.message,
          this.name.border,

          this.price.message,
          this.price.border,

          this.quantity.border,
          this.quantity.message,
        ]
      }else {
        let data = [];
        data['name'] = this.name.value;
        data['price'] = this.price.value;
        data['quantity'] = this.quantity.value;
        this.$emit('createProduct', data)
        return [
          this.name.value = '',
          this.price.value = '',
          this.quantity.value = ''
        ]
      }
    },
    cancel(){
      return[
          this.product = '',
          this.name.value = '',
          this.price.value = '',
          this.quantity.value = ''
      ]
    },
    update(){
      console.log(this.data)
      let data = [];
      data['name'] = this.data.name;
      data['price'] = this.data.price;
      data['quantity'] = this.data.quantity;
      this.$emit('updateProduct', data)
      return [
       this.data = '',
      ]
    },
    errName(){
      if (this.name.value !== ''){
        this.name.border = 'border-color: #f2f4f8'
        this.name.message =''
      }
    },
    errPrice(){
      if (this.price.value !== ''){
        this.price.border = 'border-color: #f2f4f8'
        this.price.message =''
      }
    },
    errQuantity(){
      if (this.quantity.value !== ''){
        this.quantity.border = 'border-color: #f2f4f8'
        this.quantity.message =''
      }
    },
    // changeName(){
    //   console.log(this.)
    // }
  },
  watch: {
    name (value) {
      if (value.value.length > 0) {
        this.name.message = '';
        this.name.border = 'border-color: #f2f4f8';
      }
    },
    price (value) {
      if (value.value.length > 0) {
        this.name.message = '';
        this.name.border = 'border-color: #f2f4f8';
      }
    },
    quantity (value) {
      if (value.value.length > 0) {
        this.name.message = '';
        this.name.border = 'border-color: #f2f4f8';
      }
    },
    product(value){
      this.data = value;
    },

    // data(value){
    //   this.data = value
    // }
  }
}
</script>
<style scoped lang="scss">
  .productForm{
    border: 2px solid #f2f4f8;
    padding: 20px;
    margin-right: 30px;

    h3{
      color: #0080dd;
    }

    .inputWrap{
      padding: 10px;

      .error{
        color: red;
      }

      .inputLabel{
        font-weight: bold;

        span{
          color: red;
        }
      }

      input{
        width: 100%;
        height: 30px;
        border: 2px solid #f2f4f8;
        border-radius: 5px;
      }
    }

    .btn{
      float: right;

      button{
        height: 30px;
        width: 80px;
        margin: 5px;
        font-weight: bold;
        border: none;
        border-radius: 5px;
      }
      button:hover{
        opacity: 0.5;
        cursor: pointer;
      }

      .createButton{
        color: white;
        background-color: #0080dd;
      }

      .cancelButton{
        background-color: #d8e0ea;
      }

    }
  }
</style>