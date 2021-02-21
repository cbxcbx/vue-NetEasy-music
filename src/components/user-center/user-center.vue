<template>
  <transition appear name="user-fade">
    <div class="user-center" v-show="showUserCenter" @click="hide">
      <div class="user-wrapper"></div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { getLoginToken } from "common/js/util/getToken";
export default {
  methods: {
    hide() {
      this.setShowUserCenter(false);
    },
    ...mapMutations({
      setShowUserCenter: 'SET_SHOW_USER_CENTER'
    })
  },
  computed: {
    ...mapGetters(['showUserCenter'])
  },
  created() {
    this.isLogin = getLoginToken();
  }
}
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";

.user-center {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 200;
  &.user-fade-enter-active,
  &.user-fade-leave-active {
    transition: opacity 0.3s;
    .user-wrapper {
      transition: all 0.3s;
    }
  }

  &.user-fade-enter,
  &.user-fade-leave-to {
    opacity: 0;
    .user-wrapper {
      transform: translate3d(-100%, 0, 0);
    }
  }
  .user-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 20%;
    bottom: 0;
    max-width: 300px;
    background-color: $color-white;
  }
}
</style>