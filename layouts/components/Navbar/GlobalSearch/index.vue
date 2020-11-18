<template>
  <div class="flex-1 flex">
    <form class="w-full flex md:ml-0" action="#" method="GET">
      <label for="search_field" class="sr-only">Глобальный поиск</label>
      <div class="relative w-full text-cool-gray-400 focus-within:text-cool-gray-600">
        <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
        </div>
        <input id="search_field" class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-cool-gray-900 placeholder-cool-gray-500 focus:outline-none focus:placeholder-cool-gray-400 sm:text-sm" placeholder="Глобальный поиск" type="search">
      </div>
    </form>
  </div>

</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>

</style>
