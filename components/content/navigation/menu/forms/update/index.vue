<template>
  <div
    v-if="dialogUpdate"
    class="fixed z-10 inset-0 overflow-y-auto w-120">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!--
        Background overlay, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div
        aria-labelledby="modal-headline"
        aria-modal="true" class="inline-block align-bottom bg-gray-700 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6" role="dialog">
        <form>
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-100">
                  Изменить значение
                </h3>
                <p class="mt-1 text-sm leading-5 text-gray-100">
                  Таблица "Меню"
                </p>
              </div>
            <div class="mt-8 border-t border-gray-400 pt-8">
              <div class="mt-6 ">
                <div class="mx-2 sm:col-span-3 ">
                  <label class="block text-sm font-medium leading-5 text-gray-100" for="first_name">
                    Измените значение
                  </label>
                  <div class="mt-1 rounded-md shadow-sm">
                    <input
                      id="first_name"
                      :value="currentMenu_update.name"
                      class="rounded-md pl-2 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-8"
                      @input="currentMenuForm_update">
                  </div>
                </div>

              </div>
            </div>
        </form>


        <div class="mt-8 sm:mt-6">
          <span class="w-full rounded-md shadow-sm">
            <button
              class="mt-10 inline-flex justify-center w-full py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              type="submit"
              @click.prevent="updateMenu">
              Изменить
            </button>

            <button
              class="mt-2 inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              type="button"
              @click="dialogUpdateClose">
              Закрыть
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      dialogUpdate: 'content/navigation/menu/dialogUpdate',
      currentMenu_update: 'content/navigation/menu/currentMenu_update',
    }),
  },
  methods: {
    ...mapActions({
      updateMenu: 'content/navigation/menu/updateMenu',
      dialogUpdateClose: 'content/navigation/menu/dialogUpdateClose',
      currentMenuForm_update: 'content/navigation/menu/currentMenuForm_update',
    })
  }
}
</script>

<style scoped>

</style>
