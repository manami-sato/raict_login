<template lang="pug">
	header.head
		h1.head__logo
			img(:src="`${webImgPath}logo_color.png`",alt="raict")
</template>

<script>
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Head",
  mixins: [Mixin],
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.head {
  width: 100vw;
  padding: 64px 10vw 0;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 55%;
    padding-top: 30%;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);
    background: $mainColor;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &__logo {
    max-width: 256px;
    // width: 30%;
    height: 104px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
