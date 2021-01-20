import axios from "axios"
import { HOST } from '../config'
import Url from '../url.js'

export function captchaSent(phone) {
  let url = HOST + Url.CAPTCHA_SENT + "?phone=" + phone;
  return axios.get(url)
}

export function captchaVerify(phone, captcha) {
  let url = HOST + Url.CAPTCHA_VERIFY + "?phone=" + phone + "&captcha=" + captcha
  return axios.get(url)
}