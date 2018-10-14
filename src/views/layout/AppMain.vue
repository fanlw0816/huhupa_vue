<template>
  <div class="content">
    <!-- 选项卡 -->
    <el-tabs v-model="selectIndex" type="border-card" @tab-remove="removeTab">
      <el-tab-pane v-for="item in tabsData" :closable="item.isClosable" :key="item.name" :label="item.title" :name="item.index">
        <router-view :name="item.name"></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AppMain',
  data () {
    return {
      selectIndex: '1'
    }
  },
  watch: {
    selectTabIndex: function () {
      if (this.selectIndex === this.selectTabIndex) {
        return
      }
      this.selectIndex = this.selectTabIndex
    },
    selectIndex: function () {
      this.changeTabIndex(this.selectIndex)
    }
  },
  computed: {
    ...mapState(['tabsData', 'selectTabIndex'])
  },
  methods: {
    ...mapActions(['pushTabs', 'deleteTabs', 'changeTabIndex']),
    removeTab (indexName) {
      let tabs = this.tabsData
      let activeIndex = this.selectTabIndex
      if (activeIndex === indexName) {
        tabs.forEach((tab, index) => {
          if (tab.index === indexName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeIndex = nextTab.index
            }
          }
        })
      }
      this.changeTabIndex(activeIndex)
      this.deleteTabs([indexName])
    }
  }
}
</script>

<style scoped>
  .content{
    /* position: absolute;
    top: 60px; */
    background: none repeat scroll 0 0 #fff;
    /* position: absolute;
    left: 210px;
    right: 0;
    top: 70px;
    bottom:0; */
    width: auto;
    padding:0px 0px;
    box-sizing: border-box;
    /* position: relative; */
    /* height: 100%; */
    width: 100%
    /*overflow-y: scroll;*/
}
</style>
