import Vue from 'vue'
import YunBase from '../src/main'

Vue.use(YunBase)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: YunBase.router,
  store: YunBase.store,
  render: h => {
    const r_ = []
    Object.keys(YunBase.comp).forEach(key => {
      r_.push(h(key))
    })
    return h('div', {}, r_)
  },
  components: YunBase.comp
})
