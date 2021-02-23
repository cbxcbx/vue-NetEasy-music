import axios from "axios"
import { HOST } from '../config'
import Url from '../url.js'

// 手机号密码登录
export function loginCellphone(phone, password) {
  let url = Url.LOGIN_CELLPHONE + "?phone=" + phone + "&md5_password=" + password;
  return axios.post(url)
}

// 查看登录状态
export function loginStatus() {
  let url = HOST + Url.LOGIN_STATUS;
  return axios.get(url)
}

// 退出登录
export function logout() {
  let url = HOST + Url.LOGOUT;
  return axios.get(url)
}