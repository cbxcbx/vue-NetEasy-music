<template>
  <div class="header">
    <div class="icon">
      <i class="iconfont icon-list"></i>
    </div>
    <div>
      <p class="title">MUSIC</p>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>