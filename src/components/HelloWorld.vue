<template>
  <div class="container">
    <div class="loginWrap">
      <div class="inputWrap">
        <div class="inputLabel">Tên đăng nhập</div>
        <input type="text">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Mật khẩu</div>
        <input type="password">
      </div>
      <button class="loginButton">Đăng nhập</button>
    </div>
    <div class="infoWrap">
      <div class="infoLabel">
        Xin chào
      </div>
      <div v-if="age <= 0 || age >= 100">
        Không phải tuổi
      </div>
      <div v-if="age < 16">
        Cấp 1
      </div>
      <div v-else-if="age < 18">
        Cấp 2
      </div>
      <div v-else-if="age < 22">
        Cấp 3
      </div>
  <div>
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.name }}
      </li>
    </ul>
  </div>
    </div>
  </div>
  <div>
    <div v-for="{product} in products" :key="product.id">
      {{product.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      age: 100,
      products: [
        {
          id: 1,
          name: 'iphone 12',
          price: 200000,
          in_stock: true,
        },
        {
          id: 2,
          name: 'iphone 13',
          price: 300000,
          in_stock: true,
        },
        {
          id: 3,
          name: 'iphone 11',
          price: 130000,
          in_stock: false,
        }
      ],
      items: [
        { name: 'Cà phê' },
        { name: 'Trà đặc' },
        { name: 'Bò húc' }
      ]
    }
  },
  computed: {
    inStockProduct: function (){
      return this.products
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  .loginWrap {
    background: #f5f5f5;
    border: 1px solid #6E6E6E;
    padding: 24px;
    height: 250px;
    width: 300px;

    .inputWrap {
      margin-bottom: 12px;

      .inputLabel {
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
      }

      input {
        width: 292px;
        height: 30px;
      }
    }

    button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      margin-top: 20px;
      background: #0080dd;
      color: #fff;
      border: unset;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
  }

  .infoWrap {
    background: #fff;
    border: 1px solid #6E6E6E;
    padding: 24px;
    height: 250px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 24px;

    .infoLabel {
      font-weight: bold;
      color: #00AAAA;
    }
  }
}
</style>
