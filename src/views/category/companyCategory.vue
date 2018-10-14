<template>
  <div class="wrapper">
    <div class="content-top">
      <el-input style="width: 300px" prefix-icon="el-icon-search" size="mini" v-model="searchText" placeholder="输入名称查询">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <div>
        <el-button size="mini" type="primary" @click="showCategoryDialog(dialogType.add)">新增</el-button>
        <el-button size="mini" type="info" @click="getCategorys()">刷新</el-button>
      </div>
    </div>
    <!-- 内容表格 -->
    <div class="content-center">
      <el-table
        class="custom-table"
        :data="categorys"
        border
        highlight-current-row>
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
            <el-button type="text" size="small" @click="showCategoryDialog(dialogType.edit, scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteCategory(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 添加和编辑框 -->
    <el-dialog
      class="custom-dialog"
      :title="catetoryDialogTitle"
      :visible.sync="categoryDialogVisible"
      width="30%"
      @close="closeDialog"
      :close-on-click-modal="false">
      <el-form size="mini" ref="catetoryForm" :model="catetoryForm" :rules="categoryRules" label-width="80px">
        <el-form-item label="分类名称" prop="name">
          <el-input @keyup.enter="handleCatetory" v-model="catetoryForm.name" clearable></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="closeDialog">取 消</el-button>
        <el-button v-if="catetoryDialogType === dialogType.add" size="mini" type="primary" @click="handleCatetory">添 加</el-button>
        <el-button v-if="catetoryDialogType === dialogType.edit" size="mini" type="primary" @click="handleCatetory">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchCompanyCategorys, addCompanyCategorys, editCompanyCategory, deleteCompanyCategory } from '~/api/commonApi/categorys'
import { DIALOG_TYPE } from '~/utils/params'

export default {
  name: 'companyCategory',
  data () {
    return {
      searchText: '',
      categorys: [],
      categoryDialogVisible: false,
      catetoryForm: {
        name: ''
      },
      categoryRules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }]
      },
      catetoryDialogTitle: '新增分类',
      catetoryDialogType: '',
      dialogType: DIALOG_TYPE,
      currentCatetory: ''
    }
  },
  created () {
    this.getCategorys()
  },
  methods: {
    // 关闭对话框
    closeDialog () {
      this.$refs.catetoryForm.resetFields()
      this.catetoryForm = {
        name: ''
      }
      this.categoryDialogVisible = false
    },
    // 删除分类
    deleteCategory (data) {
      this.$confirm('确定删除?', '提示', {type: 'warning'}).then(_ => {
        deleteCompanyCategory(data.id).then(
          resp => {
            if (resp.data.state === 1) {
              this.$message.success(resp.data.message)
              this.categorys = this.categorys.filter(item => {
                return item.id !== data.id
              })
            } else {
              this.$message.error(resp.data.message)
            }
          }
        ).catch(() => {})
      }).catch(_ => {})
    },
    // 处理分类
    handleCatetory () {
      this.$refs.catetoryForm.validate((valid) => {
        if (valid) {
          if (this.catetoryDialogType === this.dialogType.edit) {
            let params = {
              id: this.currentCatetory.id,
              name: this.catetoryForm.name
            }
            editCompanyCategory(params).then(
              resp => {
                if (resp.data.state === 1) {
                  this.currentCatetory.name = resp.data.data.name
                  this.closeDialog()
                } else {
                  this.$message.error(resp.data.message)
                }
              }
            ).catch(() => {})
          } else if (this.catetoryDialogType === this.dialogType.add) {
            addCompanyCategorys(this.catetoryForm).then(
              resp => {
                if (resp.data.state === 1) {
                  this.categorys.push(resp.data.data)
                  this.closeDialog()
                } else {
                  this.$message.error(resp.data.message)
                }
              }
            ).catch(() => {})
          }
        } else {
          return false
        }
      })
    },
    // 显示分类对话框
    showCategoryDialog (type, data) {
      this.catetoryDialogType = type
      if (type === this.dialogType.edit) {
        this.catetoryDialogTitle = '编辑分类'
        this.catetoryForm.name = data.name
        this.currentCatetory = data
      } else if (type === this.dialogType.add) {
        this.catetoryDialogTitle = '新增分类'
      }
      this.categoryDialogVisible = true
    },
    // 获取多有分类
    getCategorys () {
      fetchCompanyCategorys().then(
        resp => {
          if (resp.data.state === 1) {
            this.categorys = resp.data.data
          } else {
            this.$message.error(resp.data.message)
          }
        }
      ).catch(() => {
        this.$message.error('请求失败')
      })
    }
  }
}
</script>
