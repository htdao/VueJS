<template>
  <BaseLayout>
    <template v-slot:banner>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in images" :key="item">
          <el-image :src="item" class="image-carousel"></el-image>
        </el-carousel-item>
      </el-carousel>
    </template>

    <template v-slot:left-content>
      <el-image :src="imageLeft"></el-image>
    </template>

    <template v-slot:center-content>
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">Công nghệ</a></el-breadcrumb-item>
          <el-breadcrumb-item>Trên tay Galaxy Buds pro đẹp và nhiều công nghệ</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="blog-content">
        <h2><strong>Tai nghe Samsung Galaxy Buds Pro - Thiết kế tinh tế cùng chất âm đột phá</strong></h2>
        <p>Tai nghe True Wireless Samsung Galaxy Buds Pro là dòng sản phẩm tai nghe không dây thế hệ mới nhất từ Samsung. Với phiên bản lần này được lột xác hoàn toàn về thiết kế cũng như chất âm xứng đáng là lựa chọn hàng đầu cho người dùng đang mong muốn tìm cho mình một chiếc tai nghe không dây cao cấp để đồng hành cùng mình trong công việc và giải trí.</p>
        <h3><strong>Thiết kế công thái học cho trải nghiệm đeo thoải mái và hoàn hảo</strong></h3>
        <p><a href="https://cellphones.com.vn/thiet-bi-am-thanh/tai-nghe/tai-nghe-bluetooth.html">Tai nghe không dây bluetooth</a> Samsung Galaxy Buds Pro sở hữu một thiết kế bầu dục, khác với thiết kế bo tròn trên thế hệ tiền nhiệm. Được phủ thêm một lớp sơn bóng giúp làm nổi bật thiết kế của tai nghe thêm phần bắt mắt, nổi bật dưới mọi góc nhìn.</p>
        <p><img class="cpslazy loaded" alt="Thiết kế công thái học cho trải nghiệm đeo thoải mái và hoàn hảo" data-src="https://cdn.cellphones.com.vn/media/wysiwyg/accessories/earphone/galaxy-buds-pro-1.JPG" data-ll-status="loaded" src="https://cdn.cellphones.com.vn/media/wysiwyg/accessories/earphone/galaxy-buds-pro-1.JPG"></p>
        <p>Thiết kế công thái học với kích thước nhỏ gọn, vừa vặn ôm khí đôi tai của người dùng. Giúp bạn trải nghiệm cảm giác thoải mái và dễ chịu cả ngày dài cùng giai điệu âm thanh mà Galaxy Buds Pro mang đến.</p>
        <h3><strong>Chống ồn chủ động ANC, làm chủ âm thanh mà bạn mong muốn</strong></h3>
        <p>Samsung tích hợp cho tai nghe Bluetooth Samsung Galaxy Buds Pro công nghệ chống ồn chủ động ANC tiên tiến. Giúp lọc tạp âm hiệu quả để bạn có thể thưởng thức âm thanh, nhận thông báo tin nhắn và gọi thoại với chất lượng tốt nhất.</p>
        <p><img class="cpslazy loaded" alt="Chống ồn chủ động ANC, làm chủ âm thanh mà bạn mong muốn" data-src="https://cdn.cellphones.com.vn/media/wysiwyg/accessories/earphone/galaxy-buds-pro-2.JPG" data-ll-status="loaded" src="https://cdn.cellphones.com.vn/media/wysiwyg/accessories/earphone/galaxy-buds-pro-2.JPG"></p>
        <p>Người dùng có thể dễ dàng bật tắt tính năng chống ồn chủ động trên Galaxy Buds Pro nhanh chóng. Làm chủ âm thanh mà bạn mong muốn giờ đây dễ dàng hơn bao giờ hết.</p>
        <p>Ngoài ra, bạn có thể xem thêm: <a href="https://cellphones.com.vn/samsung-galaxy-buds-pro-2.html" target="_blank">Tai nghe Samsung Galaxy Buds Pro 2 chính hãng</a>, sắp được lên kệ trên toàn quốc.</p>
      </div>

    </template>

    <template v-slot:right-content>
      <el-image :src="imageRight"></el-image>
    </template>

  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  name: 'NewsDetailPage',
  components: {
    BaseLayout
  },
  data(){
    return {
      images: [
        'https://1.bp.blogspot.com/-cIoemC7s_LA/XRQr7DslqdI/AAAAAAAAB7Y/Y-KiVJXiU8IIM4ieQH2a2w45dETLG6lngCLcBGAs/s1600/tin-tuc-news-haingancamera.jpg',
        'https://gomlang.vn/wp-content/uploads/2019/08/TTSK.jpg',
        'https://qcvn.com.vn/wp-content/uploads/2018/11/Banner-tintuc.jpg'
      ],
      imageLeft: 'https://cdn.pixabay.com/photo/2021/04/29/07/36/lime-6215762_960_720.jpg',
      imageRight: 'https://cdn.pixabay.com/photo/2021/07/23/14/52/submarine-6487509_960_720.png'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-carousel__item {
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .image-carousel {
    width: 100%;
    height: 100%;
  }
}
// end banner

// start left content


// end left content


// start center content
.breadcrumb {
  margin-top: 10px;
  margin-left: 10px;
}
.blog-content {
  width: 97%;
  text-align: left;
  padding: 10px;
  .cpslazy{
    width: 100%;
  }
}
</style>