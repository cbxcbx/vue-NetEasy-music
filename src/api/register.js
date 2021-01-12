import axios from "axios"
import Url from './url.js'

export function captchaSent(phone) {
  let url = Url.CAPTCHA_SENT + "?phone=" + phone;
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data);
  })
}

export function captchaVerify(phone, captcha) {
  let url = Url.CAPTCHA_VERIFY + "?phone=" + phone + "&captcha=" + captcha
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data);
  })
}