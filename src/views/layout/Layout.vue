<template>
  <div class="app-wrapper" style="height: 100%">
    <el-container>
      <el-aside width="200px"><left-menu></left-menu></el-aside>
      <el-container>
        <el-header><nav-bar></nav-bar></el-header>
        <el-main><app-main></app-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from './Navbar.vue'
import AppMain from './AppMain.vue'
import LeftMenu from './LeftMenu.vue'

export default {
  name: 'layout',
  components: {
    NavBar,
    AppMain,
    LeftMenu
  }
}
</script>
<style>
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #f5f9fd;
  }
  .el-aside {
    background-color: #2d373c;
    height: 100%
  }
  .el-dropdown-menu {
    left: 200px;
  }
</style>
