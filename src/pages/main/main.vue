<template>
  <div class="main">
    <Mheader></Mheader>
    <UserCenter></UserCenter>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Player></Player>
    <Nav></Nav>
  </div>
</template>

<script>
import Mheader from "@/header/header";
import UserCenter from "@/user-center/user-center";
import Nav from "@/nav/nav";
import Player from "@/player/player";

export default {
  created() {
  },
  components: {
    Mheader,
    UserCenter,
    Nav,
    Player
  }
};
</script>
<style lang="scss" scoped>
</style>
