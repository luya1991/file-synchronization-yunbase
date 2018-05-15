const mutations = {
  updateUserInfo(state) {
  	// console.log(JSON.parse(sessionStorage.getItem('isLogin')))
  	// console.log(JSON.parse(sessionStorage.getItem('token')))
    if (sessionStorage.getItem('isLogin') === 'true') {
      state.isLogin = true
    } else {
      state.isLogin = false
    }
    // state.isLogin = sessionStorage.getItem('isLogin')
    state.token = sessionStorage.getItem('token')
  }
}

export default {
  mutations,
  state: {
		isLogin: false,
    user: '',
		token: ''
	}
}