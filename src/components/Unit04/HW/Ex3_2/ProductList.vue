<template>
  <div class="productList">
    <table class="table">
      <tr class="title">
        <th>Mã sản phẩm</th>
        <th>Tên sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
        <th>Trạng thái</th>
        <th>Hành động</th>
      </tr>
      <tr class="data" v-for="product in data" :key="product.code">
        <td>{{product.code}}</td>
        <td>{{product.name}}</td>
        <td>{{product.price | toVND }}</td>
        <td>{{product.quantity}}</td>
        <td v-if="product.quantity > 0" class="statusStock">Còn hàng</td>
        <td v-else class="statusOutStock">Hết hàng</td>
        <td>
          <button class="btn btnEdit" @click="edit(product)">Sửa</button>
          <button class="btn btnDel" @click="destroy(product)">Xoá</button>
        </td>
      </tr>
      <tr>
        <td class="mesNoData" colspan="6" v-if="products.length===0">Không có dữ liệu</td>
      </tr>
    </table>
    <div class="pagination">
      <span>Hiển thị {{a}} - {{b}} trên tổng {{c}} (trang {{d}})</span>
      <div class="btnPag">
        <el-button class="prev" icon="el-icon-arrow-left" @click="prev" :disabled="prevDisabled"></el-button>
        <el-button class="prev" icon="el-icon-arrow-right" @click="next" :disabled="nextDisabled"></el-button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['products'],
  name: "ProductList",
  data() {
    return {
      data: [],
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      page: 0,
      prevDisabled: false,
      nextDisabled: false,
    }
  },
  methods: {
    edit (product){
      this.$emit('edit', product);
    },

    destroy(product){
      this.$emit('destroy', product);
      this.data = this.products.slice(this.a-1, this.b);
    },

    prev(){
      this.a-=5;
      this.d-=1;
      if (this.b === this.products.length){
        let count = this.b%5;
        console.log(count)
        this.b-=count;
      }else {
        this.b-=5;
      }
    },

    next(){
      this.a+=5;
      if (this.b+5 > this.products.length){
        let count = this.products.length - this.b;
        this.b+=count;
      }else {
        this.b+=5;
      }
      this.d+=1;
    }
  },

  filters: {
    toVND (value) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    },
  },

  created() {
    this.data = this.products.slice(0, 5);
    let countProduct = this.products.length;
    this.d = 1;
    if (countProduct>0){
      this.a = 1;
      if (countProduct <=5){
        this.b = countProduct;
        this.c = countProduct;
      }else {
        this.b = 5;
        this.c = countProduct;
      }
    }
  },


  watch: {
    a (value) {
      if (value===1) {
        this.prevDisabled = true
      }else {
        this.prevDisabled = false
      }
      this.data = this.products.slice(this.a-1, this.b);
    },

     b (value) {
      if (value===this.products.length) {
        this.nextDisabled = true
      }else {
        this.nextDisabled = false
      }
    },

    c(value){
      if (value===this.b) {
        this.nextDisabled = true
      }else {
        this.nextDisabled = false
      }
    },

    products(){
      this.c = this.products.length;
    }
  }
}
</script>

<style scoped lang="scss">
  .productList{
    .table{
      border: 1px solid #f2f4f8;
      width: 100%;

      .title{
        background-color: #f2f6fe;
        height: 40px;
      }

      .data{
        td{
          padding: 5px 10px;
        }
      }

      .btn{
        height: 30px;
        width: 50px;
        text-align: center;
        margin: 5px;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        color: white;
      }

      .btnEdit{
        background-color: orange;
      }
      .btnDel{
        background-color: red;
      }

      .mesNoData{
        text-align: center;
        padding: 10px;
      }

      .statusOutStock{
        color: red;
      }

      .statusStock{
        color: blue;
      }
    }

    .pagination{
      margin-top: 20px;

      .btnPag{
        float: right;

        .prev{
          padding: 5px;
        }
      }
    }

  }
</style>