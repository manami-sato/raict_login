<template lang="pug">
	div.mypageLive
		div.mypageLive__img
			img(:src="`https://click.ecc.ac.jp/ecc/msatou/raict_app/img/${res.img}`")
		div.mypageLive__info
			p.mypageLive__info--name {{res.artistName}}
			p.mypageLive__info--ttl {{res.ttl}}
			p.mypageLive__info--date
				span {{fromYear}}
				span {{fromMonth}}
				span {{fromDay}}
				span {{toYear}}
				span {{toMonth}}
				span {{toDay}}
				span {{start}}
</template>

<script>
export default {
  name: "MypageLive",
  props: ["id"],
  data() {
    return {
      res: [],
      fromYear: 0,
      fromMonth: 0,
      fromDay: 0,
      toYear: 0,
      toMonth: 0,
      toDay: 0,
      start: "",
      preStart: "",
    };
  },
  mounted() {
    fetch("https://click.ecc.ac.jp/ecc/msatou/raict_app/products.php")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event[this.id - 1];
        this.fromYear = this.res.date.from.year;
        this.fromMonth = this.res.date.from.month;
        this.fromDay = this.res.date.from.day;
        this.toYear = this.res.date.to.year;
        this.toMonth = this.res.date.to.month;
        this.toDay = this.res.date.to.day;
        this.start = this.res.start;
        this.preStart = this.res.preStart;
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.mypageLive {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 70vw;
  max-width: 880px;
  padding: 24px 40px;
  @include wrapSet($m: 0 auto 48px);
  &__img {
    width: 320px;
    height: 200px;
    background: $copywrightColor;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__info {
    width: calc(100% - 320px - 5%);
    min-width: 300px;
    padding: 16px 0;
    margin-left: 5%;
    &--name {
      font-size: 3rem;
      font-weight: bold;
    }
    &--ttl {
      font-size: 2.4rem;
      font-weight: bold;
      margin: 16px 0 40px;
    }
    &--date {
      color: #bfbfbf;
      font-size: 1.6rem;
      span {
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(4),
        &:nth-of-type(5) {
          &::after {
            content: ".";
          }
        }
        &:nth-of-type(3) {
          &::after {
            content: "-";
            margin: 0 4px;
          }
        }
        &:nth-of-type(6) {
          &::after {
            content: "";
          }
        }
      }
    }
  }
}
</style>
