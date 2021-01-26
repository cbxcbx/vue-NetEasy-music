<template>
  <Scroll class="list-view" :data="data">
    <ul>
      <li v-for="(group,index) in data" :key="index" class="list-group">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="(item,index) in group.items" class="list-group-item" :key="index">
            <img v-lazy="item.avatar" class="avatar" width="50" height="50" />
            <span class="singer-name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut">
      <ul>
        <li v-for="(item,index) in shortcutList" class="item" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="loading-container" v-show="!data.length">
      <Loading></Loading>
    </div>
  </Scroll>
</template>

<script>
import Loading from "base/loading/loading";
import Scroll from "base/scroll/scroll";
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {
    shortcutList() {
      return this.data.map(group => {
        return group.title.substr(0, 1);
      });
    }
  },
  components: {
    Scroll,
    Loading
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";
.list-view {
  height: 100%;
  overflow: hidden;
  background-color: $singer-list-bg;
  .list-group {
    .list-group-title {
      margin-bottom: 10px;
      padding-left: 12px;
      height: 25px;
      line-height: 25px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $light-orange;
    }
    .list-group-item {
      display: flex;
      align-items: center;
      margin: 0 5px;
      padding: 5px 0;
      border-bottom: 1px solid $list-item-border-bottom;
      .avatar {
        border-radius: 5px;
      }

      .singer-name {
        margin-left: 20px;
        color: $black;
        font-size: $font-size-medium;
      }
      &:last-child {
        border: none;
        margin-bottom: 10px;
      }
    }
  }
  .list-shortcut {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    padding: 20px 0;
    width: 20px;
    border-radius: 10px;
    text-align: center;
    background-color: $light-orange;
    .item {
      padding: 3px;
      line-height: 1;
      font-size: 12px;
      color: $color-text-l;
    }
  }
}
</style>