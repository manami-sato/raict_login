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

export default {
  name: "Home",
  components: {
    Head,
    Headline,
    MypageLive,
    Foot,
  },
  data() {
    return {
      res: [],
      events: [1],
      // eventRandumId: 0,
      eventId: 0,
      headline: ["TODAY'S LIVE", "OTHER'S LIVE"],
    };
  },
  mounted() {
    fetch("https://click.ecc.ac.jp/ecc/msatou/raict_app/products.php")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event;
        // this.eventRandumId = Math.floor(
        //   Math.random() * (this.res.length - 1) + 1
        // );
        this.eventId = this.res.length;
        this.events.push(this.eventId);
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
