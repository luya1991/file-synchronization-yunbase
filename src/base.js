import Router from 'vue-router'
import Vuex from 'vuex'
import PASP from 'pasp-ui'
import 'pasp-ui/lib/theme/index.css'
import createLogger from 'vuex/dist/logger'
import containerComp from './components/container'
import containerModl from './store/modules/container'
import topbar from './components/topbar'
import sidebar from './components/sidebar'
import menu from './store/modules/menu'
import login from './store/modules/loginState'
import getters from './store/getters'
import axios from 'axios'

const debug = process.env.NODE_ENV === 'development'

class Base {
  constructor() {
    this.router_ = null
    this.store_ = null
  }
  get comp() {
    return {
      topbar,
      sidebar,
      container: containerComp
    }
  }
  get router() {
    return this.router_
  }
  get store() {
    return this.store_
  }
  install(Vue, opts = {}) {
    let routes = []
    let modules = {}

    Vue.use(Router)
    opts.pages && opts.pages.keys().forEach(key => {
      routes = routes.concat(opts.pages(key).default)
    })
    this.router_ = new Router({ routes })

    Vue.use(Vuex)
    opts.modules && opts.modules.keys().forEach(key => {
      Object.assign(modules, opts.modules(key))
    })
    this.store_ = new Vuex.Store({
      modules: Object.assign({}, modules, {
        container: containerModl,
        menu,
        login
      }),
      getters,
      strict: debug,
      plugins: debug ? [createLogger()] : []
    })

    this.router_.beforeEach(async (to, from, next) => {
      this.store_.dispatch('container/loadStart')

      // if (this.store_.state.menu.data.length === 0) {
      //   const teamId = sessionStorage.getItem('teamId')
      //   if (teamId) {
      //     sessionStorage.removeItem('teamId')
      //     await axios.post(`/iam/users/current/tenants/${teamId}`)
      //   }
      //   this.store_.dispatch('container/setUser',
      //     axios.get('/iam/users/current'))
      //   this.store_.dispatch('menu/setData',
      //   await axios.get('/iam/users/current/menu', { params: { 'tenantId': teamId } }))
      // }
      next()
    })
    this.router_.afterEach((to, from) => {
      this.store_.dispatch('container/loadEnd', {
        current: to.meta.bind,
        params: to.params
      })
    })

    /* set default start */
    PASP.Pagination.props.layout.default = 'total, prev, pager, next, sizes'
    PASP.Table.props.stripe = { type: Boolean, default: true }
    PASP.Table.props.highlightCurrentRow = { type: Boolean, default: true }
    PASP.TableColumn.props.showOverflowTooltip = { type: Boolean, default: true }
    /* set default end */

    Vue.use(PASP, { size: 'small' })
  }
}
export default Base
