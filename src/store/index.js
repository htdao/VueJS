import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // Khai báo global state
        username: 'Hà Thị Đào',
        age: 21,
        todos: [
            { id: 1, text: 'task 1', done: true },
            { id: 2, text: 'task 2', done: true },
            { id: 3, text: 'task 3', done: false }
        ],
        tasks: [],
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        getTaskById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        },
        doneTodoCount: (state,getters) => {
            return getters.doneTodos.length
        }
    },
    mutations: {
        // Khai báo mutations
        updateUsername(state, value){
            state.username = value
        },
        updateTask(state, value){
            state.tasks.push({
              id: new Date().getTime(),
              title: value,
              isComplete: false,
            })
        },
        updateStatus(state, value){
            if (state.tasks[value].isComplete === true){
                state.tasks[value].isComplete = false
            }
            if (state.tasks[value].isComplete === false){
                state.tasks[value].isComplete = true
            }
        },
        deleteTask(state, value){
            console.log(state.tasks[value])
            state.tasks =  state.tasks.filter(task => task !== state.tasks[value])
        }
    }
})

export default store