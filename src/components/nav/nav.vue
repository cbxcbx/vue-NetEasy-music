<template>
  <transition name="nav" appear>
    <div class="nav">
      <div class="nav-content">
        <div class="search-container">
          <span class="iconfont icon-chazhao"></span>
          <input type="text" placeholder="Search" />
        </div>
        <div class="nav-list">
          <div class="nav-item">
            <router-link tag="span" class="nav-icon iconfont icon-yinle" to="/home"></router-link>
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
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";

.nav-enter-active,
.nav-leave-active {
  transition: all 0.5s;
}

.nav-enter,
.nav-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

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
    padding: 15px 10px 0 40px;

    .search-container {
      position: relative;
      width: 30%;

      .icon-chazhao {
        position: absolute;
        top: 50%;
        left: 5px;
        color: $white;
        font-size: 20px;
        transform: translateY(-50%);
      }

      input {
        width: 100%;
        height: 35px;
        padding-left: 35px;
        border: none;
        outline: none;
        border-radius: 15px;
        background-color: #f29a67;
        color: $white;
        &::placeholder {
          color: $white;
        }
      }
    }

    .nav-list {
      display: flex;
      width: 70%;
      justify-content: center;
      align-items: center;

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
