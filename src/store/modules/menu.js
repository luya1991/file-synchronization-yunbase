import * as types from '../mutation-types'

const state = {
  collapse: false,
  data: [{"resourceName":"配置管理","resourceCode":"zookeeperManage","icon":"cogs","children": [{"resourceName":"zookeeper管理","resourceCode":"zookeeperManage","icon":"cog","children":null}, {"resourceName":"node管理","resourceCode":"nodeManage","icon":"cog","children":null}, {"resourceName":"agent管理","resourceCode":"agentManage","icon":"cog","children":null}]}, {"resourceName":"数据库同步","resourceCode":"dataSourceConfiguration","icon":"database","children":[{"resourceName":"数据源配置","resourceCode":"dataSourceConfiguration","icon":"cog","children":null}, {"resourceName":"数据表配置","resourceCode":"dataTableConfiguration","icon":"cog","children":null}, {"resourceName":"canal配置","resourceCode":"canalConfiguration","icon":"cog","children":null}, {"resourceName":"yugong配置","resourceCode":"yugongConfiguration","icon":"cog","children":null}, {"resourceName":"channel管理","resourceCode":"channelManage","icon":"ticket","children":null}]}, {"resourceName":"文件同步","resourceCode":"fileSynchronization","icon":"file","children":[{"resourceName":"文件同步","resourceCode":"fileSynchronization","icon":"file","children":null}]}, {"resourceName":"session同步","resourceCode":"sessionSynchronization","icon":"skype","children":[{"resourceName":"session同步","resourceCode":"sessionSynchronization","icon":"skype","children":null}]}, {"resourceName":"监控管理","resourceCode":"logManage","icon":"binoculars","children":[{"resourceName":"日志管理","resourceCode":"logManage","icon":"cog","children":null}, {"resourceName":"预警列表","resourceCode":"alarmList","icon":"th-list","children":null}, {"resourceName":"核对监控列表","resourceCode":"checkMonitorList","icon":"table","children":null}]}, {"resourceName":"系统管理","resourceCode":"systemManage","icon":"cubes","children":[{"resourceName":"权限管理","resourceCode":"permissionManage","icon":"cog","children":null}, {"resourceName":"系统初始化","resourceCode":"systemInitialization","icon":"cog","children":null}, {"resourceName":"系统管理","resourceCode":"systemManage","icon":"cog","children":null}]}, {"resourceName":"testDemo","resourceCode":"demo","icon":"tumblr","children": [{"resourceName":"demo","resourceCode":"demo","icon":"cog","children":null}, {"resourceName":"hello","resourceCode":"hello","icon":"cog","children":null}, {"resourceName":"tb","resourceCode":"tb","icon":"cog","children":null}]}]
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
