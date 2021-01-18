<template>
  <div class="homepage">
    <keep-alive>
      <router-view />
    </keep-alive>
    <Nav></Nav>
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
