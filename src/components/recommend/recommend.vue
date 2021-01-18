<template>
  <div class="recommend">
    <Search></Search>
    <div class></div>
  </div>
</template>

<script>
import Search from "@/search/search";
export default {
  components: {
    Search
  }
};
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 80px;
}
</style>