<template>
  <div class="music-list">
    <div class="header">
      <div class="back">
        <i class="iconfont icon-back" @click="back"></i>
      </div>
      <h1 class="title">{{ title }}</h1>
      <div class="bg-layer" ref="layer"></div>
      <div class="bg-image" :style="bgImage" ref="bgImage">
        <div class="filter" ref="filter"></div>
      </div>
    </div>
    <Scroll
      :data="songs"
      :probe-type="probeType"
      :listen-scroll="listenScroll"
      @scroll="scroll"
      class="list"
    >
      <div class="song-list-wrapper">
        <song-list :songs="songs"></song-list>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "base/scroll/scroll";
import SongList from "base/song-list/song-list";
import { prefixStyle } from "common/js/util/dom";

const RESERVED_HEIGHT = 42 + 51;
const transform = prefixStyle("transform");
const backdrop = prefixStyle("backdrop-filter");
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    bgImage: {
      type: String,
      default: ""
    },
    songs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      scrollY: -1
    };
  },
  created() {
    this.probeType = 3;
    this.listenScroll = true;
  },
  mounted() {
    this.imageHeight = this.$refs.bgImage.clientHeight;
    this.minTranslateY = -this.imageHeight + RESERVED_HEIGHT;
  },
  methods: {
    back() {
      this.$router.back();
    },
    scroll(pos) {
      this.scrollY = pos.y;
    }
  },
  watch: {
    scrollY(newY) {
      let translateY = Math.max(this.minTranslateY, newY);
      let scale = 1;
      let zIndex = 10;
      let blur = 0;
      let percent = Math.abs(newY / this.imageHeight);
      if (newY > 0) {
        scale = 1 + percent;
        zIndex = 10;
      } else {
        blur = Math.min(20, percent * 20);
      }

      this.$refs.layer.style[transform] = `translate3d(0,${translateY}px,0)`;
      this.$refs.filter.style[backdrop] = `blur(${blur}px)`;

      this.$refs.bgImage.style[transform] = `scale(${scale})`;
      this.$refs.bgImage.style.zIndex = zIndex;
    }
  },
  components: {
    Scroll,
    SongList
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";
.music-list {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $bg-color;
  z-index: 20;
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 50;
    .icon-back {
      display: block;
      padding: 10px;
      font-size: 22px;
      color: $login-btn;
    }
  }
  .title {
    position: absolute;
    top: 0;
    left: 10%;
    z-index: 40;
    width: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    line-height: 42px;
    font-size: 18px;
    color: $white;
  }

  .bg-image {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 75%;
    transform-origin: top;
    background-size: cover;
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0);
      opacity: 0.2;
    }
  }
  .list {
    position: absolute;
    top: 230px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: $white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);
    .song-list-wrapper {
      padding: 20px 30px;
    }
  }
}
</style>