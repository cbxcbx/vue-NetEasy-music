<template>
  <transition appear name="fade">
    <div class="search">
      <div class="search-wrapper">
        <div class="back">
          <i class="iconfont icon-back" @click="hide"></i>
        </div>
        <div class="search-box-wrapper">
          <search-box ref="searchBox" @query="onQueryChange"></search-box>
        </div>
        <div class="shortcut-wrapper">
          <scroll :data="hotKey" class="shortcut">
            <div>
              <div class="hot-key">
                <h1 class="title">热门搜索</h1>
                <ul>
                  <li
                    v-for="(item, index) in hotKey"
                    :key="index"
                    class="item"
                    @click="addQuery(item.first)"
                  >
                    <span>{{ item.first }}</span>
                  </li>
                </ul>
              </div>
              <div class="search-history" v-show="searchHistory.length">
                <h1 class="title">
                  <span class="text">搜索历史</span>
                  <span class="clear">
                    <i class="iconfont icon-aaaziyuan"></i>
                  </span>
                </h1>
                <search-list :searches="searchHistory"></search-list>
              </div>
            </div>
          </scroll>
        </div>
        <div class="search-result"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import Scroll from "base/scroll/scroll";
import searchBox from "base/search-box/search-box";
import searchList from "base/search-list/search-list";
import { getSearchHot } from "api/search";
import { ERR_OK } from "api/config";
import { searchMixin } from "common/js/mixin/mixin";
export default {
  mixins: [searchMixin],
  data() {
    return {
      hotKey: []
    };
  },
  methods: {
    hide() {
      this.$router.back();
    },
    _getHotKey() {
      getSearchHot().then(res => {
        if (res.data.code === ERR_OK) {
          this.hotKey = res.data.result.hots;
        }
      });
    }
  },
  computed: {
    shortcut() {
      return this.hotKey.concat(this.searchHistory);
    }
  },
  components: {
    Scroll,
    searchBox,
    searchList
  },
  created() {
    this._getHotKey();
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";

.search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-bg-1;
  z-index: 97;
  .back {
    .icon-back {
      display: block;
      padding: 10px 10px 10px 16px;
      font-size: 22px;
      color: $color-orange-s;
    }
  }

  .search-box-wrapper {
    margin: 20px;
  }

  .shortcut-wrapper {
    position: fixed;
    top: 133px;
    bottom: 0;
    width: 100%;
    .hot-key {
      margin: 0 20px 20px;
      .title {
        margin-bottom: 20px;
        font-size: $font-size-medium;
        color: $color-gray;
      }
      .item {
        display: inline-block;
        padding: 5px 10px;
        margin: 0 20px 10px 0;
        border-radius: 6px;
        background: $color-white;
        font-size: $font-size-medium;
        color: $color-gray;
      }
    }
  }
}
</style>