import axios from "axios";
import { HOST } from './config';
import Url from './url.js';

// 自动带上浏览器cookie
axios.defaults.withCredentials = true;

/* 获取歌曲url
*  @params id 歌曲id 可传入多个
*/
export function getSongUrl(ids) {
  let url = HOST + Url.GET_SONG_URL + '?id=' + ids;
  return axios.get(url)
}

/* 获取歌曲详情
*  @params id 歌曲id 可传入多个
*/
export function getSongDetail(id) {
  let url = HOST + Url.GET_SONG_DETIAL + '?ids=' + id;
  return axios.get(url)
}

/* 获取歌曲歌词
*  @params id 歌曲id
*/
export function getLyric(id) {
  let url = HOST + Url.GET_SONG_LYRIC + '?id=' + id;
  return axios.get(url)
}