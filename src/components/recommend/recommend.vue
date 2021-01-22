<template>
  <transition name="fade" appear>
    <div class="recommend">
      <div class="recommend-wrapper">
        <!-- <Scroll class="recommend-content"> -->
        <div>
          <div class="recommend-item recommend-header">
            <div class="back-btn">
              <i class="iconfont icon-back" @click="goback"></i>
            </div>
            <Search></Search>
          </div>
          <div class="recommend-item recommend-newest-album">
            <h2>Album</h2>
            <Scroll :scrollX="true" class="album-wrapper" :data="newestAlbum">
              <div class="newest-album" ref="newestAlbum">
                <div class="album-item" v-for="item in newestAlbum" :key="item.albumId">
                  <img v-lazy="item.coverUrl" width="120" height="120"/>
                  <p class="album-name">{{ item.albumName }}</p>
                  <p class="album-artist">{{ item.artistName}}</p>
                </div>
              </div>
            </Scroll>
          </div>
          <div class="recommend-item">
            <h2>For you</h2>
          </div>
        </div>
        <div class="loading-container" v-show="!newestAlbum.length">
          <loading></loading>
        </div>
        <!-- </Scroll> -->
      </div>
    </div>
  </transition>
</template>

<script>
import Scroll from "base/scroll/scroll";
import Search from "@/search/search";
import loading from "base/loading/loading";
import { getAlbum } from "api/discovery";
import { ERR_OK } from "api/config";
export default {
  data() {
    return {
      newestAlbum: [],
      bannerList: []
    };
  },
  created() {
    this._getAlbum();
  },
  methods: {
    _getAlbum() {
      getAlbum().then(res => {
        if (res.data.code === ERR_OK) {
          // console.log(res.data);
          this.newestAlbum = res.data.products.slice(0, 10);
        }
      });
    },
    goback() {
      this.$router.go(-1);
    }
  },
  watch: {
    newestAlbum() {
      let length = this.newestAlbum.length;
      let width = 140 * length;
      this.$refs.newestAlbum.style.width = width + "px";
    }
  },
  components: {
    Scroll,
    Search,
    loading
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";
.recommend {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 80px;
  z-index: 2;
  background-color: $bg-color;
  .recommend-wrapper {
    h2 {
      margin: 20px auto;
      width: 90%;
      color: $black;
    }
    .recommend-header {
      .icon-back {
        display: inline-block;
        padding: 10px;
        font-size: 22px;
        color: $orange;
      }
    }
    .recommend-newest-album {
      .album-wrapper {
        width: 90%;
        margin: 0 auto;
        // white-space: nowrap;
      }
      .newest-album {
        display: flex;
      }
      .album-item {
        display: inline-block;
        padding-right: 20px;
        width: 140px;
        height: 210px;
        img {
          border-radius: 10%;
        }
        .album-name {
          width: 90%;
          margin-top: 10px;
          font-size: 15px;
          line-height: 1.5;
        }
        .album-artist {
          width: 90%;
          margin-top: 10px;
          font-size: $font-size-medium;
          color: $gray;
        }
      }
    }
  }
  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>