<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
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
