<template>
  <div class="search-list" v-show="searches.length">
    <transition-group name="list" tag="ul">
      <li v-for="item in searches" :key="item" class="search-item">
        <span class="text">{{ item }}</span>
        <span class="icon">
          <i class="iconfont icon-guanbi"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    searches: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>