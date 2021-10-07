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
          <el-breadcrumb-item :to="{ path: '/' }">Lovepik</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">Sáng tạo</a></el-breadcrumb-item>
          <el-breadcrumb-item>Internet</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="blog-content">
        <h2><strong>Thủy Tiên, Trấn Thành và loạt sao Việt đồng loạt bị gọi tên vì điều này</strong></h2>
        <p>Đa số bình luận đều gửi gắm niềm tin bản Dự thảo sẽ làm thanh lọc được showbiz Việt thời gian qua vướng nhiều ồn ào.. Với phiên bản lần này được lột xác hoàn toàn về thiết kế cũng như chất âm xứng đáng là lựa chọn hàng đầu cho người dùng đang mong muốn tìm cho mình một chiếc tai nghe không dây cao cấp để đồng hành cùng mình trong công việc và giải trí.</p>
        <h3><strong>Theo đó, điều 9 của Dự thảo nêu rõ, nghệ sĩ cần phát huy tinh thần tự nguyện, tự giác tham gia các hoạt động xã hội, nêu cao tinh thần tương thân tương ái “thương người như thể thương thân”. Bên cạnh đó nghệ sĩ cần phát huy uy tín cá nhân để lan tỏa việc làm tốt đẹp đến cộng đồng. Nghệ sĩ nên tuân thủ quy tắc chung gìn giữ đạo đức, hình ảnh, uy tín của người hoạt động nghệ thuật. Khi tham gia các hoạt động xã hội cần công khai, minh bạch, kịp thời, giữ uy tín trách nhiệm, danh dự người hoạt động nghệ thuật, không lạm dụng danh hiệu, danh xưng, hình ảnh để tư lợi cá nhân.</strong></h3>
        <p><a href="https://cdn.24h.com.vn/upload/4-2021/images/2021-10-07/Thuy-Tien-Tran-Thanh-va-loat-sao-Viet-dong-loat-bi-reo-ten-vi-dieu-nay-tu-khoa-sao-ke-len-song-vtv-17334553-1633574863-249-width680height380.jpg"></a>Một trong những sự kiện được dân mạng quan tâm nhất thời điểm này chính là đoạn livestream sao kê từ thiện của vợ chồng Công Vinh - Thủy Tiên. Bên cạnh những vấn đề kiện cáo, minh bạch, tất cả những chuyện bên lề như sao kê 18.000 trang giấy A4 hết 90 triệu, túi ngọc trai của Thủy Tiên mua đâu và đôi dép đỏ hồng chưa rõ thương hiệu của Công Vinh cũng được netizen đem ra bàn tán xôn xao.</p>
        <p><img class="cpslazy loaded" alt="Thiết kế công thái học cho trải nghiệm đeo thoải mái và hoàn hảo" data-src="https://ttol.vietnamnetjsc.vn/images/2021/09/07/06/47/photo-1-16309250706331177265054.jpg" data-ll-status="loaded" src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/9/17/photo-1-16318841552461903825065.jpg"></p>
        <p>Thiết kế công thái học với kích thước nhỏ gọn, vừa vặn ôm khí đôi tai của người dùng. Giúp bạn trải nghiệm cảm giác thoải mái và dễ chịu cả ngày dài cùng giai điệu âm thanh mà Galaxy Buds Pro mang đến.</p>
        <h3><strong>Chỉ ít tiếng sau livestream sao kê 177 tỷ của Công Vinh - Thủy Tiên, anh chàng này đã lên sóng ngay tấm ảnh không thể nào tình cờ hơn.</strong></h3>
        <p>Samsung tích hợp cho tai nghe Bluetooth Samsung Galaxy Buds Pro công nghệ chống ồn chủ động ANC tiên tiến. Giúp lọc tạp âm hiệu quả để bạn có thể thưởng thức âm thanh, nhận thông báo tin nhắn và gọi thoại với chất lượng tốt nhất.</p>
        <p><img class="cpslazy loaded" alt="Chống ồn chủ động ANC, làm chủ âm thanh mà bạn mong muốn" data-src="https://ttol.vietnamnetjsc.vn/images/2021/09/07/06/47/photo-1-16309250706331177265054.jpg" data-ll-status="loaded" src="https://ttol.vietnamnetjsc.vn/images/2021/09/07/06/47/photo-1-16309250706331177265054.jpg"></p>
        <p>Người dùng có thể dễ dàng bật tắt tính năng chống ồn chủ động trên Galaxy Buds Pro nhanh chóng. Làm chủ âm thanh mà bạn mong muốn giờ đây dễ dàng hơn bao giờ hết.</p>
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
        'https://i.ytimg.com/vi/FT2yR6ZFAUk/maxresdefault.jpg',
        'https://i.ytimg.com/vi/X2fm--1DrJU/maxresdefault.jpg',
        'https://i.ytimg.com/vi/mCQ0HwsS1uE/maxresdefault.jpg'
      ],
      imageLeft: 'https://vcdn1-vnexpress.vnecdn.net/2021/10/06/chot-kiem-soat-tren-cau-duc-th-1320-9794-1633480704.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=pfvreSc5xo5f60ndubFCIw',
      imageRight: 'https://img.lovepik.com/photo/50055/7567.jpg_wh860.jpg'
    }
  },
  methods: {
  }
}
</script>

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