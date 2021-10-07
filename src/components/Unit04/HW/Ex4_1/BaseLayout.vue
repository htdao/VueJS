<template>
  <el-container>
    <el-aside>
      <el-row class="tac">
        <el-menu
            default-active="2"
            class="el-menu-vertical"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span>Tổng quan</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-box"></i>
            <span>Quản lý sản phẩm</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span>Quản lý hóa đơn</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-s-data"></i>
            <span>Báo cáo thống kê</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Quản lý chi nhánh</span>
            </template>
            <el-menu-item-group title="Hoạt động">
              <el-menu-item index="5-1">Sản phẩm</el-menu-item>
              <el-menu-item index="5-2">Đơn hàng</el-menu-item>
              <el-menu-item index="5-3">Khách hàng</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Báo cáo">
              <el-menu-item index="5-4">Doanh thu</el-menu-item>
              <el-menu-item index="5-5">Tồn kho</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="6">
            <i class="el-icon-s-tools"></i>
            <span>Cài đặt hệ thống</span>
          </el-menu-item>
        </el-menu>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="21">
            <slot name="title-header"></slot>
          </el-col>
          <el-col :span="3">
            <el-menu :default-active="active"
                     class="el-menu-navbar"
                     mode="horizontal"
                     background-color= "#E9EEF3"
                     text-color="black"
                     active-text-color="black">
              <el-menu-item index="1">
                <el-badge :value="12" class="item">
                  <i class="el-icon-bell"></i>
                </el-badge>
              </el-menu-item>

              <el-menu-item index="2">
                <el-dropdown>
                  <span class="el-dropdown-link">
                  <div class="block"><el-avatar :src="avatar" :size="size" ></el-avatar></div>

                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
                    <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
                    <el-dropdown-item>Cấu hình</el-dropdown-item>
                    <el-dropdown-item divided>Đăng xuất</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>

      </el-header>
      <el-main>
        <slot name="main-content"></slot>
      </el-main>
      <el-footer>&copy; Phan Dương Thùy</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'baselayout',
  data(){
    return {
      active: '',
      size: 'medium',
      avatar: "https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/125988800_1074119919701221_4925611912916530605_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vfPUdepHeJUAX9f4Hvt&_nc_ht=scontent.fhph1-2.fna&oh=7134b90b2c8642f21439abcda665f70c&oe=618383B0",
    }
  },
}
</script>

<style scoped lang="scss">
.el-header{
  background-color: #E9EEF3;
  text-align: left;
  line-height: 30px;
}
.el-footer {
  background-color: #E9EEF3;
  text-align: left;
  line-height: 60px;
}

.el-aside {
  width: 230px;
  background-color: #545c64;
  color: #333;
  text-align: left;
  height: 1000px;
}

.el-main {
  color: #333;
  text-align: center;
}

body > .el-container {

  margin-bottom: 40px;
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-menu-vertical{

.el-submenu {
  text-align: left;
}
}
.el-header {
.el-row {
  padding-top: 5px;
.el-col {
.el-menu,.el-menu--horizontal {
.el-menu--horizontal>.el-menu-item {
}
.el-dropdown {
.el-dropdown-menu {
  font-size: 14px;
}
}
}
}

}
}
}
</style>