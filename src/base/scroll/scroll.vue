<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

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
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    }
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: this.scrollX,
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
  },
  watch: {
    data(newValue) {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>