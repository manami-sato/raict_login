<template lang="pug">
  main
    Head
    Headline(ttl="ONLINE LIVE",jp="オンラインライブ")
    div 
    Foot
</template>

<script>
import Head from "@/components/Head.vue";
import Headline from "@/components/Headline.vue";
import Foot from "@/components/Foot.vue";

export default {
  name: "Home",
  components: {
    Head,
    Headline,
    Foot,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
</style>
