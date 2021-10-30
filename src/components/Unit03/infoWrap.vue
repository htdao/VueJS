<template>
  <div class="infoWrap">
    <div class="infoLabel">
      <p>{{username}}</p>

      <h3>Task by id</h3>
      <p>{{getTodoById(1).text}}</p>

      <h3>List task done</h3>
      <ul>
        <li v-for="task in doneTodos" :key="task.id">
          {{task.text}}
        </li>
      </ul>

      <h3>Total task done: {{doneTodoCount}}</h3>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: "infoWrap",
  mounted() {
    axios({
      method: 'get',
      url: 'http://vuecourse.zent.edu.vn/api/todos',
    }).then((response) => {
      this.todoList = response.data.data.data
      console.log(response.data.data.data);
    }).catch((error) => {
      // handle error
      console.log(error);
    });
  },
  computed: {
    ...mapState('home', [
      // State muốn gọi đến
        'username',
        'age',
        'todoList'
    ]),
    ...mapGetters('home', [
      // Getter muốn gọi đến
      'doneTodos',
      'getTodoById',
      'doneTodoCount'
    ])
  },
  methods: {
    ...mapMutations('home', [
      // Mutation muốn gọi đến
    ]),
  }
}
</script>

<style scoped lang="scss">
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
</style>