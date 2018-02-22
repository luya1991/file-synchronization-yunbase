<template>
  <nav class="menu">
    <template v-if="sub">
      <div class="menu-header"><span>{{sub.resourceName}}</span></div>
      <div class="menu-content" :key="sub.resourceId">
        <ui-menu :default-active="current" ref="menu">
          <template v-for="item in sub.children">
            <ui-menu-item @click="select(item)" v-if="item.url && item.resourceType === 1"  :index="item.resourceCode">
              <ui-icon :name="item.icon"></ui-icon>
              <span slot="title">{{item.resourceName}}</span>
            </ui-menu-item>
            <ui-submenu v-if="!item.url && item.resourceType === 1" :index="item.resourceCode">
              <template slot="title">
                <ui-icon :name="item.icon"></ui-icon>
                <span>{{item.resourceName}}</span>
              </template>
              <ui-menu-item @click="select(item)" v-for="item in item.children" :key="item.resourceCode" :index="item.resourceCode">
                <span slot="title">{{item.resourceName}}</span>
              </ui-menu-item>
            </ui-submenu>
          </template>
        </ui-menu>
      </div>
    </template>
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'menubar',
  methods: {
    select(item) {
      this.$router.push({ name: item.url, params: this.sub.params })
    }
  },
  computed: {
    ...mapGetters({
      sub: 'submenu'
    }),
    ...mapState({
      current: state =>
        state.container.current &&
        state.container.current.length &&
        state.container.current[state.container.current.length - 1]
          .split('-')
          .pop()
    })
  }
}
</script>

<style scoped lang="scss">
@import '../theme/variable';

.menu {
  position: absolute;
  color: #333;
  top: 0;
  bottom: 0;
  left: 0;
  width: $sidebar-width;
  box-shadow: 0 0 14px 0 rgba(2, 7, 30, 0.21);
  z-index: 99;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  &-header {
    padding: 0 20px;
    height: $sidebar-menu-item-height;
    line-height: $sidebar-menu-item-height;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      color: #1f2d3d;
      font-size: 16px;
      vertical-align: middle;
    }
  }
  &-content {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: none;
    background: transparent;
  }
  .el-menu-item {
    font-size: 12px;
    color: #475669;
    height: $menu-item-height;
    line-height: $menu-item-height;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover,
    &:focus {
      background: #e5e9f2;
    }
    &.is-active {
      color: #fff;
      background-color: #3e91fb;
    }
  }
  /deep/ .el-submenu {
    .el-menu-item {
      padding-left: 53px !important;
    }
    &__title {
      font-size: 12px;
      height: $menu-item-height;
      line-height: $menu-item-height;
    }
    &.is-active {
      .el-submenu__title,
      i {
        color: #3e91fb;
      }
    }
  }
}
</style>
