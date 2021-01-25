import axios from "axios"
import { HOST } from './config'
import Url from './url.js'

axios.defaults.withCredentials = true;
// 获取首页banner
export function getBanner() {
  let url = HOST + Url.GET_BANNER;
  return axios.get(url)
}

// 获取首页icon
export function getDragonBall() {
  let url = HOST + Url.GET_DRAGON_BALL;
  return axios.get(url)
}

// 获取推荐歌单
export function getPersonalized(limit) {
  let url = limit ? HOST + Url.GET_PERSONALIZED + '?limit=' + limit : HOST + Url.GET_PERSONALIZED;
  return axios.get(url)
}

// 获取最新专辑
export function getAlbum() {
  let url = HOST + Url.GET_ALBUM;
  return axios.get(url)
}

// 获取日推歌曲
export function getRecommendSongs() {
  let url = HOST + Url.GET_RECOMMEND_SONGS
  return axios.post(url)
}