import axios from "axios"
import { HOST } from './config'
import Url from './url.js'

export function loginCellphone(phone, password) {
  let url = HOST + Url.LOGIN_CELLPHONE + "?phone=" + phone + "&md5_password=" + password;
  return axios.get(url)
}