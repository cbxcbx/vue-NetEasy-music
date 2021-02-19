<template>
  <div class="song-list">
    <ul>
      <li
        class="song"
        v-for="(song, index) in songs"
        :key="index"
        @click="selectSong(song, index)"
      >
        <!-- <p class="count">{{ index + 1 }}</p> -->
        <img class="image" v-lazy="song.image" width="45" height="45" />
        <div class="content">
          <p class="name">{{ song.name }}</p>
          <p class="desc">{{ getDesc(song) }}</p>
        </div>
        <div class="duration">{{ format(song.duration) }}</div>
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
    },
    selectSong(item, index) {
      this.$emit("select", item, index);
    },
    _pad(num, n = 2) {
      let len = num.toString().length;
      while (len < n) {
        num = "0" + num;
        len++;
      }
      return num;
    },
    format(interval) {
      interval = interval | 0;
      const minute = (interval / 60) | 0;
      const second = this._pad(interval % 60);
      return `${minute}:${second}`;
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
    padding-bottom: 10px;

    .count {
      margin-right: 20px;
      width: 45px;
      height: 45px;
      line-height: 45px;
      font-size: $font-size-medium-x;
      font-weight: bold;
      color: $orange;
      text-align: center;
      background-color: $singer-detail-song-list-bg;
      border-radius: 25%;
    }

    .image {
      margin-right: 20px;
      border-radius: 25%;
    }

    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        margin-top: 4px;
        font-size: $font-size-medium;
        font-weight: bold;
        color: $black;
        width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .desc {
        width: 80%;
        font-size: $font-size-small;
        color: $gray;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .duration{
      font-size: 12px;
      font-weight: bold;
    }
  }
}
</style>