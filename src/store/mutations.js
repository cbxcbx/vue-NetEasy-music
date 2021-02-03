import * as type from './mutations-type'

const mutations = {
  [type.SET_LOGIN_STATUS](state, status) {
    state.isLogin = status
  },

  [type.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations