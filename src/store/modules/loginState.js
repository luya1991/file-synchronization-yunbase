const mutations = {
  updateUserInfo(state) {
  	// console.log(JSON.parse(sessionStorage.getItem('isLogin')))
  	// console.log(JSON.parse(sessionStorage.getItem('token')))
    state.isLogin = sessionStorage.getItem('isLogin')
    state.token = sessionStorage.getItem('token')
  }
}

export default {
  mutations,
  state: {
		isLogin: false,
		token: ''
	}
}