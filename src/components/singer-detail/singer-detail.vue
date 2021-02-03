<template>
  <transition appear name="fade">
    <music-list></music-list>
  </transition>
</template>

<script>
import MusicList from "@/music-list/music-list";
export default {
  data() {
    return {};
  },
  components: {
    MusicList
  }
};
</script>
<style lang="scss" scoped>

</style>
