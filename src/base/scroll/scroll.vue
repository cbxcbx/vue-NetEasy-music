<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    click: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 1
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  },
  mounted() {
    this._initScroll();
  }
};
</script>

<style lang="scss" scoped>
</style>