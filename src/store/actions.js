import * as types from "./mutations-type"

export const selectPlay = function ({ commit, state }, { list, song, index }) {
  commit(types.SET_PLAYLIST, list);
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
}