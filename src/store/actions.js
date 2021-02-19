import * as types from "./mutations-type";
import { saveFavorite, deleteFavorite } from "common/js/util/cache";

export const selectPlay = function ({ commit, state }, { list, song, index }) {
  commit(types.SET_SEQUENCE_LIST, list);
  commit(types.SET_PLAYLIST, list);
  commit(types.SET_CURRENT_INDEX, index);
  commit(types.SET_FULL_SCREEN, true);
  commit(types.SET_PLAYING_STATE, true);
}

export const saveFavoriteList = function ({ commit, state }, song) {
  commit(types.SET_FAVORITE_LIST, saveFavorite(song));
}

export const deleteFavoriteList = function ({ commit }, song) {
  commit(types.SET_FAVORITE_LIST, deleteFavorite(song));
}