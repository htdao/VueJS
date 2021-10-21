<template>
  <div class="container">
    <div class="todoWrap">
      <div class="appTitle">Todo App</div>
      <input
          type="text"
          placeholder="Nhập công việc và bấm enter để thêm"
          v-model="title"
          @keyup="handleKeyup"
      >
      <div class="listWrap" v-if="tasks.length > 0">
        <TodoItem/>
      </div>
      <div v-else class="emptyWrap">
        Chưa có task nào được thêm
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import TodoItem from './TodoItem'
export default {
  name: 'Todo',
  components: {
    TodoItem
  },
  data () {
    return {
      title: ''
    }
  },

  methods: {
    ...mapMutations([
      'updateTask'
    ]),
    handleKeyup (e) {
      if (e.code === 'Enter') {
        this.updateTask(this.title)
        this.title=''
      }
    },
  },
  computed: {
    ...mapState([
      'tasks'
    ]),
  },
}
</script>

<style lang="scss" scoped>
$colorStroke: #d8e0ea;
$colorMain: #0080dd;
$colorDefault: #253036;
$colorGreen: #39cd74;
$colorRed: #f54b5e;
$colorTableHeader: #f2f6fe;
$colorWhite: #fff;
$colorOrange: #f2994a;

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $colorMain;
  height: 100vh;

  .todoWrap {
    width: 500px;
    height: 500px;
    background: $colorWhite;
    border-radius: 10px;
    padding: 24px;

    .appTitle {
      font-size: 24px;
      font-weight: bold;
      color: $colorGreen;
      text-align: center;
      margin-bottom: 20px;
    }

    input {
      width: 100%;
      height: 40px;
      border: 1px solid $colorStroke;
      border-radius: 5px;
      outline: unset;
      font-size: 14px;
      margin-bottom: 24px;

      &:hover,
      &:active,
      &:focus {
        border: 1px solid $colorMain;
      }
    }

    .listWrap {
      height: 350px;
      overflow-y: scroll;
      overflow-x: hidden;
    }

    .emptyWrap {
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $colorRed;
    }
  }
}
</style>