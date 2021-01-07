<template>
  <div class="register">
    <div class="register-header">
      <h1>New Account</h1>
    </div>
    <div class="register-content">
      <div class="field-item">
        <label>Phone</label>
        <div class="item-content" :class="{ error: numberError}">
          <i class="iconfont icon-9kaobei"></i>
          <input type="text" placeholder="Please enter the phone number" v-model="phoneNumber" />
        </div>
        <div class="error-message">Incorrect phone number format</div>
      </div>
      <div class="field-item">
        <label>Username</label>
        <div class="item-content">
          <i class="iconfont icon-username"></i>
          <input placeholder="please enter user name" />
        </div>
      </div>
      <div class="field-item">
        <label>Password</label>
        <div class="item-content">
          <i class="iconfont icon-key"></i>
          <input type="text" placeholder="Please enter password" />
        </div>
      </div>
      <div class="field-item">
        <label>Verification code</label>
        <div class="item-content">
          <i class="iconfont icon-mima"></i>
          <input type="text" placeholder="Please enter the phone verification code" />
        </div>
      </div>
      <button class="normal-btn bg-orange">Sign up</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "",
      userName: "",
      passWord: "",
      code: 0,
      numberError: false
    };
  },
  watch: {
    phoneNumber(newValue, oldValue) {
      if (!newValue || typeof newVallue !== "number") {
        this.numberError = true;
      } else {
        this.numberError = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";
.register {
  .register-header {
    h1 {
      font-size: 28px;
    }
  }
  .register-content {
    margin-top: 50px;

    .error-message {
      margin-top: 10px;
      font-size: 16px;
      color: $error-message;
    }
  }
}
</style>