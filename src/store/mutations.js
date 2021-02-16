import * as type from './mutations-type';

const mutations = {
  [type.SET_LOGIN_STATUS](state, status) {
    state.isLogin = status;
  },

  [type.SET_SINGER](state, singer) {
    state.singer = singer;
  },

  [type.SET_PLAYING_STATE](state, playing) {
    state.playing = playing;
  },

  [type.SET_FULL_SCREEN](state, fullScreen) {
    state.fullScreen = fullScreen;
  },

  [type.SET_MODE](state, mode) {
    state.mode = mode;
  },

  [type.SET_PLAYLIST](state, list) {
    state.playlist = list;
  },

  [type.SET_SEQUENCELIST](state, list) {
    state.sequencelist = list;
  },

  [type.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index;
  }
}

export default mutations