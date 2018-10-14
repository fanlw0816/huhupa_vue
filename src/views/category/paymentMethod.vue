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
        :data="payments"
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
      :title="paymethodsDialogTitle"
      :visible.sync="paymethodsDialogVisible"
      width="30%"
      @close="closeDialog"
      :close-on-click-modal="false">
      <el-form size="mini" ref="paymethodsForm" :model="paymethodsForm" :rules="categoryRules" label-width="80px">
        <el-form-item label="分类名称" prop="name">
          <el-input @keyup.enter="handlePaymentMethod" v-model="paymethodsForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="closeDialog">取 消</el-button>
        <el-button v-if="paymethodDialogType === dialogType.add" size="mini" type="primary" @click="handlePaymentMethod">添 加</el-button>
        <el-button v-if="paymethodDialogType === dialogType.edit" size="mini" type="primary" @click="handlePaymentMethod">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchPaymentMethods, addPaymentMethods, editPaymentMethods, deletePaymentMethods } from '~/api/commonApi/paymentMethod'
import { DIALOG_TYPE } from '~/utils/params'

export default {
  name: 'paymentMethod',
  data () {
    return {
      searchText: '',
      payments: [],
      paymethodsDialogVisible: false,
      paymethodsForm: {
        name: ''
      },
      categoryRules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }]
      },
      paymethodsDialogTitle: '新增支付方式',
      paymethodDialogType: '',
      dialogType: DIALOG_TYPE,
      currentPaymentMethod: ''
    }
  },
  created () {
    this.getCategorys()
  },
  methods: {
    // 关闭对话框
    closeDialog () {
      this.$refs.paymethodsForm.resetFields()
      this.paymethodsForm = {
        name: ''
      }
      this.paymethodsDialogVisible = false
    },
    // 删除分类
    deleteCategory (data) {
      this.$confirm('确定删除?', '提示', {type: 'warning'}).then(_ => {
        deletePaymentMethods(data.id).then(
          resp => {
            if (resp.data.state === 1) {
              this.$message.success(resp.data.message)
              this.payments = this.payments.filter(item => {
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
    handlePaymentMethod () {
      this.$refs.paymethodsForm.validate((valid) => {
        if (valid) {
          if (this.paymethodDialogType === this.dialogType.edit) {
            let params = {
              id: this.currentPaymentMethod.id,
              name: this.paymethodsForm.name
            }
            editPaymentMethods(params).then(
              resp => {
                if (resp.data.state === 1) {
                  this.currentPaymentMethod.name = resp.data.data.name
                  this.closeDialog()
                } else {
                  this.$message.error(resp.data.message)
                }
              }
            ).catch(() => {})
          } else if (this.paymethodDialogType === this.dialogType.add) {
            addPaymentMethods(this.paymethodsForm).then(
              resp => {
                if (resp.data.state === 1) {
                  this.payments.push(resp.data.data)
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
      this.paymethodDialogType = type
      if (type === this.dialogType.edit) {
        this.paymethodsDialogTitle = '编辑支付方式'
        this.paymethodsForm.name = data.name
        this.currentPaymentMethod = data
      } else if (type === this.dialogType.add) {
        this.paymethodsDialogTitle = '新增支付方式'
      }
      this.paymethodsDialogVisible = true
    },
    // 获取多有分类
    getCategorys () {
      fetchPaymentMethods().then(
        resp => {
          if (resp.data.state === 1) {
            this.payments = resp.data.data
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
