<template lang="pug">
.home
  .text-container
    p.intro {{ introParagraph1 }}
    p.intro {{ introParagraph2 }}
    h1.title {{'Welcome to my World'}}
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      introParagraph1: 'Hello World! Welcome to my site. I go by many names, most being some variation of mom, mommy, momma etc. but you can call me ProgammerMomma. I am a full time web development manager and boy mom of two. I created this space to provide a glimpse into all things I am passionate about: web development, parenting, and EdTech!',
      introParagraph2: 'It is not always easy being a woman in STEAM, especially if you have littles taking up a ton of your time as well. But I am here to say that it can be done! You can have your cake and eat it too. After all, what good is cake if you can’t eat it? '
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colours.sass';
@import 'src/styles/flexbox.sass';
@import 'src/styles/breakpoints.sass';

.home {
  @include flex-row;
  justify-content: right;

  .text-container {
    @include flex-column;
    justify-content: bottom;
    align-items: flex-end;
    //max-width: 35vw;

    padding: 30px 30px 0 30px;

    h1 {
      //margin-right: 100px;
      //margin-top: 50vh;

      color: $light-text;
      text-align: right;
      font-size: 4rem;
    }

    p {
      text-align: center;
      color: $light-text;
    }
  }
}

@include break-tablet-small-and-up {
  .home {
    p, h1 {
      max-width: 75vw;
    }
  }
}

@include break-tablet-medium-and-up {
  .home {
    p, h1 {
      max-width: 60vw;
    }
  }
}

@include break-tablet-large-and-up {
  .home {
    p, h1 {
      max-width: 45vw;
    }
  }
}

@include break-desktop-and-up {
  .home {
    p, h1 {
      max-width: 30vw;
    }
  }
}
</style>