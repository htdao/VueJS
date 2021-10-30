export default {
    namespaced: true,
    state: {
        // Khai báo state
        username: 'Hà Thị  Đào',
        age: 21,
        todos: [
                { id: 1, text: 'task 1', done: true },
                { id: 2, text: 'task 2', done: true },
                { id: 3, text: 'task 3', done: false }
            ],
        todoList:[]
    },
    getters: {
        // Khai báo getters
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
                },
        getTodoById: (state) => (id) => {
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
        updateTodo(state, value){
            state.todoList = value
        }
    },
}