<template lang="pug">
#app
  NavBar
  router-view
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import 'src/styles/colours.sass';
@import 'src/styles/breakpoints.sass';

html, body {
  height: 100%;
  margin: 0;

  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary-text;
  font-size: 16px;

  @include break-tablet-and-up {
    font-size: 18px;
  }
  @include break-desktop-and-up {
    font-size: 20px;
  }
}
</style>
