<template>
  <div class="container">
    <div class="loginWrap" :style="background">
      <div class="inputWrap">
        <div class="inputLabel">Nhập số</div>
        <input type="number" v-model="number">
      </div>

      <div class="inputWrap">
        <div class="inputLabel">Nhập b</div>
        <input type="text" v-model="b">
      </div>

      <button class="loginButton" @click="validate()">Đăng nhập</button>
    </div>
    <div class="infoWrap">
      <div class="infoLabel">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ex01',
  data() {
    return {
      phone: "123",
      b: 1,
      number: -1,
      background: "background: ",
      message: ""
    }
  },
  computed: {
    formatPhone: function () {
      var phone = this.phone;
      phone = phone.split(' ').join('')
      phone = phone.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>]/gi, '');
      if (phone.length > 10){
        phone = phone.substring(1, 10)
      }
      return phone
    }
  },
  watch: {
    number (value){
      if (value>=0 && value<=100){
        if(value<=10){
           this.background = "background: gray"
        }else if(value>10 && value<=30){
          this.background = "background: green"
        }else if(value>30 && value<=50){
          this.background = "background: blue"
        }else if(value>50 && value<=70){
          this.background = "background: purple"
        }else if(value>70 && value<=90){
          this.background = "background: orange"
        }else{
          this.background = "background: red"
        }
      }else {
        this.background = "background: white"
        this.message = "Chỉ nhập từ 0-100"
      }
    },
  },
  methods: {

  },
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
