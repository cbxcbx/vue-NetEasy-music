import * as type from './mutations-type'

const mutations = {
  [type.SET_LOGIN_STATUS](state, status) {
    state.isLogin = status
  },

  [type.SET_SINGER](state, singer) {
    state.singer = singer
  },

  [type.SET_PLAYLIST](state, list) {
    state.playlist = list;
  },

  [type.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index;
  },

  [type.SET_FULL_SCREEN](state, fullScreen) {
    state.fullScreen = fullScreen;
  }
}

export default mutations