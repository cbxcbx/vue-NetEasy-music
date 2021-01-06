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
      <button class="sign-up-btn" @click="setStatus('register')">Sign Up</button>
      <button class="sign-in-btn" @click="setStatus('login')">Sign in</button>
    </div>
    <transition name="popup">
      <div class="popup-wrapper" v-show="currentComponent !=='' ">
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
    margin-left: -125px;
    width: 250px;
    z-index: 1;
    button {
      width: 100%;
      padding: 20px 10px;
      font-size: 16px;
      font-weight: bold;
      outline: none;
      border: none;
      border-radius: 25px;
      background-color: transparent;
    }
    .sign-up-btn {
      margin-bottom: 15px;
      color: $white;
      background-color: $login-btn;
    }
    .sign-in-btn {
      color: $login-btn;
      background-color: $white;
    }
  }

  .popup-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    min-height: 60%;
    background-color: $white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    z-index: 3;
  }
}

.popup-enter-active,
.popup-leave-active {
  transition: transform 0.7s;
}

.popup-enter,
.popup-leave-to {
  transform: translateY(100%);
}
</style>