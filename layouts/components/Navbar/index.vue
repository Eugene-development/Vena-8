<template>
  <div>

    <nav class="  mx-6">


      <div class="max-w-7xl mx-auto">
        <div class="relative flex items-center justify-between h-16">


<Humburger/>

          <!--          <svg-->
          <!--            class="flex-shrink-0 h-8 w-8 text-gray-500"-->
          <!--            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
          <!--            <path clip-rule="evenodd"-->
          <!--                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"-->
          <!--                  fill-rule="evenodd"/>-->
          <!--          </svg>-->

          <Breadcrumbs/>



<GlobalSearch/>


<Office/>





        </div>
      </div>

    </nav>

    <Tab/>

    <hr>

  </div>


</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import GlobalSearch from './GlobalSearch'
import Tab from './Tab'
import Office from './Office'
import Breadcrumbs from './Breadcrambs'
import Hamburger from './Hamburger'

export default {
  components: {
    GlobalSearch,
    Tab,
    Office,
    Breadcrumbs,
    Hamburger
  },

}
</script>

<style scoped>

</style>
