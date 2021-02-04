<template>
  <div class="song-list">
    <ul>
      <li class="song" v-for="(song,index) in songs" :key="index">
        <p class="count">{{index + 1}}</p>
        <div class="content">
          <p class="name">{{ song.name }}</p>
          <p class="desc">{{ getDesc(song) }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getDesc(song) {
      if (song.aliaName) {
        return `${song.singer} - ${song.aliaName}`;
      } else {
        return `${song.singer}`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "common/style/variable.scss";
.song-list {
  .song {
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid rgb(228, 228, 228);

    .count {
      margin-right: 10px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      color: $orange;
      text-align: center;
      background-color: $singer-detail-song-list-bg;
      border-radius: 25%;
    }
    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        margin-top: 4px;
        font-size: 14px;
        font-weight: bold;
        color: $black;
        width: 80%;
      }
      .desc {
        width: 80%;
        font-size: 12px;
        color: $gray;
      }
    }
  }
}
</style>