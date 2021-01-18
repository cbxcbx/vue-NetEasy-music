<template>
  <div class="search">
    <div class="search-content">
      <span class="iconfont icon-chazhao"></span>
      <input type="text" class="search-input" placeholder="Track, album, artist, podcast" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";
.search {
  margin-top: 25px;
  padding: 0 5vw;
  .search-content {
    position: relative;
    width: 100%;
    .icon-chazhao {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      color: $gray;
    }
    .search-input {
      padding: 20px 20px 20px 45px;
      width: 100%;
      color: $gray;
      background-color: $search-input-bg;
      outline: none;
      border: none;
      border-radius: 20px;
      &::-webkit-input-placeholder {
        color: $gray;
      }
    }
  }
}
</style>