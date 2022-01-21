<template lang="pug">
  main.live
    Head
    Headline(ttl="ONLINE LIVE",jp="オンラインライブ")
    div.live__play
      video(:src="`${path}img/movie.mp4`",controls)
    Foot
</template>

<script>
import Head from "@/components/Head.vue";
import Headline from "@/components/Headline.vue";
import Foot from "@/components/Foot.vue";
import Mixin from "@/mixins/Mixin.vue";

export default {
  name: "Home",
  mixins: [Mixin],
  components: {
    Head,
    Headline,
    Foot,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.live {
  &__play {
    width: 60vw;
    min-width: 400px;
    height: 450px;
    margin: 0 auto;
    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__back {
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 54px;
    text-align: center;
  }
}
</style>
