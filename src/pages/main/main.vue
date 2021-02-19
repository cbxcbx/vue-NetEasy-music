<template>
  <div class="main">
    <Mheader></Mheader>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Player></Player>
    <Nav></Nav>
  </div>
</template>

<script>
import Mheader from "@/header/header";
import Nav from "@/nav/nav";
import Player from "@/player/player";

export default {
  created() {
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
