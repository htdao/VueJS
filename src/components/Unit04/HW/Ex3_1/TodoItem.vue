<template>
  <div class="todo-container">
    <div class="todo-item" v-for="(value) in todoList" :key="value.id">
      <div class="todo-info">
        <input type="checkbox" @click="handleTick(value)" :checked="value.is_complete">
        <span :class="{ del: value.is_complete }">{{ value.title }}</span>
      </div>
      <button @click="handleDeleteItem(value.id)" v-if="value.is_complete">Xóa</button>
    </div>
    <div class="todo-null" v-if="todoList.length === 0">
      Chưa có task nào được thêm
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from "axios";
export default {
  name: "TodoItem",
  data() {
    return {
      listWork: [],
      title: ''
    }
  },
  computed:{
    ...mapState('home', [
      // State muốn gọi đến
        "todoList"
    ]),
  },
  methods: {
    ...mapMutations('home', [
      // Mutation muốn gọi đến
        "updateTodo"
    ]),
    handleDeleteItem(index) {
      axios({
        method: 'delete',
        url: 'http://vuecourse.zent.edu.vn/api/todos/'+index,
      }).then(() => {
        // handle success
        this.getTodo()
      }).catch((error) => {
        // handle error
        console.log(error);
      })
    },
    handleTick(value){
      axios({
        method: 'put',
        url: 'http://vuecourse.zent.edu.vn/api/todos/'+value.id,
        data:{
          is_complete: value.is_complete
        }
      }).then(() => {
        this.getTodo()
      })
    },
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
  },
  watch: {
    todoItem (value) {
      this.listWork.push(value)
    }
  }
}
</script>

<style scoped lang="scss">
.todo-container {
  height: 75%;
  overflow: auto;

  .todo-item {
    border-bottom: 1px solid #DCDFE6;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .todo-info {
      input {
        margin: 30px 10px 30px 0;
        cursor: pointer;
      }
      .del {
        text-decoration: line-through;
      }
    }
    button {
      float: right;
      background-color: red;
      border: none;
      padding: 10px;
      border-radius: 5px;
      color: white;
      cursor: pointer;
    }
  }

  .todo-null {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
  }
}
</style>