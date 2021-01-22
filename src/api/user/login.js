import axios from "axios"
import { HOST } from '../config'
import Url from '../url.js'

export function loginCellphone(phone, password) {
  let url = Url.LOGIN_CELLPHONE + "?phone=" + phone + "&md5_password=" + password;
  return axios.post(url)
}

export function loginStatus() {
  let url = HOST + Url.LOGIN_STATUS;
  return axios.get(url)
}