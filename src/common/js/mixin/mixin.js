import { mapGetters, mapMutations } from 'vuex'
import { playMode } from "common/js/player/config";
// import { shuffle } from "common/js/utils";

export const playerMixin = {
  computed: {
    // 控制播放模式的class
    modeIcon() {
      return this.mode === playMode.sequence
        ? "icon-xunhuan1"
        : this.mode === playMode.loop
          ? "icon-hanhan-01-01"
          : "icon-suijibofang";
    },
    ...mapGetters([
      "mode",
      "sequenceList"
    ])
  },
  methods: {
    changeMode() {
      let index = (this.mode + 1) % 3;
      this.setMode(index);
      // let list = null;
      // if (this.mode === playMode.random) {
      //   list = shuffle(this.sequenceList);
      // } else {
      //   list = this.sequenceList;
      // }
      // this.resetCurrentIndex(list);
      // this.setPlayList(list);
    },
    ...mapMutations({
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENTINDEX",
      setMode: "SET_MODE",
      setPlayList: "SET_PLAYLIST"
    })
  }
}