<template>
  <nav class="sidebar" :class="{collapsed: collapse}">
    <div class="menu">
      <ui-menu v-if="menu.length" :collapse="collapse" :default-active="current" >
      <template v-for="item in menu">
        <ui-submenu  :index="item.resourceCode" :title="item.resourceName">
          <template slot="title">
            <ui-icon :name="item.icon"></ui-icon>
            <span>{{item.resourceName}}</span>
          </template>
          <ui-menu-item class="ddd" @click="select(item)" v-for="item in item.children" :key="item.resourceCode" :index="item.resourceCode" :title="item.resourceName">
            <ui-icon :name="item.icon"></ui-icon>
            <span slot="title">{{item.resourceName}}</span>
          </ui-menu-item>
        </ui-submenu>
      </template>
    </ui-menu>
    </div>
    <div class="toggle">
      <button type="button" @click="toggle()">
        <ui-icon v-if="!collapse" name="outdent"></ui-icon >
        <ui-icon  v-else name="indent"></ui-icon >
      </button>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'sidebar',
  methods: {
    ...mapActions({
      toggle: 'menu/toggleCollapse'
    }),
    select(item) {
      this.$router.push({name: item.resourceCode})
    }
  },
  // mounted() {
  //   var item = {}
  //   item.resourceCode = window.location.href.split('/')[window.location.href.split('/').length-1]
  //   setTimeout(() => { this.select(item) }, 1000)
  // },
  computed: {
    ...mapState({
      collapse: state => state.menu.collapse,
      // menu: state => state.menu.data,
      menu: state => {
        // 利用hidden属性来过滤需要隐藏的菜单
        function filtNode(node) {
          if (node.hidden) {
            return null
          } else {
            if (node.children) {
              let res = node
              let childrenNodes = []
              for (let i = 0; i < res.children.length; i++) {
                var childNode = filtNode(res.children[i])
                if (childNode) {
                  childrenNodes.push(childNode)
                }
              }
              if (childrenNodes.length > 0) {
                res.children = childrenNodes
              } else {
                res.children = null
              }
              return res
            } else {
              return node
            }
          }
        }
        let menuData = []
        var originMenu = state.menu.data.slice()
        console.log(originMenu)
        for (let j = 0; j < originMenu.length; j++) {
          var curNode = filtNode(originMenu[j])
          if (curNode) {
            menuData.push(curNode)
          }
        }
        return menuData
      },
      current: state =>
        state.container.current &&
        state.container.current[0] &&
        state.container.current[0].split('-').pop()
    })
  }
}
</script>

<style scoped lang="scss">
@import '../theme/variable';

nav.sidebar {
  position: fixed;
  top: $topbar-height;
  bottom: 0;
  left: 0;
  width: $sidebar-width;
  background: #1f2d3d;
  color: #333;
  box-shadow: 0 0 14px 0 rgba(2, 7, 30, 0.21);
  z-index: 99;
  display: flex;
  flex-direction: column;  
  .menu {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
     /deep/ .is-active .el-submenu__title {
      color: #3e91fb !important;
      i {
        color: #3e91fb !important;
      }
    };
     /deep/ .el-submenu__title {
      font-size: 13.5px !important;
      color: #fff !important;
    };
     /deep/ .el-submenu__title:hover {
      background: #26486d;
    };
    .el-menu {
      border-right: none;
      background: transparent;
      transition: none;    
    };
    .el-menu-item {
      font-size: 12px;
      background: #1f2d3d;
      color: #fff;
      height: $menu-item-height;
      line-height: $menu-item-height;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover
      /* ,&:focus */
       {
        background: #26486d;
      }
      &.is-active {
        color: #fff;
        background-color: #2d568b;
        i {
          color: #3e91fb;
        }
      }
    };
    /deep/ .el-submenu {
      .el-menu-item {
        padding-left: 25px !important;
      }
      &__title {
        font-size: 12px;
        height: $menu-item-height;
        line-height: $menu-item-height;
        padding-left: 5px !important;
      }
      &.is-active {
      }
    };
  }
  .toggle {
    height: $sidebar-menu-item-height;
    line-height: $sidebar-menu-item-height;
    background: #20262d;
    button {
      cursor: pointer;
      outline: none;
      background: transparent;
      border: none;
      color: #878d99;
      height: 100%;
      width: 100%;
      font-size: 18px;
      i {
        vertical-align: middle;
      }
    }
  }
  &.collapsed {
    width: $sidebar-collapsed-width;
    .el-menu {
      width: $sidebar-collapsed-width;
      /deep/ .el-menu-item {
        .el-tooltip {
          padding: 0 $sidebar-menu-item-left !important;
        }
        span {
          display: none;
        }
      }
    }
  }
}
</style>
