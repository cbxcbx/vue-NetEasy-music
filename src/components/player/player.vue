<template>
  <div class="player" v-show="playlist.length > 0">
    <transition
      name="normal"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave"
    >
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
            <div class="cd-wrapper" ref="cdWrapper">
              <div class="cd">
                <img :src="currentSong.image" class="image" :class="cdCls" />
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="progress-wrapper">
            <span class="time time-l">{{format(currentTime)}}</span>
            <div class="progress-bar-wrapper">
              <ProgressBar
                :percent="percent"
                @percentChange="onProgressBarChange"
                @percentChanging="onProgressBarChanging"
              ></ProgressBar>
            </div>
            <span class="time time-r">{{format(this.duration)}}</span>
          </div>
          <div class="operators">
            <div class="icon left">
              <i class="iconfont icon-xunhuan1" @click="changeMode" :class="modeIcon"></i>
            </div>
            <div class="icon left" :class="disableCls">
              <i class="iconfont icon-caret-right prev indent" @click="prev"></i>
              <i class="iconfont icon-caret-right prev" @click="prev"></i>
            </div>
            <div class="icon center" :class="disableCls">
              <div class="play-bg" @click="togglePlaying"></div>
              <i class="iconfont" :class="playIcon"></i>
            </div>
            <div class="icon right" :class="disableCls">
              <i class="iconfont icon-caret-right indent" @click="next"></i>
              <i class="iconfont icon-caret-right" @click="next"></i>
            </div>
            <div class="icon right">
              <i class="iconfont icon-aixin"></i>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="mini">
      <div class="mini-player" v-show="!fullScreen" @click="open">
        <div class="icon">
          <div class="imgWrapper">
            <img :src="currentSong.image" width="40" height="40" :class="cdCls" />
          </div>
        </div>
        <div class="text">
          <h2 class="name">{{ currentSong.name }}</h2>
          <p class="desc">{{ currentSong.singer }}</p>
        </div>
        <div class="control">
          <ProgressCircle :radius="radius" :percent="percent">
            <i class="iconfont icon-zanting"></i>
          </ProgressCircle>
        </div>
        <div class="control">
          <i class="iconfont icon-bofangliebiao"></i>
        </div>
      </div>
    </transition>
    <audio
      ref="audio"
      @playing="ready"
      @error="error"
      @timeupdate="updateTime"
      @ended="end"
      @pause="paused"
    ></audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { prefixStyle } from "common/js/util/dom";
import { playerMixin } from "common/js/mixin/mixin";
import animations from "create-keyframe-animation";
import ProgressBar from "base/progress-bar/progress-bar";
import ProgressCircle from "base/progress-circle/progress-circle";
const transform = prefixStyle("transform");

