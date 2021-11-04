<template>
  <div class="contain" @click="changeImage">
    <div class="image-input-wrapper">
      <img
          class="el-upload-list__item-thumbnail avatar"
          v-if="avatarUrl"
          :src="avatarUrl"
      >
      <img
          class="el-upload-list__item-thumbnail avatar"
          v-else
          :src="`http://vuecourse.zent.edu.vn/storage/${avatar}`"
      >
    </div>
    <i class="el-icon-picture iconImg"></i>
    <input
        type="file"
        name="profile_avatar"
        accept="image/*"
        class="input"
        id="uploadImg"
        hidden
    />
    <input v-model="avatar" type="hidden" name="profile_avatar_remove" />
  </div>
</template>

<script>
export default {
  name: "UploadImage",
  data() {
    return {
      avatarUrl: null,
      avatar: null
    }
  },
  methods: {
    changeImage(){
      document.getElementById('uploadImg').click()
    }
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
}
</style>