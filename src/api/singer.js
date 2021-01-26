import axios from "axios"
import { HOST } from './config'
import Url from './url.js'

/* 获取热门歌手
*  limit: 取出数量 , 默认为 50
*/
export function getTopArtists(limit) {
  let url = HOST + (limit ? Url.GET_TOP_ARTISTS + '?limit=' + limit : Url.GET_TOP_ARTISTS);
  return axios.get(url);
}