<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.svg")
  HelloWorld(msg="Welcome to my world")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
