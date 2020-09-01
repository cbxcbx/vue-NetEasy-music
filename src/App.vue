<template>
  <div id="app">
    <Nav></Nav>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Nav from "@/nav/nav";
export default {
  components: {
    Nav
  }
};
</script>
<style lang="scss" scoped>
</style>
