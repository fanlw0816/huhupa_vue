<template>
  <div class="content">
    <!-- <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab(selectTabValue)" >
        add tab
      </el-button>
    </div> -->
    <el-tabs v-model="selectTabValue" type="border-card" @tab-remove="removeTab">
      <el-tab-pane v-for="item in showTabs" :closable="item.isClosable" :key="item.name" :label="item.title" :name="item.index">
        <router-view :name="item.name"></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      selectTabValue: '1',
      showTabs: [{
        title: '首页',
        name: 'home',
        index: '1',
        isClosable: false
      },
      {
        title: '新选项卡',
        name: 'newPage',
        index: '2',
        isClosable: true
      }],
      tabIndex: 1
    }
  },
  methods: {
    // addTab (targetName) {
    //   let newTabName = ++this.tabIndex + ''
    //   this.editableTabs2.push({
    //     title: 'New Tab',
    //     name: newTabName,
    //     content: 'New Tab content'
    //   })
    //   this.editableTabsValue2 = newTabName
    // },
    removeTab (targetName) {
      let tabs = this.showTabs
      let activeName = this.selectTabValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.selectTabValue = activeName
      this.showTabs = tabs.filter(tab => tab.index !== targetName)
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
