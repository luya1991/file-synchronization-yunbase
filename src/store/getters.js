export default {
  submenu: state => {
    let data = state.menu.data
    let menu = null
    if (data.length) {
      for (let i = 0; i < state.container.current.length - 1; i++) {
        state.container.current[i].split('-').forEach(ele => {
          menu = data.find(item => {
            return item.resourceCode === ele
          })
          data = menu.children
        })
      }
    }
    if (menu) menu.params = state.container.current.params
    return menu
  }
}
