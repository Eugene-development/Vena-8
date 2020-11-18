<template>
  <div>

    <nav class="  mx-6">


      <div class="max-w-7xl mx-auto">
        <div class="relative flex items-center justify-between h-16">



          <button
            class="focus:outline-none"
            @click="change_visibleSidebar">

            <svg v-if="visibleSidebar"
              class="flex-shrink-0 h-8 w-8 text-gray-500"
              fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    fill-rule="evenodd"/>
            </svg>
            <svg v-else
              class="flex-shrink-0 h-8 w-8 text-gray-500"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
            </svg>

<!--            <svg-->
<!--              :class="{ 'rotate-180': visibleContent}"-->
<!--              class="ml-auto h-5 w-5 transform group-hover:text-gray-400 group-focus:text-gray-400 transition-colors ease-in-out duration-150"-->
<!--              viewBox="0 0 20 20">-->
<!--              <path d="M6 6L14 10L6 14V6Z" fill="currentColor"/>-->
<!--            </svg>-->
          </button>



<!--          <svg-->
<!--            class="flex-shrink-0 h-8 w-8 text-gray-500"-->
<!--            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path clip-rule="evenodd"-->
<!--                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"-->
<!--                  fill-rule="evenodd"/>-->
<!--          </svg>-->

          <div class="flex items-center px-2 lg:px-0  mx-10">
            <nav aria-label="Breadcrumb" class="flex">
              <ol class="flex items-center space-x-4">
                <li>
                  <div>
                    <div class="text-gray-500 hover:text-gray-500" href="#">
                      <!-- Heroicon name: home -->
                      <svg aria-hidden="true" class="flex-shrink-0 h-5 w-5 transition duration-150 ease-in-out"
                           fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                      </svg>
                    </div>
                    <span class="sr-only">Home</span>
                  </div>
                </li>
                <li>
                  <div class="flex items-center space-x-4">
                    <!-- Heroicon name: chevron-right -->
                    <svg aria-hidden="true" class="flex-shrink-0 h-5 w-5 text-gray-400"
                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            fill-rule="evenodd"/>
                    </svg>
                    <div
                      class="text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
                      href="#">{{ breadcrumbs }}</div>
                  </div>
                </li>
                <li>
                  <div class="flex items-center space-x-4">
                    <!-- Heroicon name: chevron-right -->
                    <svg aria-hidden="true" class="flex-shrink-0 h-5 w-5 text-gray-400"
                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            fill-rule="evenodd"/>
                    </svg>
                    <div aria-current="page"
                       class="text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
                       href="#">{{ breadcrumbsEndPoint }}</div>
                  </div>
                </li>
              </ol>
            </nav>


          </div>
          <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div class="overflow-hidden shadow rounded-lg max-w-lg w-full lg:max-w-xs">
              <label class="sr-only" for="search">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path clip-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          fill-rule="evenodd"/>
                  </svg>
                </div>
                <input id="search"
                       class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 text-gray-700 placeholder-gray-800 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                       placeholder="Глобальный поиск" type="search">
              </div>
            </div>
          </div>
          <div class="hidden lg:block lg:ml-4">
            <div class="flex items-center">
              <button
                aria-label="Notifications"
                class="flex-shrink-0 p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                <!-- Heroicon name: bell -->
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="ml-4 relative flex-shrink-0">
                <div>
<!--                  <img alt=""-->
<!--                       class="h-8 w-8 rounded-full"-->
<!--                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">-->

                  <button
                    @click="get_visibleOffice"
                    id="user-menu"
                    aria-haspopup="true" aria-label="User menu"
                    class="flex block px-2 py-2 text-base leading-5 text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                    Мой офис
                    <svg
                      :class="{'rotate-90': visibleOffice}"
                      class="ml-auto px-1 h-5 w-5 transform"
                      viewBox="0 0 20 20">
                      <path d="M6 6L14 10L6 14V6Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
                <!--
                  Profile dropdown panel, show/hide based on dropdown state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->

                <!--                  :class="{'transform opacity-100 scale-100': visibleOffice}"-->

                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >



                <div v-if="visibleOffice"
                     class="z-40 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg transition ease-out duration-100 transform opacity-0 scale-95">
                  <div
                    aria-labelledby="user-menu" aria-orientation="vertical"
                       class="py-1 rounded-md bg-white shadow-xs "
                       role="menu">
                    <a
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      href="#"
                      role="menuitem">Профиль</a>
                    <a
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      href="#"
                      role="menuitem">Настройки</a>
                    <a
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      href="#"
                      role="menuitem">Документация</a>
                    <a
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      href="#"
                      role="menuitem">Выход</a>
                  </div>
                </div>



                </transition>


              </div>
            </div>
          </div>
        </div>
      </div>

    </nav>

    <div class="px-6 py-1 my-3">
      <span class="shadow inline-flex items-center px-3 py-2 mr-2 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800">
        <NuxtLink to="/">
          Badge
        </NuxtLink>
        <button>
          <svg class="ml-3 h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"/>
          </svg>
        </button>
      </span>
      <span class="shadow inline-flex items-center px-3 py-2 mr-2 rounded text-xs font-medium leading-4 bg-blue-100 text-gray-800">
        <NuxtLink to="/">
          Badge
        </NuxtLink>
        <button>
          <svg class="ml-3  h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"/>
          </svg>
        </button>
      </span>
      <span class="shadow inline-flex items-center px-3 py-2 mr-2 rounded text-xs font-medium leading-4 bg-orange-100 text-gray-800">
        <NuxtLink to="/">
          Badge
        </NuxtLink>
        <button>
          <svg class="ml-3  h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"/>
          </svg>
        </button>
      </span>
    </div>

    <hr>

  </div>


</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import GlobalSearch from './GlobalSearch/index'

export default {
  components: {
    GlobalSearch,
  },

  methods: {
    ...mapActions({
      'change_visibleSidebar': 'sidebar/visibility/change_visibleSidebar',
      'get_visibleOffice': 'navbar/visibility/get_visibleOffice',
    })
  },

  computed: {
    ...mapGetters({
      visibleSidebar: 'sidebar/visibility/visibleSidebar',
      visibleOffice: 'navbar/visibility/visibleOffice',
      breadcrumbs: 'navbar/breadcrumbs/breadcrumbs',
      breadcrumbsEndPoint: 'navbar/breadcrumbs/breadcrumbsEndPoint',
    }),
  },

}
</script>

<style scoped>

</style>
