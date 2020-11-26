<template>
  <div class="relative bg-gray-50 overflow-hidden">

    <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">

      <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="text-center">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Добро пожаловать
            <br class="xl:hidden">
<!--            <span class="text-indigo-600"> ,Евгений</span>-->
          </h2>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Вы находитесь в системе управления проектами "Business Operation Systems"
          </p>
          <div class="flex mt-5 max-w-md mx-auto sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <NuxtLink to="admin/login"    class="mb-6 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Войти
              </NuxtLink>
              <NuxtLink to="/admin/registration" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Зарегистрироваться
              </NuxtLink>

<!--            </div>-->
<!--              <NuxtLink to="/admin/registration" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">-->
<!--                Зарегистрироваться-->
<!--              </NuxtLink>-->
<!--            </div>-->
          </div>
          </div>
        </div>
      </main>
    </div>
  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'empty',

  components: {
    Logo
  }
}
</script>

