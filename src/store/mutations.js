import * as type from './mutations-type'

const mutations = {
  [type.SET_LOGIN_STATUS](state, status) {
    state.isLogin = status
  }
}

export default mutations