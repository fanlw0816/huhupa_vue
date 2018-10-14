<template>
  <div class="wrapper">
    <div class="content-top">
      <el-input style="width: 300px" prefix-icon="el-icon-search" size="mini" v-model="searchText" placeholder="输入名称查询">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <div>
        <el-button size="mini" type="primary" @click="showCompanyDialog(dialogType.add)">新增</el-button>
        <el-button size="mini" type="info" @click="getCompanys()">刷新</el-button>
      </div>
    </div>
    <!-- 内容表格 -->
    <div class="content-center">
      <el-table
        class="custom-table"
        :data="companys"
        border
        highlight-current-row>
        <el-table-column
          type="selection"
          fixed
          width="30">
        </el-table-column>
        <el-table-column
          label="序号"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="公司名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="shortName"
          label="简称"
          width="80">
        </el-table-column>
        <el-table-column
          label="公司行业"
          width="80">
          <template slot-scope="scope">
            {{ scope.row.companyCategory.name }}
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="公司分类"
          width="80">
          <template slot-scope="scope">
            <span v-for="item of companyType" :key="item.type + item.name" v-if="item.type === scope.row.type">
              {{ item.name }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="公司地址"
          width="200">
        </el-table-column>
        <el-table-column
          label="结算方式"
          width="120">
          <template slot-scope="scope">
            {{ scope.row.paymentMethod.name }}
          </template>
        </el-table-column>
        <el-table-column
          prop="contact"
          label="联系人"
          width="80">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系人电话"
          width="120">
        </el-table-column>
        <el-table-column
          prop="email"
          label="联系人邮箱"
          width="120">
        </el-table-column>
        <el-table-column
          prop="note"
          label="备注信息"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="showCompanyDialog(dialogType.edit, scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="handleDeleteCompany(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 添加和编辑框 -->
    <el-dialog
      class="custom-dialog"
      :title="companyDialogTitle"
      :visible.sync="companyDialogVisible"
      width="650px"
      @close="closeDialog"
      :close-on-click-modal="false">
      <el-form size="mini" ref="companyForm" :model="companyForm" :rules="companyRules" label-width="100px">
        <el-form-item label="公司名称" prop="name">
          <el-input v-model="companyForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="公司简称" prop="shortName">
          <el-input v-model="companyForm.shortName" clearable></el-input>
        </el-form-item>
        <el-form-item label="公司行业" prop="companyCategoryId">
          <el-select class="full-width" v-model="companyForm.companyCategoryId" placeholder="请选择行业" clearable>
            <el-option
              v-for="item in categorys"
              :key="item.id + 'category'"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公司分类" prop="type">
          <el-select class="full-width" v-model="companyForm.type" placeholder="公司类型" clearable>
            <el-option
              v-for="item in companyType"
              :key="item.name + 'type'"
              :label="item.name"
              :value="item.type">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公司地址" prop="address">
          <el-input v-model="companyForm.address" clearable></el-input>
        </el-form-item>
        <el-form-item label="结算方式" prop="paymentMethodId">
          <el-select class="full-width" v-model="companyForm.paymentMethodId" placeholder="结算方式" clearable>
            <el-option
              v-for="item in paymentMethods"
              :key="item.id + 'paymentMethod'"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系人" prop="contact">
          <el-input v-model="companyForm.contact" clearable></el-input>
        </el-form-item>
        <el-form-item label="联系人电话" prop="phone">
          <el-input v-model="companyForm.phone" clearable></el-input>
        </el-form-item>
        <el-form-item label="联系人邮箱" prop="email">
          <el-input v-model="companyForm.email" clearable></el-input>
        </el-form-item>
        <el-form-item label="备注信息" prop="note">
          <el-input type="textarea" autosize v-model="companyForm.note" placeholder="备注信息"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="closeDialog">取 消</el-button>
        <el-button v-if="companyDialogType === dialogType.add" size="mini" type="primary" @click="handleCompany">添 加</el-button>
        <el-button v-if="companyDialogType === dialogType.edit" size="mini" type="primary" @click="handleCompany">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchAllCompany, addCompany, editCompany, deleteCompany } from '~/api/commonApi/company'
import { fetchCompanyCategorys } from '~/api/commonApi/categorys'
import { fetchPaymentMethods } from '~/api/commonApi/paymentMethod'
import { DIALOG_TYPE, COMPANY_TYPE } from '~/utils/params'

export default {
  name: 'companyManage',
  data () {
    return {
      searchText: '',
      companys: [],
      companyDialogVisible: false,
      companyForm: {
        name: '',
        shortName: '',
        address: '',
        contact: '',
        phone: '',
        email: '',
        note: '',
        type: '',
        companyCategoryId: '',
        paymentMethodId: ''
      },
      companyRules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        companyCategoryId: [{ required: true, message: '选择公司行业', trigger: 'blur' }],
        type: [{ required: true, message: '选择公司分类', trigger: 'blur' }],
        paymentMethodId: [{ required: true, message: '选择支付方式', trigger: 'blur' }]
      },
      companyDialogTitle: '新增公司',
      companyDialogType: '',
      dialogType: DIALOG_TYPE,
      companyType: COMPANY_TYPE,
      currentCompany: '',
      categorys: [],
      paymentMethods: []
    }
  },
  created () {
    this.getCompanys()
    this.getAllCompanys()
    this.getAllPaymentMethods()
  },
  methods: {
    // 关闭对话框
    closeDialog () {
      this.$refs.companyForm.resetFields()
      this.companyForm = {
        name: '',
        shortName: '',
        address: '',
        contact: '',
        phone: '',
        email: '',
        note: '',
        type: '',
        companyCategoryId: '',
        paymentMethodId: ''
      }
      this.companyDialogVisible = false
    },
    // 删除分类
    handleDeleteCompany (data) {
      this.$confirm('确定删除?', '提示', {type: 'warning'}).then(_ => {
        deleteCompany(data.id).then(
          resp => {
            if (resp.data.state === 1) {
              this.$message.success(resp.data.message)
              this.companys = this.companys.filter(item => {
                return item.id !== data.id
              })
            } else {
              this.$message.error(resp.data.message)
            }
          }
        ).catch(_ => {})
      }).catch(_ => {})
    },
    // 处理分类
    handleCompany () {
      this.$refs.companyForm.validate((valid) => {
        if (valid) {
          if (this.companyDialogType === this.dialogType.edit) {
            editCompany(this.companyForm).then(
              resp => {
                if (resp.data.state === 1) {
                  this.currentCompany.name = resp.data.data.name
                  this.closeDialog()
                } else {
                  this.$message.error(resp.data.message)
                }
              }
            ).catch(() => {})
          } else if (this.companyDialogType === this.dialogType.add) {
            addCompany(this.companyForm).then(
              resp => {
                if (resp.data.state === 1) {
                  this.companys.push(resp.data.data)
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
    showCompanyDialog (type, data) {
      this.companyDialogType = type
      if (type === this.dialogType.edit) {
        this.companyDialogTitle = '编辑公司'
        this.companyForm.name = data.name
        this.companyForm.shortName = data.shortName
        this.companyForm.address = data.address
        this.companyForm.contact = data.contact
        this.companyForm.phone = data.phone
        this.companyForm.email = data.email
        this.companyForm.note = data.note
        this.companyForm.type = data.type
        this.companyForm.companyCategoryId = data.companyCategory.id
        this.companyForm.paymentMethodId = data.paymentMethod.id
        this.currentCompany = data
      } else if (type === this.dialogType.add) {
        this.companyDialogTitle = '新增公司'
      }
      this.companyDialogVisible = true
    },
    // 获取所有公司
    getCompanys () {
      fetchAllCompany().then(
        resp => {
          if (resp.data.state === 1) {
            this.companys = resp.data.data
          } else {
            this.$message.error(resp.data.message)
          }
        }
      ).catch(() => {
        this.$message.error('请求失败')
      })
    },
    getAllCompanys () {
      fetchCompanyCategorys().then(
        resp => {
          if (resp.data.state === 1) {
            this.categorys = resp.data.data
          } else {
            this.$message.error(resp.data.message)
          }
        }
      ).catch(() => {})
    },
    getAllPaymentMethods () {
      fetchPaymentMethods().then(
        resp => {
          if (resp.data.state === 1) {
            this.paymentMethods = resp.data.data
          } else {
            this.$message.error(resp.data.message)
          }
        }
      ).catch(() => {})
    }
  }
}
</script>
