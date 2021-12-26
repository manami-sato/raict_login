<template lang="pug">
	main.signin
		Head
		Headline(ttl="LOGIN",jp="ログイン")
		form.signin__form
			div(v-for="(item,i) in formContents",:key="item[i]")
				p.signin__form--txt {{item.contents}}
				input(:type="item.type",:placeholder="`${item.contents}を入力してください`").signin__form--input
			router-link(:to="{name:'Mypage'}").signin__form--btn ログインする
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
  data() {
    return {
      formContents: [
        { contents: "メールアドレス", type: "text" },
        { contents: "パスワード", type: "password" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.signin {
  &__form {
    width: 70%;
    max-width: 560px;
    padding: 48px 0;
    @include wrapSet();
    > div {
      width: 80%;
      max-width: 400px;
      margin: 0 auto;
      &:first-of-type {
        margin-bottom: 24px;
      }
    }
    &--txt {
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 16px;
    }
    &--input {
      width: 100%;
      color: $black;
      background: #fff;
      font-size: 1.6rem;
      padding: 12px 16px;
      border-radius: 4px;
      &:focus {
        background: lighten($color: #65029a, $amount: 60%);
        outline: none;
      }
    }
    &--btn {
      @include btnSet();
      margin: 40px auto 0;
    }
  }
}
</style>
