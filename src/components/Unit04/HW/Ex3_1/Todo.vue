<template>
  <div class="container">
    <div class="wrap">
      <h1>Todo App</h1>
      <input type="text" placeholder="Nhập công việc và nhấn enter để thêm"
             v-model="input" @keypress.enter="addItem()">
      <TodoItem :todoItem="todoList"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TodoItem from './TodoItem'
import { mapState, mapMutations } from 'vuex'
export default {
  name: "Todo",
  components: {
    TodoItem
  },
  data() {
    return {
      input: '',
      data: '',
    }
  },
  mounted() {
    this.getTodo()
  },
  computed:{
    ...mapState('home', [
      'todoList'
    ]),
  },
  methods: {
    ...mapMutations('home', [
      // Mutation muốn gọi đến
        "updateTodo"
    ]),
    getTodo(){
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/todos',
      }).then((response) => {
        this.updateTodo(response.data.data.data)
      }).catch((error) => {
        console.log(error);
      })
    },
    addItem() {
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/todos',
        data: {
          title: this.input
        }
      }).then(() => {
        this.getTodo()
        this.input = ''
      }).catch((error) => {
        // handle error
        console.log(error);
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
    margin: 0;
    padding: 0;
  background-color: #0080dd;
  display: flex;
  align-items: center;

  .wrap {
    width: 40%;
    height: 600px;
    margin: 5% auto;
    background-color: white;
    border-radius: 10px;
    padding: 30px;

    h1 {
      color: #39cd74;
      margin-bottom: 20px;
    }
    input {
      -webkit-appearance: none;
      background-color: #FFF;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #DCDFE6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      outline: 0;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
      margin-bottom: 30px;
      font-size: 13px;
    }
  }
}
</style>