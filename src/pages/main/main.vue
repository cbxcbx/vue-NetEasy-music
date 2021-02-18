<template>
  <div class="main">
    <Mheader></Mheader>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Player ref="player"></Player>
    <Nav ref="nav"></Nav>
  </div>
</template>

<script>
import Mheader from "@/header/header";
import Nav from "@/nav/nav";
import Player from "@/player/player";
import { playlistMixin } from "common/js/mixin/mixin";
export default {
  mixins: [playlistMixin],
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? "60px" : "";

      this.$refs.recommend.style.bottom = bottom;
      // this.$refs.scroll.refresh();
    }
  },
  created() {
    if (this.$refs.nav) {
      console.log(1);
    } else {
      console.log(2);
    }
  },
  components: {
    Mheader,
    Nav,
    Player
  }
};
</script>
<style lang="scss" scoped>
</style>
