<template>
    <div class="container">
      <div class="loginWrap">
        <div class="inputWrap">
          <div class="inputLabel">Tên đăng nhập</div>
          <input type="text" v-model="username.value">
          <p class="error" :disabled="username.statusMes" >{{username.message}}</p>
        </div>

        <div class="inputWrap">
          <div class="inputLabel">Mật khẩu</div>
          <input type="password" v-model="password.value">
          <p class="error" :disabled="password.statusMes">{{password.message}}</p>
        </div>

        <button class="loginButton" @click="validate()">Đăng nhập</button>
      </div>
      <div class="infoWrap">
        <div class="infoLabel">
          Xin chào
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Ex01',
  data() {
    return {
      username: {
        value: '',
        message: '',
        statusMes: false,
      },
      password: {
        value: '',
        message: '',
        statusMes: false,
      },
    }
  },
  methods: {
    validate(){
      if (this.username.value === '') {
          this.username.message = 'Tên đăng nhập không được để trống'
      }else {
        this.username.message = ''
      }
      if(this.password.value === '') {
          this.password.message = 'Mật khẩu không được để trống'
      }else if(this.password.value.length < 6){
          this.password.message = 'Mật khẩu phải có độ dài ít nhất 6 kí tự'
      } else {
        this.password.message = ''
      }
      return [
          this.username.message,
          this.password.message,
      ]
    }
  },
  watch: {
    username (value) {
      if (value.message.length === 0) {
        this.username.statusMes = false
      }else {
        this.username.statusMes = true
      }
    },
    password (value){
      if (value.message.length === 0) {
        this.password.statusMes = false
      }else {
        this.password.statusMes = true
      }
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

    .error{
      color: red;
      text-align: left;
      margin: 5px 0;
    }
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
