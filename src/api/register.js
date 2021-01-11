import axios from "axios"
import * as Url from './url'

export function sentCaptcha() {
  return axios.get(Url.SENT_CAPTCHA).then((res) => {
    return Promise.resolve(res.data);
  })
}