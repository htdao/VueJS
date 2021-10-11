import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  },

  {
    path: '/users/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
      },
      {
        path: 'post',
        name: 'post',
        component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue'),
      }
    ]
  },

    //Ex01 - Unit05
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Unit05/HW/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Unit05/HW/Dashboard.vue'),
  },
  {
    path: '/product-page',
    name: 'ProductPage',
    component: () => import('../components/Unit05/HW/ProductPage.vue'),
  },
  {
    path: '/order-page',
    name: 'OrderPage',
    component: () => import('../components/Unit05/HW/OrderPage.vue'),
  },
  {
    path: '/statistic',
    name: 'Statistic',
    component: () => import('../components/Unit05/HW/Statistics.vue'),
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../components/Unit05/HW/Products.vue'),
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../components/Unit05/HW/Orders.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../components/Unit05/HW/Users.vue'),
  },
  {
    path: '/Revenue',
    name: 'Revenue',
    component: () => import('../components/Unit05/HW/Revenue.vue'),
  },
  {
    path: '/warehouse',
    name: 'Warehouse',
    component: () => import('../components/Unit05/HW/Warehouse.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../components/Unit05/HW/Settings.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
