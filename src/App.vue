<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <Ex01/>-->
<!--    <Ex02/>-->
<!--    <Page1/>-->
<!--    <Page2/>-->
<!--    <Exercise/>-->
<!--    <Ex2_1/>-->
<!--    <Ex2_2/>-->
<!--    <BaseLayout/>-->
<!--    <ProductPage/>-->
<!--    <Todo/>-->
    <NewsDetailPage/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Ex01 from './components/unit01/Ex01.vue'
// import Ex02 from './components/unit01/Ex02.vue'
// import Ex01 from './components/unit02/Ex01.vue'
// import Ex01 from './components/unit02/Ex01.vue'
// import Ex01 from './components/Unit03/Ex01.vue'
// import Page1 from './components/Unit04/Page1.vue'
// import Page2 from "./components/Unit04/Page2.vue";
// import Exercise from "./components/Unit04/HW/Ex3_2/Exercise.vue";
// import Ex2_1 from "./components/Unit04/HW/Ex2_1/Ex2_1";
// import Ex2_2 from "./components/Unit04/HW/Ex2_2/Ex2_2";
// import BaseLayout from "./components/Unit04/HW/Ex4_1/BaseLayout";
// import ProductPage from "./components/Unit04/HW/Ex4_1/ProductPage";
// import Todo from "./components/Unit04/HW/Ex3_1/Todo";
// import BaseLayout from "./components/Unit04/HW/Ex4_2/BaseLayout";
import NewsDetailPage from "./components/Unit04/HW/Ex4_2/NewDetailPage";
export default {
  name: 'App',
  components: {
    NewsDetailPage,
    // Todo
    // ProductPage,
    // HelloWorld
    // Ex01
    // Ex02
    // Page1
    // Page2
    // Exercise
    // Ex2_1
    // Ex2_2
    // BaseLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
