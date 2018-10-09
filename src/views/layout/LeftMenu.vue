<template>
  <div class="left-menu">
    <el-row class="tac">
      <el-col :span="12" style="width: 100%">
        <h5 @click="go('/')" class="left-menu-header" style="">呼呼啪ERP</h5>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                  background-color="#2d373c" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item :index="(index + 1 ) + ''" v-for="(leftMenu, index) in leftMenuConfig" :key="leftMenu.title + '-' + index">
            <i :class="leftMenu.icon"></i>
                <el-dropdown placement="right-start">
                  <span class="el-dropdown-link" style="height:100%; width: 100%">
                  {{leftMenu.title}}
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <div style="background-color: #dfe4ed;">
                      <ul style="padding-inline-start: 0px; float: left; width: 200px; padding-left: 0px;"
                          v-for="(elMenuItemGroup, index2) in leftMenu.elMenuItemGroups" :key="elMenuItemGroup.title + '-' + index + '-' + index2 ">
                        <h5 style="padding-left: 20px; font-size: 16px;">{{elMenuItemGroup.title}}</h5>
                        <li style="list-style:none;" :index="index + '-' + index2 + '-' + index3"
                            v-for="(elMenuItem, index3) in elMenuItemGroup.elMenuItem"
                            :key="elMenuItem.title + '-' + index + '-' + index2 + '-' + index3" @click="go(elMenuItem.url)">
                          <el-dropdown-item @click="go(elMenuItem.url)">{{elMenuItem.title}}</el-dropdown-item>
                        </li>
                      </ul>
                    </div>
                  </el-dropdown-menu>
                </el-dropdown>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { LEFT_MENU_CONFIG } from '~/utils/global'

export default {
  name: 'LeftMenu',
  computed: {
  },
  data () {
    return {
      helpDocument: '',
      showData: {
        isSubShow: false,
        subItems: [{name: '用户', url: '/user'}, {name: '台式电脑', url: '/user'}, {name: '电视机', url: '/user'}]
      },
      leftMenuConfig: LEFT_MENU_CONFIG
    }
  },
  created () {
  },
  methods: {
    enter () {
      console.log('yiru')
      this.showData.isSubShow = true
      this.$message('这是一条消息提示')
    },
    leave () {
      this.showData.isSubShow = false
      console.log('一处')
    },
    handleOpen () {
      console.log('1123')
    },
    handleClose () {
      console.log('chuli')
    },
    go (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
  .left-menu {
    background-color: #2d373c;
    width: 100%;
    height: 100%;
  }
  .left-menu-header {
    height: 60px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    text-align:center;
    line-height: 60px;
    font-size: 16px;
    margin: 0;
  }
  .left-menu-item-detail {
    border: 4px solid #c7c7c7;
    border-color: rgba(0,0,0,.2);
    top: 70px;
    left: 195px;
    position: fixed;
    background: rgb(255,255,255);
    z-index: 999;
  }
</style>
