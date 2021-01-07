<template>
  <div class="homepage">
    <div class="enjoy-your-music">
      <img src="./enjoy-icon.png" class="enjoy-icon" />
      <div class="text">
        <p>Enjoy your music</p>
        <p>with me</p>
      </div>
    </div>
    <div class="login-register-btn-wrapper">
      <button class="normal-btn bg-orange" @click="setStatus('register')">Sign up</button>
      <button class="normal-btn bg-white" @click="setStatus('login')">Sign in</button>
    </div>
    <transition name="popup">
      <div class="popup-wrapper" v-show="currentComponent !==''">
        <keep-alive>
          <component :is="currentComponent"></component>
        </keep-alive>
      </div>
    </transition>
    <div class="modal" @click.self="resetStatus" v-show="currentComponent !==''"></div>
  </div>
</template>

<script>
import Login from "@/login/login";
import Register from "@/register/register";
export default {
  data() {
    return {
      currentComponent: ""
    };
  },
  methods: {
    resetStatus() {
      this.currentComponent = "";
    },
    setStatus(param) {
      if (!param || typeof param !== "string") {
        return;
      }
      this.currentComponent = param;
    }
  },
  components: {
    Login,
    Register
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";

.homepage {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-image: url("./ocean.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  .enjoy-your-music {
    margin: 0 auto;
    padding-top: 80px;
    width: 65vw;
    .enjoy-icon {
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }
    .text {
      margin-top: 30px;
    }
    p {
      color: $white;
      font-size: 28px;
      font-weight: bold;
      &:last-child {
        margin-top: 10px;
      }
    }
  }

  .login-register-btn-wrapper {
    position: absolute;
    left: 50%;
    bottom: 65px;
    max-width: 250px;
    width: 85vw;
    transform: translateX(-50%);
    z-index: 1;
  }

  .popup-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    min-height: 60%;
    max-height: 85%;
    padding: 40px 25px;
    background-color: $white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 2;
  }
}

.popup-enter-active {
  transition: transform 0.7s;
}
.popup-leave-active {
  transition: transform 1s;
}
.popup-enter,
.popup-leave-to {
  transform: translateY(100%);
}
</style>