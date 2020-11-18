<template>
  <div class="h-screen flex overflow-hidden ">

    <Sidebar/>


    <div class="flex-1 overflow-auto focus:outline-none" tabindex="0">
      <Navbar/>
      <main class="flex-1 relative pb-8 z-0 overflow-y-auto">
        <nuxt/>
      </main>
    </div>
  </div>

</template>

<script>

import Logo from './components/Logo'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'


export default {
  name: "index",
  components: {
    Logo,
    Sidebar,
    Navbar
  }
}


</script>


<!--<style>-->
<!--html {-->
<!--  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',-->
<!--    Roboto, 'Helvetica Neue', Arial, sans-serif;-->
<!--  font-size: 16px;-->
<!--  word-spacing: 1px;-->
<!--  -ms-text-size-adjust: 100%;-->
<!--  -webkit-text-size-adjust: 100%;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  box-sizing: border-box;-->
<!--}-->

<!--*,-->
<!--*:before,-->
<!--*:after {-->
<!--  box-sizing: border-box;-->
<!--  margin: 0;-->
<!--}-->

<!--.button&#45;&#45;green {-->
<!--  display: inline-block;-->
<!--  border-radius: 4px;-->
<!--  border: 1px solid #3b8070;-->
<!--  color: #3b8070;-->
<!--  text-decoration: none;-->
<!--  padding: 10px 30px;-->
<!--}-->

<!--.button&#45;&#45;green:hover {-->
<!--  color: #fff;-->
<!--  background-color: #3b8070;-->
<!--}-->

<!--.button&#45;&#45;grey {-->
<!--  display: inline-block;-->
<!--  border-radius: 4px;-->
<!--  border: 1px solid #35495e;-->
<!--  color: #35495e;-->
<!--  text-decoration: none;-->
<!--  padding: 10px 30px;-->
<!--  margin-left: 15px;-->
<!--}-->

<!--.button&#45;&#45;grey:hover {-->
<!--  color: #fff;-->
<!--  background-color: #35495e;-->
<!--}-->
<!--</style>-->
