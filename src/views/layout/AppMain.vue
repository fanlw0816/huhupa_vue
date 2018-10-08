<template>
  <div class="content">
    <router-view></router-view>
    <!--<div>这里是首页</div>-->
    <!--<div style="margin-bottom: 20px;">-->
      <!--<el-button size="small" @click="addTab(editableTabsValue2)" >-->
        <!--add tab-->
      <!--</el-button>-->
    <!--</div>-->
    <!--<el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">-->
      <!--<el-tab-pane v-for="item in editableTabs2" :key="item.name" :label="item.title" :name="item.name">-->
        <!--{{item.content}}-->
      <!--</el-tab-pane>-->
    <!--</el-tabs>-->
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      editableTabsValue2: '2',
      editableTabs2: [{
        title: '首页',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: '销售订单',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    }
  },
  methods: {
    addTab (targetName) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue2 = newTabName
    },
    removeTab (targetName) {
      let tabs = this.editableTabs2
      let activeName = this.editableTabsValue2
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
      this.editableTabsValue2 = activeName
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
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
