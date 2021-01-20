<template>
  <div class="discovery">
    <Scroll class="discovery-content" :data="personalizedList">
      <div>
        <div class="slider-wrapper">
          <div v-if="bannerList.length" class="slider-content">
            <Slider>
              <div
                class="slider-item"
                v-for="item in bannerList"
                :key="item.targetId"
              >
                <a :href="item.url">
                  <img :src="item.imageUrl" alt />
                </a>
              </div>
            </Slider>
          </div>
        </div>
        <div class="tab">
          <div class="tab-item" v-for="icon in iconList" :key="icon.id">
            <img :src="icon.iconUrl">
            <router-link tag="span" class="nav-icon" :to="icon.url"
              >{{ icon.name }}</router-link
            >
          </div>
        </div>
        <div class="personalized-list">
          <h1>推荐歌单</h1>
          <ul>
            <li
              v-for="item in personalizedList"
              :key="item.id"
              class="list-item"
            >
              <div class="image">
                <div class="gradients"></div>
                <img :src="item.picUrl" />
              </div>
              <div class="play-count">
                <span class="iconfont icon-shiting"></span>
                <span>{{ Math.floor(item.playCount / 10000) }}万</span>
              </div>
              <div class="text">
                <p class="name">{{ item.name }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "base/scroll/scroll";
import Slider from "base/slider/slider";
import { getBanner, getDragonBall, getPersonalized } from "api/discovery";
import { ERR_OK } from "api/config";
export default {
  data() {
    return {
      bannerList: [],
      iconList: [],
      personalizedList: []
    };
  },
  created() {
    setTimeout(() => {
      this._getBanner();
      this._getDragonBall();
      this._getPersonalized();
    }, 20);
  },
  methods: {
    _getBanner() {
      getBanner().then(res => {
        if (res.data.code === ERR_OK) {
          this.bannerList = res.data.banners.slice(0, 5);
        }
      });
    },
    _getDragonBall() {
      getDragonBall().then(res => {
        if (res.data.code === ERR_OK) {
          console.log(res.data);
          this.iconList = res.data.data;
        }
      });
    },
    _getPersonalized() {
      getPersonalized().then(res => {
        if (res.data.code === ERR_OK) {
          // console.log(res.data);
          this.personalizedList = res.data.result;
        }
      });
    }
  },
  components: {
    Scroll,
    Slider
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";
.discovery {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 80px;
  .discovery-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 37%;
      overflow: hidden;
      .slider-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .personalized-list {
      h1 {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $orange;
      }
      .list-item {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: 33%;
        padding: 0 1%;
        .image {
          position: relative;
          display: inline-block;
          width: 100%;
          margin-bottom: 5px;
          .gradients {
            position: absolute;
            top: 0;
            width: 100%;
            height: 35px;
            border-radius: 3px;
            background: linear-gradient(
              rgba(109, 109, 109, 0.4),
              rgba(255, 255, 255, 0)
            );
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 3px;
          }
        }
        .play-count {
          position: absolute;
          top: 5px;
          right: 8px;
          font-size: 10px;
          color: #f1f1f1;
          .icon-shiting {
            margin-right: 5px;
            font-size: 12px;
          }
        }
        .text {
          float: left;
          margin-bottom: 10px;
          text-align: left;
          height: 40px;
          line-height: 16px;
          overflow: hidden;
          font-size: 12px;
        }
      }
    }
  }
}
</style>