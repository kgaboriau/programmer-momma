<template lang="pug">
.nav-bar
  .left-container
    img.logo(src="../assets/logo.svg", alt="Vue logo", draggable="false")
    h2.title {{'ProgrammerMomma'}}
  .right-container
    router-link(to="/") {{'Home'}}
    router-link(to="/blog") {{'Shower Thoughts'}}
</template>

<script>
import NavBtn from '@/components/NavBtn.vue'

export default {
  components: {
    NavBtn
  },
  data() {
    return {
      logoSrc: 'src/assets/logo.svg'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono&family=Press+Start+2P&family=Source+Code+Pro&family=VT323&family=Work+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import 'src/styles/colours.sass';
@import 'src/styles/breakpoints.sass';
@import 'src/styles/flexbox.sass';

.nav-bar {
  @include flex-row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  height: 20vh;
  padding: 20px;

  .left-container {
    @include flex-row;
    align-items: center;
    justify-content: left;
    flex: 1 1 0;

    .logo {
      width: 100px;
    }

    .title {
      font-family: 'Source Code Pro', monospace;
      padding-left: 10px;
      visibility: hidden;
      color: $primary-brand-colour;
    }
  }

  .right-container {
    @include flex-row;
    justify-content: right;
    flex: 1 1 0;

    a {
      text-decoration-line: none;
      font-size: 1.3em;
      font-weight: bold;
      color: $secondary-light;
      padding: 5px;
      margin: 0px 10px;
    }

    a.router-link-exact-active {
      color: $secondary-brand-colour;
    }
  }
}
@include break-tablet-small-and-up {
  .nav-bar {
    max-height: 40px;
    padding: 25px;
  }
}

@include break-desktop-and-up {
  .nav-bar .left-container .title {
    visibility: visible;
  }
}
</style>
