<template>
  <div class="welcome">
    <div class="text-container">
      <p class="title">Add Your</p>
      <p class="text">Music</p>
    </div>
    <div class="welcome-bg">
      <img src="./people.png" />
    </div>
    <div class="btn-skip-wrapper">
      <span class="btn btn-skip">skip</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import 'common/style/variable.scss';

.welcome {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .text-container {
    flex: 0 0 50%;
    .title {
      margin-bottom: 10px;
      font-size: 30px;
      font-weight: 100;
    }

    .text {
      font-size: 30px;
      font-weight: bold;
      color: $black;
    }
  }

  .welcome-bg {
    flex: 0 0 30%;
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
  }

  .btn-skip-wrapper {
    position: relative;
    flex: 1;
  }

  .btn-skip {
    position: absolute;
    top: 20px;
    right: 20px;
    display: inline-block;
    border: 1px solid #f0edea;
    border-radius: 10px;
    padding: 10px 20px;
  }
}
</style>