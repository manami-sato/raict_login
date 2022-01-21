<template lang="pug">
  main.mypage
    Head
    Headline(ttl="MY PAGE",jp="マイページ")
    div(v-for="(item,i) in headline",:key="i").mypage__live
      h3.mypage__live--headline {{item}}
      div(v-for="event in events[i]",:key="event")
        MypageLive(:id="event")
    Foot
</template>

<script>
import Head from "@/components/Head.vue";
import Headline from "@/components/Headline.vue";
import MypageLive from "@/components/MypageLive.vue";
import Foot from "@/components/Foot.vue";
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Home",
  mixins: [Mixin],
  components: {
    Head,
    Headline,
    MypageLive,
    Foot,
  },
  data() {
    return {
      res: [],
      headline: ["TODAY'S LIVE", "OTHER'S LIVE"],
      events: [[0], []],
    };
  },
  mounted() {
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event;
        for (let i = 0; i < this.res.length; i++) {
          this.events[1].push(i);
        }
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.mypage {
  &__live {
    &--headline {
      margin: 160px auto 104px;
      font-size: 4rem;
      font-weight: bold;
      letter-spacing: 0.5rem;
      text-align: center;
    }
  }
}
</style>
