import axios from "axios";
import { HOST } from './config';
import Url from './url.js';

// 自动带上浏览器cookie
axios.defaults.withCredentials = true;

// 获取歌曲url
export function getSongUrl(ids) {
  let url = HOST + Url.GET_SONG_URL + '?id=' + ids;
  return axios.get(url)
}

// 获取歌曲详情
export function getSongDetail(id) {
  let url = HOST + Url.GET_SONG_DETIAL + '?ids=' + id;
  return axios.get(url)
}