import * as types from '../mutation-types'

const state = {
  loading: null,
  current: [],
  user: {}
}

const actions = {
  loadStart({ commit }) {
    commit(types.CONTAINER_LOAD_START)
  },
  loadEnd({ commit }, data) {
    commit(types.CONTAINER_LOAD_END, data)
  },
  async setUser({ commit }, data) {
    commit(types.CONTAINER_SET_USER, await data)
  }
}

const mutations = {
  [types.CONTAINER_LOAD_START](state) {
    state.loading = true
  },
  [types.CONTAINER_LOAD_END](state, data) {
    state.loading = false
    state.current = data.current
    state.current.params = data.params
  },
  [types.CONTAINER_SET_USER](state, data) {
    state.user = data.data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
