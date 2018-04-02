<template>
  <header class="topbar">
    <div class="topbar-wrap">
      <div class="topbar-left">
        <a class="branding-icon topbar-item" href="/"><i></i></a>
        <a class="branding-info topbar-item" href="/#/welcom"><span>{{brand}}</span></a>
      </div>
      <div class="topbar-right">
        <ui-select v-if="user.accountType === 0" v-model="teamId" class="topbar-item tenant" :class="{'tenant-u': teamType === 1, 'tenant-us': teamType === 2}">
          <ui-option v-for="item in user.tenants" :key="item.tenantId" :label="item.tenantName" :value="item.tenantId">
            <div class="tenant-option">
              <ui-icon v-if="item.tenantType === 1" name="user"></ui-icon>
              <ui-icon v-if="item.tenantType === 2" name="users"></ui-icon>
              <span>{{ item.tenantName }}</span>
              <ui-icon name="check" v-if="teamId === item.tenantId"></ui-icon>
            </div>
          </ui-option>
        </ui-select>
        <ui-dropdown trigger="click" class="topbar-item">
          <span>
            {{user.userName}}<i class="el-icon-caret-bottom"></i>
          </span>
          <ui-dropdown-menu class="user" slot="dropdown">
            <ui-dropdown-item class="user-info">
              <div class="user-info-icon">
                {{user.realName && user.realName[0]}}
              </div>
              <div class="user-info-name">{{user.userName}}</div>
            </ui-dropdown-item>
            <ui-dropdown-item><a :href="domain + '/iam.html#/account/info'"><ui-icon name="cogs"></ui-icon>账号设置</a></ui-dropdown-item>
            <ui-dropdown-item><a :href="domain + '/iam.html#/company/mine'"><ui-icon name="users"></ui-icon>我的企业</a></ui-dropdown-item>
            <ui-dropdown-item v-if="userSystem"><a :href="domain + '/iam.html#/system/company/info/'"><ui-icon name="cog"></ui-icon>系统设置</a></ui-dropdown-item>
            <ui-dropdown-item class="user-exit"><a @click="logout()" style="min-height: 10px !import">退出账号</a></ui-dropdown-item>
            <!-- <ui-dropdown-item class="user-exit"><a href="./logout">退出账号</a></ui-dropdown-item> -->
          </ui-dropdown-menu>
        </ui-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'topbar',
  // methods: mapActions({
  //   setUser: 'container/setUser'
  // }),
  methods: {
    ...mapActions({
      setUser: 'container/setUser'
    }),
    logout() {
      sessionStorage.setItem('isLogin', false)
      this.$store.commit('login')
      console.log(JSON.parse(sessionStorage.getItem('isLogin')))
    }
  },
  data() {
    return {
      brand: '中国电信数据同步与系统迁移平台',
      domain: ''
    }
  },
  computed: {
    ...mapState({
      user: state => state.container.user,
      userSystem(state) {
        let userSystem = false
        const item = state.menu.data.find(
          item => item.resourceCode === 'portal'
        )
        if (item) {
          userSystem = !!item.children.find(
            item => item.resourceCode === 'system'
          )
          this.domain = item.url
        }
        return userSystem
      }
    }),
    teamId: {
      get() {
        return this.user.currentTenantId
      },
      set(val) {
        sessionStorage.setItem('teamId', val)
        Vue.nextTick(() => {
          this.$router.go(0)
        })
      }
    },
    teamType() {
      const tenant =
        this.user.tenants &&
        this.user.tenants.find(item => this.teamId === item.tenantId)
      return tenant && tenant.tenantType
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../theme/variable';

header.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $topbar-height;
  background: #2c7cdf;
  .topbar-wrap {
    height: 100%;
    padding-right: 16px;
    &:before,
    &:after {
      display: table;
      content: ' ';
    }
    .topbar-item {
      margin: 0 8px;
      cursor: pointer;
      &:hover {
        background-color: #3d91fa;
      }
    }
    .topbar-left {
      float: left;
      width: $sidebar-width + $sidebar-collapsed-width + 100px;
      border-right: $topbar-border;
      height: 100%;
      display: flex;
      flex-direction: row;
      .branding {
        &-info {
          margin: 0;
          flex: 1;
          text-decoration: none;
          font-size: 16px;
          color: #ffffff;
          text-align: center;
          line-height: $topbar-height;
        }
        &-icon {
          margin: 0;
          width: 66px;
          border-right: $topbar-border;
          i {
            margin: 9px auto;
            height: 32px;
            width: 39px;
            display: block;
            background: url('../assets/logo.png') no-repeat;
            background-size: cover;
          }
        }
      }
    }
    .topbar-right {
      float: right;
      height: 100%;
      .el-dropdown {
        line-height: $topbar-height;
        color: $topbar-font-color;
        span {
          display: inline-block;
          padding: 0 8px;
          i {
            margin-left: 8px;
          }
        }
      }
    }
  }
}
.user {
  padding: 0;
  .el-dropdown-menu {
    &__item {
      padding: 0;
      font-size: 12px;
      line-height: initial;
      a {
        padding: 0 20px;
        display: block;
        line-height: 34px;
        color: #666;
        text-decoration: none;
        i {
          margin-right: 8px;
        }
      }
      &.user-exit {
        a {
          padding: 0;
        }
        text-align: center;
        border-top: 1px solid #e0e6ed;
      }
    }
  }
  .user-info {
    width: 220px;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    border-bottom: 1px solid #e0e6ed;
    &-icon {
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      width: 40px;
      background-color: #3e91fb;
      border-radius: 100%;
      text-align: center;
      color: #fff;
      margin-right: 16px;
    }
    &-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.el-select-dropdown {
  &__item {
    font-size: 12px;
  }
}
.tenant {
  &-option {
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #e0e6ed;
    display: flex;
    align-items: center;
    i {
      margin-right: 8px;
      &.el-icon-check {
        margin: 0 0 0 8px;
      }
    }
    span {
      flex: 1;
    }
  }
  &-u {
    /deep/ .el-input {
      &:before {
        content: '\f007';
      }
    }
  }
  &-us {
    /deep/ .el-input {
      &:before {
        content: '\f0c0';
      }
    }
  }
  /deep/ .el-input {
    position: relative;
    &:before {
      font-family: element-icons;
      display: block;
      position: absolute;
      font-size: 14px;
      top: 0;
      height: 100%;
      line-height: 32px;
      left: 12px;
      color: $topbar-font-color;
    }
    &__inner {
      border: 1px solid #4395f9;
      background: transparent;
      border-radius: 3px;
      color: $topbar-font-color;
      padding-left: 32px;
    }
    .el-select__caret {
      color: $topbar-font-color;
    }
  }
}
</style>

