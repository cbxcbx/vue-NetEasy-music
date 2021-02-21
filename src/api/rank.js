import axios from "axios"
import { HOST } from './config'
import Url from './url.js'

export function getRankList() {
  let url = HOST + Url.GET_RANK_LIST;
  return axios.get(url);
}

export function getPlayListDetail(id) {
  let url = HOST + Url.GET_PLAY_LIST_DETAIL + '?id=' + id;
  return axios.get(url);
}