<template>
  <div id="app">
    <Nav v-show="isLogin"></Nav>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Nav from "@/nav/nav";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLogin"])
  },
  components: {
    Nav
  }
};
</script>
<style lang="scss" scoped>
</style>
