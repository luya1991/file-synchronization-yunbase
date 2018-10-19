import * as types from '../mutation-types'

const state = {
  collapse: false,
  data: [
    {'resourceName': '配置管理',
      'resourceCode': 'configurationManage',
      'classBelong': {
        'wholeProject': 'wholeProject',
        'systemMove': 'systemMove',
        'dataMove': 'dataMove'
      },
      'icon': 'cogs',
      'children':
      [{'resourceName': 'zookeeper管理',
        'resourceCode': 'zookeeperManage',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': 'mq管理',
        'resourceCode': 'messageQueue',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': 'node管理',
        'resourceCode': 'nodeManage',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': 'agent管理',
        'resourceCode': 'agentManage',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': 'canal配置',
        'resourceCode': 'canalConfiguration',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': 'lvs管理',
        'resourceCode': 'lvsManage',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove'
        },
        'icon': 'cog',
        'children': null}]},
    {'resourceName': '基础环境同步',
      'resourceCode': 'environmentalParmSync',
      'classBelong': {
        'wholeProject': 'wholeProject',
        'systemMove': 'systemMove',
        'dataMove': 'dataMove'
      },
      'icon': 'certificate',
      'children':
      [{'resourceName': '基础环境复制',
        'resourceCode': 'baseEnvClone',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': '操作系统参数同步',
        'resourceCode': 'osParmSync',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': '应用软件参数同步',
        'resourceCode': 'softwareParmSync',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null}]},
    {'resourceName': '迁移计划',
      'resourceCode': 'schedule',
      'classBelong': {
        'wholeProject': 'wholeProject',
        'systemMove': 'systemMove',
        'dataMove': 'dataMove'
      },
      'icon': 'exchange',
      'children':
      [{'resourceName': '系统迁移计划',
        'resourceCode': 'systemSchedule',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': '数据迁移计划',
        'resourceCode': 'dataSchedule',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null}]},
    {'resourceName': 'SQL数据库同步',
      'resourceCode': 'databaseSynchronization',
      'classBelong': {
        'wholeProject': 'wholeProject',
        'dataMove': 'dataMove'
      },
      'icon': 'database',
      'children':
      [{'resourceName': '数据源配置',
        'resourceCode': 'dataSourceConfiguration',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': '数据表配置',
        'resourceCode': 'dataTableConfiguration',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': 'canal配置',
        'resourceCode': 'canalConfiguration',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': 'yugong配置',
        'resourceCode': 'yugongConfiguration',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': 'channel管理',
        'resourceCode': 'channelManage',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': '主备配置',
        'resourceCode': 'dataMatrixConfiguration',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null}]},
    {'resourceName': '文件同步',
      'resourceCode': 'fileSynchronization',
      'classBelong': {
        'wholeProject': 'wholeProject',
        'dataMove': 'dataMove'
      },
      'icon': 'file',
      'children':
      [{'resourceName': '文件目录配置',
        'resourceCode': 'fileDirectoryConfig',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': '文件同步配置',
        'resourceCode': 'pathSyncConfig',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null}]},
    {'resourceName': 'NoSQL数据库同步',
      'resourceCode': 'sessionSynchronization',
      'classBelong': {
        'wholeProject': 'wholeProject',
        'dataMove': 'dataMove'
      },
      'icon': 'th',
      'children':
      [{'resourceName': 'redis配置',
        'resourceCode': 'redisSyncConfig',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': 'mongodb配置',
        'resourceCode': 'mongodbSyncConfig',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null}]},
    {'resourceName': '流量复制',
      'resourceCode': 'tcpcopy',
      'classBelong': {
        'wholeProject': 'wholeProject',
        'dataMove': 'dataMove'
      },
      'icon': 'clone',
      'children':
      [{'resourceName': '流量复制配置',
        'resourceCode': 'tcpcopyConfiguration',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': '监控访问时间',
        'resourceCode': 'monitorTime',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null}]},
    {'resourceName': '监控管理',
      'resourceCode': 'monitorManage',
      'classBelong': {
        'wholeProject': 'wholeProject',
        'systemMove': 'systemMove',
        'dataMove': 'dataMove'
      },
      'icon': 'binoculars',
      'children':
      [{'resourceName': '日志管理',
        'resourceCode': 'logManage',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': '运维监控',
        'resourceCode': 'operationMonitor',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'telegram',
        'children': null},
      {'resourceName': '预警列表',
        'resourceCode': 'alarmList',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'th-list',
        'children': null},
      {'resourceName': '核对监控列表',
        'resourceCode': 'checkMonitorList',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'table',
        'children': null}]},
    {'resourceName': '系统管理',
      'resourceCode': 'systemManage',
      'classBelong': {
        'wholeProject': 'wholeProject',
        'systemMove': 'systemMove',
        'dataMove': 'dataMove'
      },
      'icon': 'cubes',
      'children':
      [{'resourceName': '权限管理',
        'resourceCode': 'permissionManage',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': '系统初始化',
        'resourceCode': 'systemInitialization',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null},
      {'resourceName': '系统管理',
        'resourceCode': 'systemManage',
        'classBelong': {
          'wholeProject': 'wholeProject',
          'systemMove': 'systemMove',
          'dataMove': 'dataMove'
        },
        'icon': 'cog',
        'children': null}]}
  ]
  // 取消testDemo模块 , {'resourceName': 'testDemo', 'resourceCode': 'demo', 'icon': 'tumblr', 'children':  [{'resourceName': 'demo', 'resourceCode': 'demo', 'icon': 'cog', 'children': null}, {'resourceName': 'hello', 'resourceCode': 'hello', 'icon': 'cog', 'children': null}, {'resourceName': 'tb', 'resourceCode': 'tb', 'icon': 'cog', 'children': null}]}
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
