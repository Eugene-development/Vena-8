<template>
  <div>
    <p>Мой офис</p>
    <p>Привет {{$auth.user.name}}</p>
  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>

</style>
