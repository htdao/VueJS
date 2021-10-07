<template>
  <div class="container">
    <div class="product">
      <table>
        <tr class="headTable">
          <th>STT</th>
          <th>Sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
        <tr v-for="(item,index) in items" :key="index">
          <td>{{index+1}}</td>
          <td class="productName">
            <img :src="item.image" alt="">
            <a href="#">{{item.name}}</a>
          </td>
          <td>{{ new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
          }).format(item.price) }}</td>
          <td>{{item.quantity}}</td>
          <td>
            <span v-if="item.isAvailable" style="color: #96e2c2">Còn hàng</span>
            <span v-else style="color: #f74c4c">Hết hàng</span>
          </td>
          <td>
            <button @click="addProduct(item)">Thêm vào giỏ</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="cart">
      <h4>Giỏ hàng</h4>
      <div class="addProduct">
        <table>
          <tr v-for="(list,index) in listCart" :key="index">
            <td>
              <img :src="list.image" alt="">
            </td>
            <td>
              <p><b>{{list.name}}</b></p>
              <p>{{ new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'VND',
                minimumFractionDigits: 0
              }).format(list.price)}}</p>
            </td>
            <td>
              <input type="number" @change="changeCart(index)" v-model="list.soluong">
            </td>
            <td>
              <button @click="deleteProduct(index)">Xóa</button>
            </td>
          </tr>
        </table>
      </div>
      <div class="total">
        <b>Tổng tiền : {{ new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'VND',
          minimumFractionDigits: 0
        }).format(total) }}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lession02",
  data(){
    return{
      total:0,
      listCart:[],
      items:[
        {
          id:1,
          name: 'iPhone 12 Pro Max Chính Hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
          price: 32990000,
          quantity: 566,
          isAvailable: true
        },
        {
          id:2,
          name: 'iPhone 12 Chính Hãng (VN/A)',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwXfjwuJIi7teNG13soue7Rgc0qofzaMMJcLczgssD2AXBbtjmvavqDriZ0Rk6xQ7k1s&usqp=CAU',
          price: 21790000,
          quantity: 123,
          isAvailable: true
        },
        {
          id:3,
          name: 'iPhone 11 Chính hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
          price: 16690000,
          quantity: 0,
          isAvailable: false
        },
        {
          id:4,
          name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
          price: 12190000,
          quantity: 1023,
          isAvailable: true
        },
        {
          id:5,
          name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwXfjwuJIi7teNG13soue7Rgc0qofzaMMJcLczgssD2AXBbtjmvavqDriZ0Rk6xQ7k1s&usqp=CAU',
          price: 26500000,
          quantity: 45,
          isAvailable: true
        }
      ]
    }
  },
  methods:{
    addProduct(data){
      let list = this.listCart;
      let flag = true
      if (data.quantity > 0){
        if (list.length > 0){
          for (let i = 0 ; i < list.length ; i++){
            if (data.id === list[i].id){
              list[i].soluong = parseInt(list[i].soluong)+1
              list.push([])
              let last = this.listCart.length - 1;
              this.listCart.splice(last, 1);
              flag = true
              break
            }else {
              flag = false
            }
          }
          if (!flag){
            data.soluong = 1;
            list.push(data)
          }
        }else {
          data.soluong = 1;
          list.push(data)
        }
      }else{
        alert("Sản phẩm hết hàng")
      }
      let total = this.listCart;
      this.total = 0;
      for (let i = 0 ; i < total.length;i++){
        this.total += total[i].soluong*total[i].price
      }
    },
    deleteProduct(id){
      this.listCart.splice(id, 1);
    },
    changeCart(id){
      let data = this.listCart;
      if(data[id].soluong <= 0){
        this.listCart.splice(id, 1);
      }
      this.total = 0;
      for (let i = 0 ; i < data.length;i++){
        this.total += data[i].soluong*data[i].price
      }
    }
  },
}
</script>

<style  scoped lang="scss">
.container {
  display: flex;
  .product{
    height: 270px;
    border: 1px solid #0000000d;
    table{
      border-collapse: collapse;
      .headTable{
        background-color: #f2f6fe;
      }
      tr{
        .productName{
          text-align: left;
          display: flex;
          align-items: center;
          a{
            text-decoration: none;
            padding-left: 8px;
            color: #56a3e7;
          }
        }
        td{
          height: 36px;
          padding:5px 15px;
          border-left: 1px solid #0000000d;

          img{
            width: 30px;
          }

          button{
            background-color: #0080dd;
            color: white;
            border: none;
            padding: 6px;
            border-radius: 3px;
          }
          button:hover{
            background-color: #3db6e3;
            cursor: pointer;
          }
        }
        th{
          padding: 10px 5px;
          border: 1px solid #0000000d;
        }
      }
    }
  }
  .cart{
    background: #0000000d;
    border: 1px solid #0000000d;
    width: 590px;
    text-align: left;
    margin-left: 20px;
    h4{
      padding-left: 4px;
      margin-left: 8px;
    }
    .addProduct{
      height: 400px;
      table{
        padding-left: 5px;
        width: 100%;
        tr{
          td{
            border-bottom: 1px dotted gray;
            padding: 10px 0px;
            p{
              margin: 0px;
            }
            img{
              width: 30px;
            }
            button{
              background-color: red;
              color: white;
              border: none;
              padding: 6px;
              border-radius: 3px;
            }
            button:hover{
              background-color: #b42e56;
              cursor: pointer;
            }
          }
        }
      }
    }
    .total{
      text-align: right;
      margin: 15px;
      b{
        color: red;
      }
    }
  }
}
</style>