<template>
  <div class="register">
    <div class="register-header">
      <h1>New Account</h1>
    </div>
    <div class="register-content">
      <div class="field-item">
        <label>Phone</label>
        <div class="item-content" :class="{ error: numberError }">
          <i class="iconfont icon-9kaobei"></i>
          <input
            type="text"
            placeholder="Please enter the phone number"
            v-model="phoneNumber"
          />
        </div>
        <div class="error-message" v-show="numberError">
          Incorrect phone number format
        </div>
      </div>
      <div class="field-item">
        <label>Nickname</label>
        <div class="item-content" :class="{ error: nickNameError }">
          <i class="iconfont icon-username"></i>
          <input placeholder="please enter nickname" v-model="nickname" />
        </div>
        <div class="error-message" v-show="nickNameError">
          Nickname is 4-30 characters, and does not contain special characters
          except-and _
        </div>
      </div>
      <div class="field-item">
        <label>Password</label>
        <div class="item-content" :class="{ error: passwordError }">
          <i class="iconfont icon-key"></i>
          <input
            type="text"
            placeholder="Please enter password"
            v-model="password"
          />
        </div>
        <div class="error-message" v-show="passwordError">
          Please enter the correct password, which consists of numbers and
          letters and underscores
        </div>
      </div>
      <div class="field-item">
        <label>Verification code</label>
        <div class="item-content">
          <i class="iconfont icon-mima"></i>
          <input
            type="text"
            placeholder="Please enter the phone verification code"
          />
        </div>
      </div>
      <button class="normal-btn bg-orange" @click="registerUser">
        Sign up
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "",
      nickname: "",
      password: "",
      code: 0,
      numberError: false,
      nickNameError: false,
      passwordError: false,
      verificationError: false
    };
  },
  methods: {
    // 验证手机格式是否正确
    isPhoneNumber(phoneNumber) {
      let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      return reg.test(phoneNumber);
    },
    // 验证昵称是否正确，4-30位，由中文数字字母 - _组成
    validateNickName(nickname) {
      let reg = /^[\u4E00-\u9FA5A-Za-z0-9_-]{4,30}$/;
      return reg.test(nickname);
    },
    // 验证密码格式是否正确
    validatePassword(password) {
      let reg = /^\w+$/;
      return reg.test(password);
    },
    validateVerificationCode(code) {

    },
    registerUser() {

    }
  },
  watch: {
    phoneNumber(newValue, oldValue) {
      if (!newValue || !this.isPhoneNumber(newValue)) {
        this.numberError = true;
      } else {
        this.numberError = false;
      }
    },
    nickname(newValue, oldValue) {
      if (!newValue || !this.validateNickName(newValue)) {
        this.nickNameError = true;
      } else {
        this.nickNameError = false;
      }
    },
    password(newValue, oldValue) {
      if (!newValue || !this.validatePassword(newValue)) {
        this.passwordError = true;
      } else {
        this.passwordError = false;
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