export default {
  mixins: [playerMixin],
  created() {
    // console.log("当前歌曲是", this.currentSong);
  },
  data() {
    return {
      songReady: false,
      currentTime: 0,
      url: "",
      duration: 0,
      radius: 30
    };
  },
  methods: {
    back() {
      this.setFullScreen(false);
    },
    // 打开播放器
    open() {
      this.setFullScreen(true);
    },
    // 打开播放器的动画钩子函数
    enter(el, done) {
      let { x, y, scale } = this._getPosAndScale();
      let animation = {
        0: {
          transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
        },
        60: {
          transform: `translate3d(0,0,0) scale(1.1)`
        },
        100: {
          transform: `translate3d(0,0,0) scale(1)`
        }
      };
      // 使用的第三方动画库 create-keyframe-animation
      // 注册动画
      animations.registerAnimation({
        name: "move",
        animation,
        presets: {
          duration: 400,
          easing: "linear"
        }
      });
      // 执行动画
      animations.runAnimation(this.$refs.cdWrapper, "move", done);
    },
    // 打开播放器的动画钩子函数
    afterEnter() {
      // 卸载动画
      animations.unregisterAnimation("move");
      this.$refs.cdWrapper.style.animation = "";
    },
    // 打开播放器的动画钩子函数
    leave(el, done) {
      this.$refs.cdWrapper.style.transition = "all 0.4s";
      const { x, y, scale } = this._getPosAndScale();
      this.$refs.cdWrapper.style[
        transform
      ] = `translate3d(${x}px,${y}px,0) scale(${scale})`;
      this.$refs.cdWrapper.addEventListener("transitionend", done);
    },
    // 打开播放器的动画钩子函数
    afterLeave() {
      this.$refs.cdWrapper.style.transition = "";
      this.$refs.cdWrapper.style[transform] = "";
    },
    // 计算动画需要进行变化的数据
    _getPosAndScale() {
      const targetWidth = 40;
      const paddingLeft = 30;
      const paddingBottom = 20;
      const paddingTop = 103;
      const width = window.innerWidth * 0.6;
      const scale = targetWidth / width;
      const x = -(window.innerWidth / 2 - paddingLeft - targetWidth * 0.5);
      const y = window.innerHeight - paddingTop - paddingBottom - width * 0.5;
      return {
        x,
        y,
        scale
      };
    },
    ready() {
      // 监听 playing 这个事件可以确保慢网速或者快速切换歌曲导致的 DOM Exception
      this.songReady = true;
    },
    error() {
      clearTimeout(this.timer);
      this.songReady = true;
    },
    updateTime(e) {
      this.currentTime = e.target.currentTime;
    },
    end() {
      this.currentTime = 0;
    },
    paused() {
      this.setPlayingState(false);
    },
    _pad(num, n = 2) {
      let len = num.toString().length;
      while (len < n) {
        num = "0" + num;
        len++;
      }
      return num;
    },
    format(interval) {
      interval = interval | 0;
      const minute = (interval / 60) | 0;
      const second = this._pad(interval % 60);
      return `${minute}:${second}`;
    },
    // 切换暂停播放
    togglePlaying() {
      if (!this.songReady) {
        return;
      }
      this.setPlayingState(!this.playing);
    },
    // 切换上一首歌
    prev() {
      if (!this.songReady) {
        return;
      }
      if (this.playlist.length === 1) {
        this.loop();
      } else {
        let index = this.currentIndex - 1;
        if (index < 0) {
          index = this.playlist.length - 1;
        }
        this.setCurrentIndex(index);
        if (!this.playing) {
          this.togglePlaying();
        }
      }
    },
    // 切换下一首歌
    next() {
      if (!this.songReady) {
        return;
      }
      if (this.playlist.length === 1) {
        this.loop();
      } else {
        let index = this.currentIndex + 1;
        if (index === this.playlist.length) {
          index = 0;
        }
        this.setCurrentIndex(index);
        if (!this.playing) {
          this.togglePlaying();
        }
      }
    },
    // 循环播放
    loop() {
      this.$refs.audio.currentTime = 0;
      this.$refs.audio.play();
      this.setPlayingState(true);
    },
    onProgressBarChange(percent) {
      const currentTime = this.currentSong.duration * percent;
      this.currentTime = this.$refs.audio.currentTime = currentTime;
    },
    onProgressBarChanging(percent) {
      const currentTime = this.currentSong.duration * percent;
      this.currentTime = this.$refs.audio.currentTime = currentTime;
      if (!this.playing) {
        this.togglePlaying();
      }
    },
    ...mapMutations({
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX",
      setFullScreen: "SET_FULL_SCREEN"
    })
  },
  computed: {
    cdCls() {
      return this.playing ? "play" : "";
    },
    disableCls() {
      return this.songReady ? "" : "disable";
    },
    playIcon() {
      return this.playing ? "icon-zanting" : "icon-bofang_huaban1";
    },
    // 播放进度的百分比
    percent() {
      return this.currentTime / this.currentSong.duration;
    },
    ...mapGetters([
      "playing",
      "playlist",
      "fullScreen",
      "currentSong",
      "currentIndex"
    ])
  },
  watch: {
    currentSong(newSong, oldSong) {
      if (!newSong.id || newSong.id === oldSong.id) {
        return;
      }
      this.songReady = false;
      this.url = this.currentSong.url;
      this.duration = this.currentSong.duration;
    },
    url(newVal) {
      this.$refs.audio.src = newVal;
      this.$refs.audio.play();
      // 若歌曲 5s 未播放，则认为超时，修改状态确保可以切换歌曲。
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.songReady = true;
      }, 5000);
    },
    playing(newStatus) {
      if (!this.songReady) {
        return;
      }
      const audio = this.$refs.audio;
      this.$nextTick(() => {
        newStatus ? audio.play() : audio.pause();
      });
    }
  },
  components: {
    ProgressBar,
    ProgressCircle
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
      .time {
        flex: 0 0 30px;
        width: 30px;
        line-height: 30px;
        color: $white;
        font-size: $font-size-small;
        &.time-l {
          text-align: left;
        }
        &.time-r {
          text-align: right;
        }
      }
      .progress-bar-wrapper {
        flex: 1;
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
        .play-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          margin: -21px 0 0 -20px;
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
        &.disable {
          opacity: 0.5;
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
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);
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
  .control {
    flex: 0 0 30px;
    width: 30px;
    padding: 0 10px;
    box-sizing: content-box;
    .icon-zanting {
      position: absolute;
      top: 4px;
      left: 4px;
      font-size: 22px;
      color: $light-orange;
      // opacity: .5;
    }
    .icon-bofangliebiao {
      font-size: 26px;
      color: $light-orange;
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