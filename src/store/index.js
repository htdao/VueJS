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

        //Unit07 - Ex7.1
        products: [
            {
                id: 1,
                name: 'iPhone 12 Pro Max Chính Hãng',
                image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
                price: 32990000,
                quantity: 566,
            },
            {
                id: 2,
                name: 'iPhone 12 Chính Hãng (VN/A)',
                image: '',
                price: 21790000,
                quantity: 123,
            },
            {
                id: 3,
                name: 'iPhone 11 Chính hãng',
                image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
                price: 16690000,
                quantity: 0,
            },
            {
                id: 4,
                name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
                price: 12190000,
                quantity: 1023,
            },
            {
                id: 5,
                name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                image: '',
                price: 26500000,
                quantity: 6,
            }
        ],
        cartProducts: [],
        total: 0
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
        },

        //Unit07 - Ex 7.1
        addToCart (state, value) {
            if (value.quantity === 0) {
                alert('Sản phẩm hết hàng')
                return false
            }
            let inCartProducts = state.cartProducts.filter((cartProduct) => {return cartProduct.id === value.id})
            if (inCartProducts.length > 0) {
                let indexInCart = state.cartProducts.findIndex((cartProduct) => {return cartProduct.id === value.id})
                if (indexInCart !== -1) {
                    state.cartProducts[indexInCart].quantity = parseInt(state.cartProducts[indexInCart].quantity) + 1
                    state.total += value.price
                }
            } else {
                state.cartProducts.push({...value, quantity: 1})
                state.total += value.price
            }
        },

        removeFromCart (state, value) {
            state.cartProducts.forEach(function (val, index){
                if (value.id === val.id){
                    state.cartProducts.splice(index, 1)
                    state.total -= value.price*val.quantity
                }
            })
        },

    }
})

export default store