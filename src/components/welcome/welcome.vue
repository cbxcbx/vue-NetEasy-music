<template>
  <div class="welcome">
    <div class="welcome-top">
      <div class="text-container">
        <p class="title">Add Your</p>
        <p class="text">Music</p>
      </div>
    </div>
    <div class="welcome-middle">
      <img src="./people.png" />
    </div>
    <div class="welcome-bottom">
      <div class="pagination">
        <span
          v-for="(id,index) in pagination"
          class="dot"
          :class="currentIndex === index ?'active' :''"
          :key="index"
        ></span>
      </div>
      <div class="btn-skip-wrapper">
        <span class="btn btn-skip">skip</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      pagination: [{ id: 1 }, { id: 2 }, { id: 3 }]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";

.welcome {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .welcome-top {
    flex: 0 0 50%;

    .text-container {
      .title {
        margin-bottom: 10px;
        font-size: 30px;
        font-weight: 100;
        color: $black;
      }

      .text {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }

  .welcome-middle {
    flex: 0 0 30%;
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
  }

  .welcome-bottom {
    flex: 1;
    padding: 20px;

    .pagination {
      margin-top: 23px;
      transform: translateY(-50%);
      float: left;

      .dot {
        margin: 0 4px;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.2);
        &.active {
          width: 20px;
          border-radius: 5px;
          background-color: $orange;
        }
      }
    }

    .btn-skip-wrapper {
      float: right;
    }

    .btn-skip {
      display: inline-block;
      border: 1px solid #f0edea;
      border-radius: 10px;
      padding: 0 20px;
      width: 80px;
      height: 46px;
      line-height: 46px;
      text-align: center;
    }
  }
}
</style>