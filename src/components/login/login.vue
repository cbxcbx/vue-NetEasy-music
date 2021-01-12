<template>
  <div class="login">
    <div class="login-header">
      <h1>Welcome Back</h1>
    </div>
    <div class="login-content">
      <div class="field-item">
        <label>Phone</label>
        <div class="item-content">
          <i class="iconfont icon-phone2"></i>
          <input type="text" placeholder="输入手机号码" />
        </div>
      </div>
      <div class="field-item">
        <label>Password</label>
        <div class="item-content">
          <i class="iconfont icon-key"></i>
          <input type="text" placeholder="输入密码" />
        </div>
      </div>
      <button class="normal-btn bg-orange">Sign in</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login {
  .login-header {
    h1 {
      font-size: 28px;
    }
  }
  .login-content {
    margin-top: 50px;
  }
}
</style>