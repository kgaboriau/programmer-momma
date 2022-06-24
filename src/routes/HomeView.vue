<template lang="pug">
.home
  .text-container
    h1.title {{'Welcome to my world'}}
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colours.sass';
@import 'src/styles/flexbox.sass';

.home {
  @include flex-row;
  justify-content: right;

  .text-container {
    @include flex-column;
    justify-content: bottom;
    //max-width: 35vw;

    h1 {
      //margin-right: 100px;
      //margin-top: 50vh;

      color: $light-text;
      text-align: right;
      font-size: 4rem;
    }
  }
}

/* @include break-tablet-and-up {
}

@include break-desktop-and-up {
} */
</style>