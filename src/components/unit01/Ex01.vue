<template>
  <div class="container">
    <div class="inputWrap">
      <div class="titleWrap">
        <h3>Nhập tiêu đề</h3>
        <input v-model="title">
      </div>
      <div class="contentWrap">
        <h3>Nhập nội dung</h3>
        <textarea v-model="content"></textarea>
      </div>
    </div>
    <div class="infoWrap">
      <h3 class="titleWrap">{{title}}</h3>
      <div class="contentWrap" v-html="content">
        {{content}}
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Ex01',
    data(){
      return{
        title : 'Zent Coding School',
        content: 'Happy class'
      }
    },
    methods: {

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  text-align: left;

  .inputWrap{
    width: 25%;
    height: 100%;
    border: 1px solid black;
    border-radius: 15px;
    margin-right: 5%;
    padding: 20px;

    .titleWrap{
      input{
        border: 2px solid darkgray;
        width: 100%;
        height: 50px;
      }
    }

    .contentWrap{
      textarea{
        border: 2px solid darkgray;
        width: 100%;
        height: 150px;
      }
    }
  }

  .infoWrap{
    width: 40%;
    height: 100%;
    border: 1px dashed black;
    border-radius: 15px;
    padding: 20px;

    .titleWrap{
      width: 100%;
      height: 5%;
    }

    .contentWrap{
      width: 100%;
      height: 95%;
    }
  }
}
</style>
