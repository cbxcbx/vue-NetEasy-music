import axios from "axios"
import { HOST } from '../config'
import Url from '../url.js'

// 手机号密码登录
export function getUserPlayList(uid) {
  let url = HOST + Url.GET_USER_PLAYLIST + '?uid=' + uid;
  return axios.get(url)
}
