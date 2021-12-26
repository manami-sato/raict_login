<template lang="pug">
	div.headline
		h2.headline__ttl {{ttl}}
		p.headline__txt {{jp}}
</template>

<script>
export default {
  name: "Head",
  props: ["ttl", "jp"],
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.headline {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  margin-bottom: 48px;
  text-shadow: 0 0 30px #fff;
  &__ttl {
    font-size: 5.2rem;
  }
  &__txt {
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>
