<template>
  <header class="topbar">
    <div class="topbar-wrap">
      <div class="topbar-left">
        <!-- <a class="branding-icon topbar-item" href="/"><i></i></a> -->
        <a class="branding-info topbar-item" href="/" style="padding: 0 12px;"><span>{{brand}}</span></a>
      </div>
      <div class="topbar-right">
        <!-- <div class="user" style="margin-right: -33px; margin-top: 4px; float: left;">
          <div class="user-info-icon" style="background-color: #fff; color: #3e91fb;">
            {{ userMsg.username }}
          </div>
        </div> -->
        <!-- <ui-select v-if="user.accountType === 0" v-model="teamId" class="topbar-item tenant" :class="{'tenant-u': teamType === 1, 'tenant-us': teamType === 2}">
          <ui-option v-for="item in user.tenants" :key="item.tenantId" :label="item.tenantName" :value="item.tenantId">
            <div class="tenant-option">
              <ui-icon v-if="item.tenantType === 1" name="user"></ui-icon>
              <ui-icon v-if="item.tenantType === 2" name="users"></ui-icon>
              <span>{{ item.tenantName }}</span>
              <ui-icon name="check" v-if="teamId === item.tenantId"></ui-icon>
            </div>
          </ui-option>
        </ui-select> -->
        <ui-dropdown trigger="hover">
          <ul style="display: block; list-style: none; float: left; margin: 0; padding: 0;">
            <li style="position: relative; cursor: pointer; font-weight: bold;">
              <img src="../../../../src/assets/user.png" style="height: 32px; width: 32px; margin: 9px auto; text-align: center; float: left;border-radius: 100%;">
              <!-- <img src="../../../../src/assets/user-profile.png" style="background: #f6f9f6; height: 32px; width: 32px; margin: 9px auto; text-align: center; float: left;border-radius: 100%;"> -->
              <div style="height: 32px; line-height: 32px; margin: 9px 2px 9px 10px; text-align: center;float: left;">
                <span style="padding: 0;">{{ $store.state.login.user ? $store.state.login.user : userMsg.username }}, 您好</span>
                <!-- <span style="padding: 0;">, 您好</span> -->
              </div>
            </li>
          </ul>
          <!-- <div class="user" style="margin-top: 4px; cursor: pointer;">
            <div class="user-info-icon" style="background-color: #fff; color: #3e91fb;">
              {{ $store.state.login.user ? $store.state.login.user : userMsg.username }}
            </div>
          </div> -->
          <ui-dropdown-menu class="user" slot="dropdown" style="width: 100px;">
            <ui-dropdown-item class="user-exit"><a href="/#/welcome">返回首页</a></ui-dropdown-item>
            <ui-dropdown-item class="user-exit" style="border-top: 1px solid #ebeef5;"><a @click="logout()" style="min-height: 10px !important;">退出账号</a></ui-dropdown-item>
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
      sessionStorage.setItem('token', '')
      sessionStorage.setItem('Access-Token', '')
      // sessionStorage.setItem('user', '') // 为了在退出后不用再输入该用户名所以不清空
      sessionStorage.setItem('userInfo', '')
      // this.$store.commit('login')
      this.$store.commit('updateUserInfo')
      this.$router.push({ path: '/login' })
    }
  },
  data() {
    return {
      brand: sessionStorage.getItem('classBelong') === 'systemMove' ? '业务不中断系统迁移平台' : '数据同步与系统迁移平台',
      // brand: '中国电信数据同步与系统迁移平台',
      domain: '',
      userMsg: {
        username: sessionStorage.getItem('user')
      }
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
      // width: $sidebar-width + $sidebar-collapsed-width + 100px;
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
        // border-top: 1px solid #e0e6ed;
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