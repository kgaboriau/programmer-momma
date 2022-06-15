<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

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
  color: $text-main;
  font-size: 16px;

  @include break-tablet-and-up {
    font-size: 18px;
  }
  @include break-desktop-and-up {
    font-size: 20px;
  }
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
