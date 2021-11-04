<template>
  <div class="contain" @click="changeImage">
    <div class="image-input-wrapper img">
<!--      <i class="el-icon-close iconDelete"></i>-->
      <img
          class="el-upload-list__item-thumbnail avatar"
          v-if="avatarUrl"
          :src="avatarUrl"
      >
      <img
          class="el-upload-list__item-thumbnail avatar"
          v-else-if="avatar"
          :src="`http://vuecourse.zent.edu.vn/storage/${avatar}`"
      >
    </div>
    <div class="noImg" :hidden="hidden">
      <i class="el-icon-picture iconImg"></i>
      <input
          type="file"
          name="profile_avatar"
          accept="image/*"
          class="input"
          id="uploadImg"
          hidden
          @change="onChangeAvatar"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['avatar'],
  name: "UploadImage",
  data() {
    return {
      avatarUrl: null,
      hidden: false,
    }
  },
  created() {
    if (this.avatar && this.avatar.length>0){
      this.hidden=true
    }
  },
  watch:{
    avatarUrl(){
      if (this.avatarUrl && this.avatarUrl.length>0){
        this.hidden = true
        this.noIcon = false
      }
    },
  },
  methods: {
    changeImage(){
      document.getElementById('uploadImg').click()
    },
    onChangeAvatar(e) {
      if (e.target.files.length) {
        this.avatar = e.target.files[0];
        this.avatarUrl = URL.createObjectURL(e.target.files[0]);
      }
      let data = {
        avatar: this.avatar,
        avatarUrl: this.avatarUrl
      }
      this.$emit('onChangeAvatar', data);
    },
  }

}
</script>

<style scoped lang="scss">
.contain{
  width: 350px;
  height: 350px;
  border: 1px solid #e0e3e9;
  border-radius: 2px;

  .iconImg{
    margin-top: 170px;
    font-size: 20px;
    color: #e0e3e9;
  }

  .input{
    width: 100%;
    height: 100%;
  }

    .iconDelete{

    }
    .avatar{
      width: 100%;
      height: 100%;
    }
}
</style>