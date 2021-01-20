<template>
  <div class="home">
    <div class="header">
      <div class="icon">
        <i class="iconfont icon-list"></i>
      </div>
      <div>
        <p class="title">MUSIC</p>
      </div>
    </div>
    <div class="content">
      <Discovery></Discovery>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Discovery from "@/discovery/discovery";
export default {
  components: {
    Discovery
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";
.header {
  position: relative;
  height: 44px;
  .icon {
    position: absolute;
    top: 0;
    left: 0;
    .icon-list {
      display: block;
      padding: 11px;
      font-size: 22px;
      font-weight: bold;
      color: $orange;
    }
  }
  .title {
    width: 100%;
    line-height: 44px;
    font-size: 16px;
    color: $orange;
    font-weight: bold;
    text-align: center;
    letter-spacing: 3px;
  }
}
.tab {
  display: flex;
  margin: 0 5vw;
  padding: 10px 0;
  height: 60px;
  line-height: 40px;
  font-size: $font-size-medium-x;
  text-align: center;
  .tab-item {
    flex: 1;
  }
}
</style>