<template>
  <el-container>
    <el-aside>
      <el-row>
        <el-menu
            :default-active="active"
            class="el-menu-vertical"
            background-color="#001529" text-color="white"
            active-text-color="#ffd04b"
        >
          <el-menu-item index="1" @click="call('dashboard')">
            <i class="el-icon-menu"></i>
            <span>Tổng quan</span>
          </el-menu-item>
          <el-menu-item index="2" @click="call('product-page')">
            <i class="el-icon-s-shop"></i>
            <span>Quản lý sản phẩm</span>
          </el-menu-item>
          <el-menu-item index="3" @click="call('order-page')">
            <i class="el-icon-document"></i>
            <span>Quản lý hóa đơn</span>
          </el-menu-item>
          <el-menu-item index="4" @click="call('statistic')">
            <i class="el-icon-s-data"></i>
            <span>Báo cáo thống kê</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Quản lý chi nhánh</span>
            </template>
            <el-menu-item-group title="Hoạt động">
              <el-menu-item index="5-1" @click="call('product')">Sản phẩm</el-menu-item>
              <el-menu-item index="5-2" @click="call('order')">Đơn hàng</el-menu-item>
              <el-menu-item index="5-3" @click="call('users')">Khách hàng</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Báo cáo">
              <el-menu-item index="5-4" @click="call('revenue')">Doanh thu</el-menu-item>
              <el-menu-item index="5-5" @click="call('warehouse')">Tồn kho</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="6" @click="call('settings')">
            <i class="el-icon-s-tools"></i>
            <span>Cài đặt hệ thống</span>
          </el-menu-item>
        </el-menu>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>
        <div class="header">
          <slot name="header">Slot</slot>
        </div>
        <div class="infoHeader">
          <i class="el-icon-bell"></i>
          <el-badge :value="12" class="item">
          </el-badge>
        </div>
        <div class="dropHeader">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img :src="url" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">Thông tin tài khoản</el-dropdown-item>
              <el-dropdown-item command="b">Đổi mật khẩu</el-dropdown-item>
              <el-dropdown-item command="c">Cấu hình</el-dropdown-item>
              <el-dropdown-item><div @click="call('login')">Đăng xuất</div></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <slot name="main"></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Page",
  props: ['active'],
  data() {
    return {
      url: "https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg",
    }
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    call(value) {
      this.$router.push({
        path: `/${value}`
      })
    }
  }
}
</script>

<style scoped lang="scss">
.el-header {
  background-color: #f2f6fe;
  color: #333;
  text-align: left;
  line-height: 60px;
  display: flex;
  padding-right: 0;
  .header {
    width: 50%;
  }
  .infoHeader {
    width: 50%;
    text-align: right;
  }
  .dropHeader {
    margin: 0 20px 0 30px;
    text-align: center;
    .el-dropdown {
      height: 60px;
      span {
        img {
          width: 40px;
          border-radius: 50%;
          margin-top: 10px;
        }
      }
    }
  }
}
.el-aside {
  background-color: #001529;
  color: #333;
  text-align: left;
  line-height: 200px;
  height: 94vh;
}
.el-main {
  text-align: left;
}
.el-container {
  height: 94vh;
}
</style>