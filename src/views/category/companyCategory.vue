<template>
  <div class="wrapper">
    <div class="content-top">
      <el-input style="width: 300px" prefix-icon="el-icon-search" size="mini" v-model="searchText" placeholder="输入名称查询">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <div>
        <el-button size="mini" type="primary">新增</el-button>
        <el-button size="mini" type="info" @click="getCategorys()">刷新</el-button>
      </div>
    </div>
    <div class="content-center">
      <edit-input
        :showData="editData"
        :props="{content: 'text'}">
      </edit-input>
      <el-table
        :data="categorys"
        border
        highlight-current-row
        style="width: 100%">
        <el-table-column
          type="index"
          width="30">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="120">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { fetchCompanyCategorys } from '~/api/commonApi/categorys'
import editInput from '~/components/editInput/editInput'

export default {
  name: 'companyCategory',
  data () {
    return {
      searchText: '',
      categorys: [],
      editData: {
        text: '这是一个测试数据'
      }
    }
  },
  components: {
    editInput
  },
  created () {
    this.getCategorys()
  },
  methods: {
    getCategorys () {
      fetchCompanyCategorys().then(
        resp => {
          if (resp.data.state === 1) {
            this.categorys = resp.data.data
          } else {
            this.$message('请求失败')
          }
        }
      ).catch(() => {
        this.$message('请求失败')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content-top {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.content-center {
  margin-top: 10px;
}
</style>
