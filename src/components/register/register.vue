<template>
  <Scroll class="register-wrapper" ref="registerWrapper">
    <div class="register">
      <div class="register-header">
        <h1>New Account</h1>
      </div>
      <div class="register-content">
        <div class="field-item">
          <label>Phone</label>
          <div class="item-content" :class="{ error: numberError }">
            <i class="iconfont icon-9kaobei"></i>
            <input type="text" placeholder="输入手机号码" v-model="phoneNumber" />
          </div>
          <div class="error-message" v-show="numberError">Incorrect phone number format</div>
        </div>
        <div class="field-item">
          <label>Nickname</label>
          <div class="item-content" :class="{ error: nickNameError }">
            <i class="iconfont icon-username"></i>
            <input placeholder="输入昵称" v-model="nickname" />
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
            <input type="password" placeholder="输入密码" v-model="password" />
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
            <input type="text" placeholder="输入验证码" />
            <span
              class="sent-captcha"
              type="text"
              v-show="showSentCaptcha"
              @click="sentCaptcha"
            >获取验证码</span>
            <span v-show="!showSentCaptcha" class="resentTime">{{ resentTime }} s</span>
            <div></div>
            <div class="error-message" v-show="verificationError">Incorrect verification code</div>
          </div>
        </div>
        <button class="normal-btn bg-orange" @click="registerUser">Sign up</button>
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "base/scroll/scroll";

const TIME_COUNT = 60;

export default {
  data() {
    return {
      phoneNumber: "",
      nickname: "",
      password: "",
      code: 0,
      resentTime: 0,
      showSentCaptcha: true,
      numberError: false,
      nickNameError: false,
      passwordError: false,
      verificationError: false
    };
  },
  methods: {
    // 验证手机格式是否正确
    isPhoneNumber(phoneNumber) {
      if (!phoneNumber) return false;
      let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      return reg.test(phoneNumber);
    },
    // 验证昵称是否正确，4-30位，由中文数字字母 - _组成
    validateNickName(nickname) {
      // if (!nickname) return false;
      let reg = /^[\u4E00-\u9FA5A-Za-z0-9_-]{4,30}$/;
      return reg.test(nickname);
    },
    // 验证密码格式是否正确
    validatePassword(password) {
      if (!password) return false;
      let reg = /^\w{4,12}$/;
      return reg.test(password);
    },
    // 验证手机验证码
    validateVerificationCode(code) {
      if (!code) return false;
      let reg = /^\d{6}$/;
      return reg.test(code);
    },
    sentCaptcha() {
      if (!this.timer) {
        this.resentTime = TIME_COUNT;
        this.showSentCaptcha = false;
        this.timer = setInterval(() => {
          if (this.resentTime > 0 && this.resentTime <= TIME_COUNT) {
            this.resentTime--;
          } else {
            this.showSentCaptcha = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },

    registerUser() {
      if (
        !this.isPhoneNumber(this.phoneNumber) ||
        !this.validateNickName(this.nickname) ||
        !this.validatePassword(this.password) ||
        !this.validateVerificationCode(this.code)
      ) {
        console.log("1", this.isPhoneNumber(this.phoneNumber));
        console.log("2", this.validateNickName(this.nickname));
        console.log("3", this.validatePassword(this.password));
        console.log("4", this.validateVerificationCode(this.password));
        this.$message({
          message: "信息填写不正确",
          type: "error"
        });
        return false;
      }
    },
    refresh() {
      setTimeout(() => {
        this.$refs.registerWrapper.refresh();
      }, 20);
    }
  },
  watch: {
    phoneNumber(newValue, oldValue) {
      if (!newValue || !this.isPhoneNumber(newValue)) {
        this.numberError = true;
      } else {
        this.numberError = false;
      }
      this.refresh();
    },
    nickname(newValue, oldValue) {
      if (!newValue || !this.validateNickName(newValue)) {
        this.nickNameError = true;
      } else {
        this.nickNameError = false;
      }
      this.refresh();
    },
    password(newValue, oldValue) {
      if (!newValue || !this.validatePassword(newValue)) {
        this.passwordError = true;
      } else {
        this.passwordError = false;
      }
      this.refresh();
    },
    code(newValue, oldValue) {
      if (!newValue || !this.validateVerificationCode(newValue)) {
        this.verificationError = true;
      } else {
        this.verificationError = false;
      }
      this.refresh();
    }
  },
  components: {
    Scroll
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";
.register-wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
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

      .sent-captcha {
        font-size: 14px;
        color: $light-orange;
      }
      .resentTime {
        font-size: 14px;
        color: #8590a6;
      }
    }
  }
  .scroll-item {
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    text-align: center;
    &:nth-child(2n) {
      background-color: #f3f5f7;
    }
    &:nth-child(2n + 1) {
      background-color: #42b983;
    }
  }
}
</style>