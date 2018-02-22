import * as types from '../mutation-types'

const state = {
  collapse: false,
  data: [{"resourceName":"idc机房管理","resourceCode":"tb","icon":"cubes","children":[{"resourceName":"机房配置","resourceCode":"tb","icon":"cog","children":null}]},{"resourceName":"idc机房列表","resourceCode":"hello","icon":"home","children":[{"resourceName":"238_idc","resourceCode":"hello","icon":"info-circle","children":null},{"resourceName":"默认idc","resourceCode":"demo","icon":"info-circle","children":null}]}]
}

const actions = {
  toggleCollapse({ commit }) {
    commit(types.MENU_TOGGLE_COLLAPSE)
  },
  setData({ commit }, data) {
    commit(types.MENU_SET_DATA, data.data)
  }
}

const mutations = {
  [types.MENU_TOGGLE_COLLAPSE](state) {
    state.collapse = !state.collapse
  },
  [types.MENU_SET_DATA](state, data) {
    console.log(data)
    state.data = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
