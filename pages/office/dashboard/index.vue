<template>
  <div>
    <p>Здесь будет сводка текущей информации</p>
    <p>Добрый день {{$auth.user.name}}</p>
  </div>
</template>

<script>
export default {
  // middleware: 'access',
  name: "index"
}
</script>

<style scoped>

</style>
