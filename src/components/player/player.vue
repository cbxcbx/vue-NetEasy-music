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
          <h1 class="title">{{ currentSong.name }}</h1>
          <h2 class="sub-title">{{ currentSong.singer }}</h2>
        </div>
        <div class="middle">
          <div class="middle-l">
            <div class="cd-wrapper">
              <div class="cd">
                <img :src="currentSong.image" class="image"/>
              </div>
            </div>
          </div>
        </div>
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
    position: relative;
    margin-bottom: 25px;
    .back {
      position: absolute;
      top: 0;
      left: 6px;
      .icon-back {
        display: block;
        padding: 10px 5px;
        font-size: $font-size-large-x;
        color: $white;
      }
    }
    .title {
      width: 70%;
      margin: 0 auto;
      font-size: $font-size-large;
      color: $white;
      line-height: 42px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .sub-title {
      font-size: $font-size-small;
      font-weight: 400;
      color: $white;
      text-align: center;
      line-height: 16px;
    }
  }
  .middle {
    position: fixed;
    width: 100%;
    top: 83px;
    bottom: 170px;
    white-space: nowrap;
    font-size: 0;
    .middle-l {
      display: inline-block;
      vertical-align: top;
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 80%;
      .cd-wrapper {
        position: absolute;
        left: 10%;
        top: 0;
        width: 80%;
        box-sizing: border-box;
        height: 100%;
        .cd {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          .image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>