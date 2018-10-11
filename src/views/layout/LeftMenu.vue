<template>
  <div class="left-menu">
    <el-row class="tac">
      <el-col :span="12" style="width: 100%">
        <h5 @click="openHome()" class="left-menu-header" style="">呼呼啪ERP</h5>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                  background-color="#2d373c" text-color="#fff" active-text-color="#ffd04b">
          <template v-for="(leftMenu, index) in leftMenuConfig">
            <el-dropdown placement="right-start" :key="leftMenu.title + '-' + index">
              <el-menu-item :index="(index + 1 ) + ''">
                <i :class="leftMenu.icon"></i>
                <span class="el-dropdown-link" style="height:100%; width: 100%">
                  {{leftMenu.title}}
                </span>
              </el-menu-item>
              <el-dropdown-menu slot="dropdown">
                <div style="background-color: #dfe4ed;">
                  <ul style="padding-inline-start: 0px; float: left; width: 200px; padding-left: 0px;"
                      v-for="(elMenuItemGroup, index2) in leftMenu.elMenuItemGroups" :key="elMenuItemGroup.title + '-' + index + '-' + index2 ">
                    <h5 style="padding-left: 20px; font-size: 16px;">{{elMenuItemGroup.title}}</h5>
                    <li style="list-style:none;" :index="index + '-' + index2 + '-' + index3"
                        v-for="(elMenuItem, index3) in elMenuItemGroup.elMenuItem"
                        :key="elMenuItem.title + '-' + index + '-' + index2 + '-' + index3" @click="openTab(elMenuItem)">
                      <el-dropdown-item>{{elMenuItem.title}}</el-dropdown-item>
                    </li>
                  </ul>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { LEFT_MENU_CONFIG } from '~/utils/global'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'LeftMenu',
  computed: {
    ...mapState(['tabsData'])
  },
  data () {
    return {
      isCollapse: true,
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
    ...mapActions(['pushTabs', 'changeTabIndex']),
    // addTab () {
    //   let newTab = {
    //     title: '新选项卡',
    //     name: 'newPage',
    //     index: '2',
    //     isClosable: true
    //   }
    //   this.pushTabs(newTab)
    //   this.selectTabValue = newTab.index
    // },
    openHome () {
      this.changeTabIndex('1')
    },
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
    openTab (item) {
      let tempArr = this.tabsData.filter(i => {
        return i.title === item.title
      })
      if (tempArr.length > 0) {
        this.changeTabIndex(tempArr[0].index)
      } else {
        let newTab = {
          title: item.title,
          name: item.name,
          index: parseInt(this.tabsData[this.tabsData.length - 1].index) + 1 + '',
          isClosable: true
        }
        this.pushTabs(newTab)
        this.changeTabIndex(newTab.index)
      }
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
  .el-menu-vertical-demo {
    border: 0px;
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
  .el-dropdown {
    width: 100%;
  }
</style>
