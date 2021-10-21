<template>
  <div>
    <div class="wrap" v-for="(task, index) in tasks"
         :key="task.id">
      <div>
        <input type="checkbox" @click="changeStatus(index)">
        <span class="title" >{{task.title}}</span>
      </div>
      <button class="deleteButton" @click="deleteTask(index)" v-if="task.isComplete===true">
        Xóa
      </button>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'TodoItem',
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations([
      'updateStatus',
      'deleteTask'
    ]),
    changeStatus(value){
      this.updateStatus(value);
    },
    deleteTask(value){
      this.deleteTask(value);
      alert('a')
    }
  },
  computed: {
    ...mapState([
      'tasks'
    ]),
  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
$colorStroke: #d8e0ea;
$colorDefault: #253036;
$colorRed: #f54b5e;
$colorWhite: #fff;

.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 12px;
  border-bottom: 1px solid $colorStroke;

  .title {
    margin-left: 12px;
    color: $colorDefault;

    &.complete {
      text-decoration: line-through;
    }
  }

  .deleteButton {
    background: $colorRed;
    border: unset;
    font-size: 14px;
    font-weight: bold;
    color: $colorWhite;
    width: 60px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 8px;
  }
}
</style>