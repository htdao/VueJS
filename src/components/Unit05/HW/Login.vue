<template>
  <div class="container">
    <div class="wrap">
      <div class="box-1" v-if="flag">
        <img :src="url">
        <div class="login-form">
          <div class="box-input">
            <input type="text" placeholder="Email" v-model="email" :class="{ error_format: message }">
            <div class="error-message" v-if="message">
              <i class="el-icon-warning"></i>
              {{ messageErr }}
            </div>
          </div>
          <div class="box-input">
            <input type="password" placeholder="Mật khẩu" v-model="password" :class="{ error_format: errorPassword }">
            <div class="error-message" v-if="errorPassword">
              <i class="el-icon-warning"></i>
              {{ errorPasswordMessage }}
            </div>
          </div>

          <div class="forget">
            <button @click="function () {flag = false}">Quên mật khẩu?</button>
            <div></div>
          </div>

          <button class="btn-login" @click="validate(0)">ĐĂNG NHẬP</button>
        </div>
      </div>

      <div class="box-1" v-else>
        <div class="title">LẤY LẠI MẬT KHẨU</div>
        <div class="note">
          Bạn vui lòng nhập email đăng nhập vào ô bên dưới để nhận email hướng dẫn lấy lại mật khẩu.
        </div>
        <div class="login-form">
          <div class="box-input">
            <input placeholder="Email" v-model="email" :class="{ error_format: message }">
            <div class="error-message" v-if="message">
              <i class="el-icon-warning"></i>
              {{ messageErr }}
            </div>
          </div>
          <button class="btn-login" @click="validate(1)">GỬI EMAIL</button>
        </div>
        <div class="return-form">
          <button @click="function () {flag = true}">
            <i class="el-icon-back"></i>
            Trở về trang đăng nhập
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      url: 'http://fms.flixgo.jp/static/media/logo-login.2d516aef.png',
      email: '',
      password: '',
      flag: true,
      message: false,
      errorPassword: false,
      messageErr: '',
      errorPasswordMessage: ''
    }
  },
  methods: {
    validateEmail: function (email) {
      let data = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return data.test(email);
    },
    sendMail() {
      this.flag = true
      this.$message({
        message: 'Gửi email thành công.',
        type: 'success'
      });
    },
    validate(flag) {
      let bool = true;
      (flag === 1) ? this.password = 1234567 : ''
      if (this.email === '') {
        this.message = true
        this.messageErr = 'Email không được để trống'
        bool = false
      } else {
        if (!this.validateEmail(this.email)) {
          this.message = true
          this.messageErr = 'Email sai định dạng, vui lòng nhập lại'
          bool = false
        }
      }
      if (this.password === '') {
        this.errorPassword = true
        this.errorPasswordMessage = 'Mật khẩu không được để trống'
        bool = false
      } else {
        if (this.password.length < 7) {
          this.errorPassword = true
          this.errorPasswordMessage = 'Mật khẩu phải lớn hơn 6 ký tự'
          bool = false
        }
      }
      if (bool) {
        (flag === 0) ? this.$router.push({ path: '/dashboard' }) : this.sendMail()
        this.email = this.password = ''
      }
    },
  },
  watch: {
    email(value) {
      if (value !== '') {
        this.message = false
      }
    },
    password(value) {
      if (value !== '') {
        this.errorPassword = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  background-image: linear-gradient(160deg,#0093e9,#80d0c7);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrap {
    width: 100%;
    max-width: 398px;
    background-color: white;
    border-radius: 10px;
    padding: 24px;

    .box-1 {
      img {
        width: 200px;
        margin-bottom: 24px;
      }
      .login-form {
        .box-input {
          input {
            width: 94%;
            border-radius: 4px;
            font-size: 14px;
            color: #253036;
            border: 1px solid #d8e0ea;
            outline: unset;
            padding: 18px 12px;
          }
          input:hover, input:focus {
            border-color: #0080dd;
          }
          .error-message {
            margin-top: 8px;
            color: red;
            font-size: 12px;
            text-align: left;

            i {
              margin-right: 4px;
            }
          }
          .error_format {
            border: 1px solid red;
          }
        }
        .box-input:first-child {
          margin-bottom: 24px;
        }

        .forget {
          button {
            margin: 8px 0 24px 0;
            padding: 6px 8px;
            float: right;
            background-color: white;
            border: none;
            cursor: pointer;
            color: #0080dd;
            font-size: 14px;
          }
          button:hover {
            background-color: #f5f5f5;
            border-radius: 4px;
          }
          div {
            clear: both;
          }
        }
        .btn-login {
          width: 100%;
          color: #fff;
          font-size: 14px;
          height: 50px;
          line-height: 18px;
          background-color: #0080dd;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }
      }
      .title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 40px;
      }
      .note {
        text-align: left;
        font-size: 14px;
        margin-bottom: 8px;
        line-height: 20px;
      }
      .return-form {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 8px;
        padding-top: 24px;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          font-size: 14px;
          color: #0080dd;
          border: none;
          background-color: white;
          cursor: pointer;

          i {
            font-size: 20px;
            font-weight: bold;
          }
        }
        button:hover {
          background-color: #f5f5f5;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>