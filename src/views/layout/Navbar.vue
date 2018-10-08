<template>
  <div class="top-header">
    <div style="position:absolute; left:200px; top: 20px; font-size: 18px; padding-left: 10px;">深圳市太太科技有限公司</div>
    <div class="header-menu" style="position:absolute; right:5px;">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="1">
          <template slot="title">超级管理员</template>
          <el-menu-item index="2-1">修改基本资料</el-menu-item>
          <el-menu-item index="2-2">修改密码</el-menu-item>
          <el-menu-item index="2-3">查看详情</el-menu-item>
          <!--<el-submenu index="2-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
            <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
          <!--</el-submenu>-->
        </el-submenu>
        <el-menu-item index="2">反馈</el-menu-item>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
      </el-menu>
    </div>
    <div class="line" style="width: 100%;"></div>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  computed: {
    activeIndex () {
      return '/' + this.$route.path.split('/')[1]
    }
  },
  data () {
    return {
      helpDocument: ''
    }
  },
  created () {
  },
  methods: {
    handleSelect (key) {
    }
  }
}
</script>

<style lang="scss" scoped>
  /*.header {*/
    /*// position: fixed;*/
    /*// right: 0;*/
    /*// left: 0;*/
    /*// z-index: 999;*/
    /*.el-menu {*/
      /*border-radius: 0;*/
      /*.el-submenu {*/
        /*.el-menu-item {*/
          /*min-width: 80px;*/
        /*}*/
      /*}*/
    /*}*/
  /*}*/
</style>
