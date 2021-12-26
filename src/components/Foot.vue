<template lang="pug">
	footer.foot
		div.foot__contents
			div.foot__contents--icon
				img(src="https://click.ecc.ac.jp/ecc/msatou/raict_lp/img/foot_app_icon.png",alt="raict")
			p.foot__contents--txt raictでオンラインライブを楽しもう！
			div.foot__contents--link
				img(src="https://click.ecc.ac.jp/ecc/msatou/raict_lp/img/foot_app_link.png",alt="raict")
		div.foot__copy
			div
				div.foot__copy--logo
					img(src="https://click.ecc.ac.jp/ecc/msatou/raict_lp/img/logo_color.png",alt="raict")
				div
					ul.foot__copy--link
						li
							a(href="#") 利用規約
						li
							a(href="#") プライバシーポリシー
						li
							a(href="#") 運営会社
						li
							a(href="#") お問い合わせ
					small.foot__copy--copywright &copy; shakerglass.Inc
</template>

<script>
export default {
  name: "Foot",
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.foot {
  margin-top: 120px;
  &__contents {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    background: $black;
    padding: 80px 0;
    &--icon {
      width: 94px;
      height: 94px;
      border-radius: 16px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--txt {
      font-size: 2rem;
      font-weight: bold;
      margin: 24px 0 40px;
    }
    &--link {
      width: 70%;
      max-width: 400px;
      img {
        width: 100%;
      }
    }
  }
  &__copy {
    background: $copywrightColor;
    padding: 16px 0;
    > div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      width: 80vw;
      max-width: 1100px;
      margin: 0 auto;
    }
    &--logo {
      width: 200px;
      height: 104px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &--link {
      display: flex;
      min-width: 400px;
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 24px;
      li {
        margin-right: 32px;
        &:last-of-type {
          margin: 0;
        }
      }
      a {
        opacity: 1;
        transition: 0.2s opacity;
        &:hover {
          opacity: 0.5;
        }
      }
    }
    &--copywright {
      display: block;
      color: #767676;
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
    }
  }
}
</style>
