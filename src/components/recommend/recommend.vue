<template>
  <div class="recommend">
    <Search></Search>
    <div class="recommend-wrapper">
      <!-- <Scroll class="recommend-content"> -->
      <div>
        <div class="recommend-item recommend-newest-album">
          <h2>Album</h2>
          <Scroll :scrollX="true" class="album-wrapper" :data="newestAlbum">
            <div class="newest-album" ref="newestAlbum">
              <div class="album-item" v-for="item in newestAlbum" :key="item.id">
                <img :src="item.blurPicUrl" />
                <p class="album-name">{{ item.name }}</p>
                <p class="album-artist">{{ item.artist.name}}</p>
              </div>
            </div>
          </Scroll>
        </div>
        <div class="recommend-item">
          <h2>For you</h2>
        </div>
      </div>
      <!-- <Slider>
        <div class="slider-item" v-for="item in bannerList" :key="item.targetId">
          <a :href="item.url">
            <img :src="item.imageUrl" alt />
          </a>
        </div>
      </Slider>-->
      <!-- </Scroll> -->
    </div>
  </div>
</template>

<script>
import Search from "@/search/search";
import Scroll from "base/scroll/scroll";
// import Slider from "base/slider/slider";
import { getNewestAlbum } from "api/recommend";
import { ERR_OK } from "api/config";
export default {
  data() {
    return {
      newestAlbum: [],
      bannerList: []
    };
  },
  created() {
    this._getNewestAlbum();
    // this._setSliderWidth();
  },
  methods: {
    _getNewestAlbum() {
      getNewestAlbum().then(res => {
        if (res.data.code === ERR_OK) {
          this.newestAlbum = res.data.albums;
        }
      });

      // getBanner().then(res => {
      //   if (res.data.code === ERR_OK) {
      //     this.bannerList = res.data.banners.slice(5);
      //   }
      // });
    }
  },
  watch: {
    newestAlbum() {
      let length = this.newestAlbum.length;
      let width = 160 * length;
      this.$refs.newestAlbum.style.width = width + "px";
    }
  },
  components: {
    Search,
    Scroll
    // Slider
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
  .recommend-wrapper {
    h2 {
      margin: 20px auto;
      width: 90%;
      color: $black;
    }
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
      width: 160px;
      height: 210px;
      img {
        width: 120px;
        height: 120px;
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
        font-size: 14px;
        color: $gray;
      }
    }
  }
}
</style>