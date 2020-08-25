<template>
  <div class="nav">
    <router-link tag="div" class="nav-item" to="/recommend">
      <span class="nav-link">Recommend</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/singer">
      <span class="nav-link">Singer</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/rank">
      <span class="nav-link">Rank</span>
    </router-link>
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
  display: flex;
  background-color: $light-orange;
  height: 100px;
  border-radius: 25px 25px 0 0;
  .nav-item {
    flex: 1;
  }
}
</style>
