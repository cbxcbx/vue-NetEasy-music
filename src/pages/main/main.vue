<template>
  <div class="main">
    <Mheader></Mheader>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Nav></Nav>
  </div>
</template>

<script>
import Mheader from "@/header/header";
import Nav from "@/nav/nav";
export default {
  components: {
    Mheader,
    Nav
  }
};
</script>
<style lang="scss" scoped>
</style>
