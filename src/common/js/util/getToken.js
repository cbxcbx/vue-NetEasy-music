import { loginStatus } from 'api/user/login'
import { ERR_OK } from 'api/config'

export function getLoginToken() {
  loginStatus().then(res => {
    if (res.data.code === ERR_OK) {
      return true
    } else {
      return false
    }
  }).catch(error => {
    console.log(error)
  })
}
