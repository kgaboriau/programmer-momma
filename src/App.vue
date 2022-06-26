<template lang="pug">
#app(:style="appBkg")
  NavBar
  router-view
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import homeBkg from './assets/webdev_bkg.jpeg'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      appBkg: {
        'background-image': `url(${homeBkg})`
      },
      bkgMap: {
        'blog': 'linear-gradient(to bottom right, #00E9F2, #1068B0, #00133E)',
        'home': `url(${homeBkg})`
      }
    }
  },
  computed: {
    routeName() {
      return this.$route.name
    }
  },
  watch: {
    routeName(name) {
      this.changeRouteBackground(name)
    }
  },
  methods: {
    changeRouteBackground(name) {
      this.appBkg = {
        'background-image': this.bkgMap[name]
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import 'src/styles/colours.sass';
@import 'src/styles/breakpoints.sass';
@import 'src/styles/flexbox.sass';

html, body {
  height: 100%;
  margin: 0;

  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary-text;
  font-size: 16px;

  @include break-tablet-small-and-up {
    font-size: 18px;
  }
  @include break-desktop-and-up {
    font-size: 20px;
  }

  #app {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;

    @include flex-column;
  }
}
</style>
