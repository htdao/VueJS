<template>
  <el-row class="container">
    <el-col :span="6" class="nav">
      <h3>Danh mục sản phẩm</h3>
      <div class="grid-content bg-purple">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo border"
                @open="handleOpen"
                @close="handleClose">
              <el-submenu index="1" class="border-top">
                <template slot="title">
                  <span>Food Care</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">Bộ gia vị thực dưỡng</el-menu-item>
                  <el-menu-item index="1-2">Bột ngũ cốc</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">Hạt dinh dưỡng</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">Café  - Trà</template>
                  <el-menu-item index="1-4-1">Gạo sạch hữu cơ - xát tươi</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2" class="border-top">
                <span>Body Care</span>
              </el-menu-item>
              <el-menu-item index="3" class="border-top">
                <span>Home Care</span>
              </el-menu-item>
              <el-menu-item index="4" class="border-top">
                <span>Mind Care</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </el-col>

    <el-col :span="18" class="content">
      <div class="grid-content bg-purple-light">
        <el-row>
          <el-col :span="12">
            <p class="title-content">Trang chủ / Danh mục sản phẩm</p>
          </el-col>
          <el-col :span="12">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
          </el-col>
        </el-row>
        <el-row :gutter="12" class="products">
          <el-col :span="8" v-for="product in products" :key="product.name" class="product">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="product.image" class="image">
              <div style="padding: 10px">
                <h3>{{product.name}}</h3>
                <div class="bottom clearfix">
                  <time>{{product.price}}</time>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      products: [
        {
          name: "Lá vối 100g",
          image: "https://homefoodshop.vn/api/media-service/files/7d80865c-5724-4588-9bba-b1d758116662.jpg",
          price: 10000,
        },
        {
          name: "Sữa yến mạch Pink Lady 800gr",
          image: "https://homefoodshop.vn/api/media-service/files/40c2ad4e-3cc2-415e-968f-c5b4dea39bec.jpg",
          price: 765000,
        },
        {
          name: "Đậu lăng xanh hữu cơ Markal 500g",
          image: "https://homefoodshop.vn/api/media-service/files/b6b98a13-cc8a-4ba3-a3bc-51957af16822.jpg",
          price: 176000,
        },
        {
          name: "Rong biển nấu canh 100gr",
          image: "https://homefoodshop.vn/api/media-service/files/a86ce624-9b1c-48ec-8fc0-b582464a5b45.jpg",
          price: 100000,
        },
        {
          name: "Bơ đậu phộng nguyên chất mịn 240gr",
          image: "https://homefoodshop.vn/api/media-service/files/d6d0a5bf-03aa-4db3-9112-b8dee607250e.jpg",
          price: 10000,
        },
        {
          name: "Lá vối 100g",
          image: "https://homefoodshop.vn/api/media-service/files/7d80865c-5724-4588-9bba-b1d758116662.jpg",
          price: 10000,
        }
      ],
      product: {}
    };
  },

  methods: {
    name: "HomePage",
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  padding-top: 50px;

  .nav{
      .border{
        border-right: none;

        .border-top{

        }
      }
  }

  .content {
    .title-content {
      float: left;

    }

    .products {
      padding-right: 50px;

      .time {
        font-size: 13px;
        color: #999;
      }

      .bottom {
        margin-top: 13px;
        line-height: 12px;
      }

      .button {
        padding: 0;
        float: right;
      }

      .image {
        width: 100%;
        display: block;
      }

      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }

      .clearfix:after {
        clear: both
      }

      .product{
        padding-top: 20px;
      }
    }
  }
}

</style>