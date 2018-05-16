import {
  GET_USERINFO,
  LOGIN,
  LOGOUT
} from './mutation-types'
export default {
  // 获取用户信息
  [GET_USERINFO] (state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    }
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = {...info}
    } else {
      state.userInfo = null
    }
  },
  [LOGIN] (state) {
    state.isLogin = true
  },
  [LOGOUT] (state) {
    state.isLogin = false
  }
}
