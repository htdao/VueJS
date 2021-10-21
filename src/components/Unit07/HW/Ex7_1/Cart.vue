<template>
  <div class="cartWrap">
    <div class="title">Giỏ hàng</div>
    <div class="cartEmpty" v-if="cartProducts.length === 0">
      Không có sản phẩm nào được thêm vào giỏ
    </div>
    <div class="cartProductWrap" v-for="(product, index) in cartProducts" :key="product.id">
      <div class="cartProductNameWrap">
        <img v-if="product.image" :src="product.image" alt="">
        <img v-else src="http://thanhphatme.com/wp-content/uploads/2016/05/thumbnail-default.jpg" alt="">
        <div>
          <strong>{{formatProductName(product.name)}}</strong>
          <div>{{formatPrice(product.price)}}</div>
        </div>
      </div>
      <div class="actions">
        <input
            class="quantityChangeInput"
            type="number"
            v-model="cartProducts[index].quantity"
        >
        <button class="removeFromCartButton" @click="removeProduct(product)">Xoá</button>
      </div>
    </div>
    <div class="cartTotal">
      Tổng tiền: {{total}}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: "Cart",
  data(){
    return{

    }
  },
  computed: {
    ...mapState([
      "products",
      "cartProducts",
      "total",
    ])
  },
  methods: {
    ...mapMutations([
        "removeFromCart"
    ]),
    formatPrice (price) {
      return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' đ'
    },
    formatProductName (name = '') {
      if (name && name.length > 25) {
        name = `${name.substring(0, 25)}...`
      }
      return name
    },
    removeProduct (value) {
      this.removeFromCart(value)
    },
  }
}
</script>

<style scoped lang="scss">
$colorStroke: #d8e0ea;
$colorMain: #0080dd;
$colorDefault: #253036;
$colorGreen: #39cd74;
$colorRed: #f54b5e;
$colorTableHeader: #f2f6fe;
$colorWhite: #fff;
.cartWrap {
  border: 1px solid $colorStroke;
  width: 500px;
  height: 500px;
  margin-left: 20px;
  padding: 24px;
  position: relative;

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.cartEmpty {
  text-align: center;
  margin-top: 100px;
}

.cartProductWrap {
  height: 60px;
  border-bottom: 1px solid $colorStroke;
  display: flex;
  align-items: center;
  justify-content: space-between;

.cartProductNameWrap {
  display: flex;
  align-items: center;

img {
  margin-right: 8px;
  width: 40px;
  height: 40px;
}
}

.actions {
  display: flex;
  align-items: center;

.quantityChangeInput {
  width: 80px;
  height: 30px;
  margin-right: 12px;
  border: 1px solid $colorStroke;
}

.removeFromCartButton {
  width: 60px;
  height: 30px;
  background: $colorRed;
  border: unset;
  border-radius: 5px;
  color: $colorWhite;
  cursor: pointer;
}
}
}

.cartTotal {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 24px;
  color: $colorRed;
  font-size: 20px;
  font-weight: bold;
}
}
</style>