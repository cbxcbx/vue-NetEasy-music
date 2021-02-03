<template>
  <transition appear name="fade">
    <music-list></music-list>
  </transition>
</template>

<script>
import MusicList from "@/music-list/music-list";
import { getSingerDetail } from "api/singer";
import { ERR_OK } from "api/config";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  created() {
    this._getDetail();
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push('/singer');
        return false
      }
      getSingerDetail(this.singer.id).then(res => {
        if (res.data.code === ERR_OK) {
          console.log(res.data);
        }
      }).catch(error => {
        console.log(error);
      })
    }
  },
  computed: {
    ...mapGetters(['singer'])
  },
  components: {
    MusicList
  }
};
</script>
<style lang="scss" scoped>
</style>
