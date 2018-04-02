const mutations = {
  login(state) {
  	console.log(JSON.parse(sessionStorage.getItem('isLogin')))
    state.isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
  }
}

export default {
  mutations,
  state: {
		isLogin: false,
		token: ''
	}
}