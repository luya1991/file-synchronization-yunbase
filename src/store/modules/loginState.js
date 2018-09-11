const mutations = {
  updateUserInfo(state) {
    if (sessionStorage.getItem('isLogin') === 'true') {
      state.isLogin = true
    } else {
      state.isLogin = false
    }
    // state.isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
    state.token = sessionStorage.getItem('token')
    state.user = sessionStorage.getItem('user')
    state.password = sessionStorage.getItem('password')
  }
}

export default {
  mutations,
  state: {
    isLogin: false,
    user: '',
    password: '',
    token: sessionStorage.getItem('token')
  }
}
