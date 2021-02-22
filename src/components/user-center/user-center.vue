<template>
  <transition appear name="user-fade">
    <div class="user-center" v-show="showUserCenter" @click="hide">
      <div class="user-wrapper" @click.stop>
        <div class="back">
          <i class="iconfont icon-back" @click="hide"></i>
        </div>
        <div class="bg-image" :style="bgImage"></div>
        <div class="profile" v-if="user.userId">
          <div class="profile-item profile-detail">
            <img v-lazy="user.avatarUrl" width="70" height="70" class="image" />
            <div class="nickname">{{ user.nickname }}</div>
            <div class="signature">{{ user.signature }}</div>
          </div>
          <div class="profile-item btn" @click="logOut">
            <span>退出登录</span>
          </div>
        </div>
        <div class="profile-item btn" @click="goToLogin" v-if="!user.userId">
          <span>去登录</span>
        </div>
      </div>
      <div class="loading-container" v-show="isLoading">
        <loading></loading>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { loginStatus, logout } from "api/user/login";
import { ERR_OK } from "api/config";
import { getLoginToken } from "common/js/util/getToken";
import Loading from "base/loading/loading";
export default {
  data() {
    return {
      isLoading: false,
      isLogin: false,
      imgUrl: require("../../assets/images/default.png")
    };
  },
  methods: {
    hide() {
      this.setShowUserCenter(false);
    },
    _getUserDetail() {
      this.isLogin = getLoginToken();
      if (this.isLogin) {
        this.isLoading = true;
        loginStatus()
          .then(res => {
            if (res.data.data.code === ERR_OK) {
              this.setUser(res.data.data.profile);
              this.isLoading = false;
            }
          })
          .catch(err => {
            this.isLoading = false;
            console.log(err);
          });
      } else {
        this.setUser({});
      }
    },
    logOut() {
      this.isLoading = true;
      logout()
        .then(res => {
          if (res.data.code === ERR_OK) {
            this.isLoading = false;
            this.setUser({});
            this.hide();
            this.$message({
              type: "success",
              message: "已登出"
            });
          }
        })
        .catch(err => {
          this.isLoading = false;
          this.$message({
            type: "error",
            message: err
          });
        });
    },
    goToLogin() {
      this.setShowUserCenter(false);
      this.$router.push({
        path: "/user-login"
      });
    },
    ...mapMutations({
      setUser: "SET_USER",
      setShowUserCenter: "SET_SHOW_USER_CENTER"
    })
  },
  computed: {
    bgImage() {
      if (this.isLogin) {
        return `background-image: url(${this.user.backgroundUrl})`;
      } else {
        return `background-image: url(${this.imgUrl})`;
      }
    },
    ...mapGetters(["showUserCenter", "user"])
  },
  components: {
    Loading
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";
@import "common/style/mixins.scss";

.user-center {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #eee;
    .back {
      position: absolute;
      top: 0;
      left: 6px;
      z-index: 50;
      .icon-back {
        display: block;
        padding: 10px;
        font-size: $font-size-large-x;
        color: $color-white;
      }
    }
    .bg-image {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 60%;
      background-size: cover;
    }
    .profile-item {
      margin: 20px auto 0;
      width: 90%;
      background-color: $color-white;
      border-radius: 15px;
      &.btn {
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: $color-red-m;
      }
    }
    .profile {
      .profile-detail {
        position: relative;
        margin: -20px auto 0;
        z-index: 1;
        text-align: center;

        .image {
          margin-top: -45px;
          border-radius: 50%;
        }

        .nickname {
          margin-top: 10px;
        }

        .signature {
          padding: 20px 30px;
          font-size: $font-size-small;
          color: $color-gray;
          @include no-wrap();
        }
      }
    }
  }
}
</style>