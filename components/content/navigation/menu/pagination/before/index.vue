<template>
<div>
  <NuxtLink
    v-for="indexA of numberOfPage " :key="indexA"
    v-show="indexA === 1 && currentPage > 2"
    :class="{ 'bg-blue-100' : currentPage === indexA }"
    @click.native="handleCurrentChange(indexA)"
    to="/content/navigation" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
    {{indexA}}
  </NuxtLink>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  methods: {
    ...mapActions({
      'handleCurrentChange': 'content/navigation/menu/handleCurrentChange',
    })
  },

  computed: {
    ...mapGetters({
      numberOfPage: 'content/navigation/menu/numberOfPage',
      currentPage: 'content/navigation/menu/currentPage',
      countMenu: 'content/navigation/menu/countMenu',
    }),
  },
}
</script>

<style scoped>

</style>
