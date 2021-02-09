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
                <img :src="currentSong.image" class="image play" />
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="progress-wrapper">
            <div class="progress-bar-wrapper">
              <div class="progress-bar">
                <div class="bar-inner">
                  <div class="progress"></div>
                  <div class="progress-btn-wrapper">
                    <div class="progress-btn"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="operators">
            <div class="icon left">
              <i class="iconfont icon-xunhuan1"></i>
            </div>
            <div class="icon left">
              <i class="iconfont icon-caret-right prev indent"></i>
              <i class="iconfont icon-caret-right prev"></i>
            </div>
            <div class="icon center">
              <div class="zanting-bg" @click="stop"></div>
              <i class="iconfont icon-zanting"></i>
            </div>
            <div class="icon right">
              <i class="iconfont icon-caret-right indent"></i>
              <i class="iconfont icon-caret-right"></i>
            </div>
            <div class="icon right">
              <i class="iconfont icon-aixin"></i>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="mini">
      <div class="mini-player" v-show="!fullScreen">
        <div class="icon">
          <div class="imgWrapper">
            <img :src="currentSong.image" width="40" height="40">
          </div>
        </div>
        <div class="text">
          <h2 class="name">{{ currentSong.name }}</h2>
          <p class="desc">{{ currentSong.singer }}</p>
        </div>
        <div class=""></div>
      </div>
    </transition>
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
    stop() {
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
    margin-bottom: 45px;
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
    top: 103px;
    bottom: 170px;
    white-space: nowrap;
    font-size: 0;
    .middle-l {
      display: inline-block;
      vertical-align: top;
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 60%;
      .cd-wrapper {
        position: absolute;
        left: 20%;
        top: 0;
        width: 60%;
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
          .play {
            animation: rotate 20s linear infinite;
          }
        }
      }
    }
  }
  .bottom {
    position: absolute;
    bottom: 50px;
    width: 100%;
    .progress-wrapper {
      display: flex;
      align-items: center;
      width: 80%;
      padding: 10px 0 20px;
      margin: 0 auto;
      .progress-bar-wrapper {
        flex: 1;
      }
      .progress-bar {
        height: 30px;
        .bar-inner {
          position: relative;
          top: 13px;
          height: 4px;
          background: rgba(0, 0, 0, 0.3);
          .progress {
            position: absolute;
            height: 100%;
            background-color: $light-orange;
          }
        }
      }
      .progress-btn-wrapper {
        position: absolute;
        left: -8px;
        top: -13px;
        width: 30px;
        height: 30px;
        .progress-btn {
          position: relative;
          top: 7px;
          left: 7px;
          box-sizing: border-box;
          width: 16px;
          height: 16px;
          border: 3px solid $white;
          border-radius: 50%;
          background: $light-orange;
        }
      }
    }
    .operators {
      display: flex;
      .icon {
        flex: 1;
        .iconfont {
          font-size: 20px;
          font-weight: bold;
          color: $light-orange;
        }
        .prev {
          display: inline-block;
          &::before {
            display: inline-block;
            transform: rotate(-180deg);
          }
        }
        .indent {
          margin-right: -6px;
        }
        .zanting-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          margin: -20px 0 0 -20px;
          background-color: $light-orange;
          border-radius: 50%;
          opacity: 0.3;
        }
        &.left {
          text-align: right;
        }
        &.center {
          position: relative;
          padding: 0 20px;
          text-align: center;
        }
        &.right {
          text-align: left;
        }
      }
    }
  }
  &.normal-enter-active,
  &.normal-leave-active {
    transition: all 0.4s;
    .top,
    .bottom {
      transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
    }
  }

  &.normal-enter,
  &.normal-leave-to {
    opacity: 0;
    .top {
      transform: translate3d(0, -100px, 0);
    }
    .bottom {
      transform: translate3d(0, 100px, 0);
    }
  }
}

.mini-player {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 60px;
  background: $white;
  .icon {
    flex: 0 0 40px;
    width: 40px;
    height: 40px;
    padding: 0 10px 0 20px;
    box-sizing: content-box;
    .imgWrapper {
      width: 100%;
      height: 100%;
      img {
        border-radius: 50%;
      }
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    .name {
      color: $black;
      font-size: $font-size-medium;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 2px;
    }
    .desc {
      color: $gray;
      font-size: $font-size-small;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>