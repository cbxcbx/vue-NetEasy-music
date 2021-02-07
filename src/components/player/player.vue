<template>
  <div class="player" v-show="playlist.length > 0">
    <transition name="normal">
      <div class="normal-player" v-show="fullScreen">
        <div class="background">
          <div class="filter"></div>
          <img :src="currentSong.image" />
        </div>
        <div class="top">
          <div class="back">
            <i class="iconfont icon-back" @click="back"></i>
          </div>
        </div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
    </transition>
    <!-- <transition name="mini">
      <div class="mini-player" v-show="!fullScreen">

      </div>
    </transition>-->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  created() {
    console.log("当前歌曲是", this.currentSong);
  },
  methods: {
    back() {
      this.setFullScreen(false);
    },
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN"
    })
  },
  computed: {
    ...mapGetters(["playlist", "fullScreen", "currentSong"])
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";
.normal-player {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: $bg-color;
  .background {
    position: absolute;
    left: -50%;
    top: -50%;
    width: 300%;
    height: 300%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(30px);
    .filter {
      position: absolute;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.6;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .top {
    .back {
      position: absolute;
      top: 0;
      left: 6px;
      .icon-back {
        display: block;
        padding: 10px 5px;
        font-size: 22px;
        color: $white;
      }
    }
  }
}
</style>