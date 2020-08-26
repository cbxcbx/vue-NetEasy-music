<template>
  <div class="nav">
    <div class="nav-content">
      <div class="search-container">
        <input type="text" />
      </div>
      <div class="nav-list">
        <div class="nav-item">
          <router-link tag="span" class="nav-icon iconfont icon-yinle" to="/recommend"></router-link>
        </div>
        <div class="nav-item">
          <router-link tag="span" class="nav-icon iconfont icon-paihang" to="/rank"></router-link>
        </div>
        <div class="nav-item">
          <router-link tag="span" class="nav-icon iconfont icon-flyme_icon-" to="/singer"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";

.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: $light-orange;
  height: 80px;
  border-radius: 25px 25px 0 0;

  .nav-content {
    display: flex;
    padding: 23px 10px 0 40px;

    .search-container {
      width: 30%;
      input {
        width: 100%;
      }
    }

    .nav-list {
      display: flex;
      justify-content: center;
      width: 70%;

      .nav-item {
        flex: 1;
        color: $white;
        text-align: center;
      }

      .nav-icon {
        font-size: $font-size-large-x;
        font-weight: bold;
      }
    }
  }
}
</style>
