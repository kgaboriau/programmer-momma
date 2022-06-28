<template lang="pug">
.hot-spot(:style="styleSpot")
</template>

<script>
export default {
  props: {
    diameter: {
      type: Number,
      required: true
    },
    posfromTop: {
      type: Number,
      required: true
    },
    posFromright: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // This is manually input based on the src image
      bkgInfoOriginal: {
        width: 1400,
        height: 787
      }
    }
  },
  computed: {
    bkgRatio() {
      return (this.bkgInfoOriginal.height / this.bkgInfoOriginal.width)
    },
    windowRatio() {
      return (window.innerHeight / window.innerWidth)
    },
    bkgScaledSize() {
      if (this.windowRatio > this.bkgRatio) {
        return {
          height: window.innerHeight,
          width: (window.innerHeight * this.bkgRatio)
        }
      } else {
        return {
          height: (window.innerWidth * this.bkgRatio),
          width: window.innerWidth
        }
      }
    },
    styleSpot() {
      return {
        'height': `${this.diameter}px`,
        'width': `${this.diameter}px`,
        'top': `${this.posfromTop}px`,
        'right': `70%`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colours.sass';
@import 'src/styles/breakpoints.sass';
@import 'src/styles/flexbox.sass';

.hot-spot {
  position: absolute;
  background-color: red;
  border-radius: 50%;
  display: inline-block;

  &:hover {
    background-color: blueviolet;
  }
}
</style>
