// 左侧导航栏配置
export const LEFT_MENU_CONFIG = [
  {
    'title': '购 货',
    'url': '/',
    'icon': 'el-icon-sold-out',
    'elMenuItemGroups':
      [
        {'title': '单据', 'elMenuItem': [{'title': '采购订单', 'name': 'newPage', 'url': '/user'}, {'title': '采购入库单', 'name': 'newPage', 'url': '/'}, {'title': '采购退货单', 'name': 'newPage', 'url': '/'}]},
        {'title': '报表', 'elMenuItem': [{'title': '采购订单跟踪', 'name': 'newPage', 'url': '/'}, {'title': '采购明细表', 'name': 'newPage', 'url': '/'}, {'title': '采购汇总表（按商品）', 'name': 'newPage', 'url': '/'}, {'title': '购货汇总表（按供应商）', 'name': 'newPage', 'url': '/'}]}
      ]
  }, {
    'title': '销 货',
    'url': '/',
    'icon': 'el-icon-goods',
    'elMenuItemGroups':
      [
        {'title': '单据', 'elMenuItem': [{'title': '销货订单', 'name': 'newPage', 'url': '/'}, {'title': '销货出库单', 'name': 'newPage', 'url': '/'}, {'title': '销货退货单', 'name': 'newPage', 'url': '/'}]},
        {'title': '报表', 'elMenuItem': [{'title': '销货订单跟踪', 'name': 'newPage', 'url': '/'}, {'title': '销货明细表', 'name': 'newPage', 'url': '/'}, {'title': '销货汇总表（按商品）', 'name': 'newPage', 'url': '/'}, {'title': '销货汇总表（按供应商）', 'name': 'newPage', 'url': '/'}]}
      ]
  },
  {
    'title': '仓 库',
    'url': '/',
    'icon': 'el-icon-more',
    'elMenuItemGroups':
      [
        {'title': '单据', 'elMenuItem': [{'title': '仓库订单', 'name': 'newPage', 'url': '/'}, {'title': '销货出库单', 'name': 'newPage', 'url': '/'}, {'title': '销货退货单', 'name': 'newPage', 'url': '/'}]},
        {'title': '报表', 'elMenuItem': [{'title': '销货订单跟踪', 'name': 'newPage', 'url': '/'}, {'title': '销货明细表', 'name': 'newPage', 'url': '/'}, {'title': '销货汇总表（按商品）', 'name': 'newPage', 'url': '/'}, {'title': '销货汇总表（按供应商）', 'name': 'newPage', 'url': '/'}]}
      ]
  },
  {
    'title': '委外加工',
    'url': '/',
    'icon': 'el-icon-share',
    'elMenuItemGroups':
      [
        {
          'title': '单据',
          'elMenuItem':
            [{'title': '委外加工订单', 'name': 'newPage', 'url': '/'}, {'title': '委外加工出库单', 'name': 'newPage', 'url': '/'}, {'title': '委外加工退货单', 'name': 'newPage', 'url': '/'}, {'title': '委外加工收货单', 'name': 'newPage', 'url': '/'}]},
        {'title': '报表', 'elMenuItem': [{'title': '委外加工订单跟踪', 'name': 'newPage', 'url': '/'}, {'title': '委外加工明细表', 'name': 'newPage', 'url': '/'}, {'title': '委外加工汇总表（按商品）', 'name': 'newPage', 'url': '/'}, {'title': '委外加工汇总表（按供应商）', 'name': 'newPage', 'url': '/'}]}
      ]
  },
  {
    'title': '来料加工',
    'url': '/',
    'icon': 'el-icon-share',
    'elMenuItemGroups':
      [
        {
          'title': '单据',
          'elMenuItem':
            [{'title': '来货单', 'name': 'newPage', 'url': '/user'},
              {'title': '出货单', 'name': 'newPage', 'url': '/'},
              {'title': '对账单', 'name': 'newPage', 'url': '/'},
              {'title': '客户退货单', 'name': 'newPage', 'url': '/'}]},
        {
          'title': '报表',
          'elMenuItem': [
            {'title': '来货单统计', 'name': 'newPage', 'url': '/'},
            {'title': '出货单统计', 'name': 'newPage', 'url': '/'},
            {'title': '对账单报表', 'name': 'newPage', 'url': '/'},
            {'title': '库存报表', 'name': 'newPage', 'url': '/'}
          ]
        }
      ]
  }, {
    'title': '资 料',
    'url': '/',
    'icon': 'el-icon-tickets',
    'elMenuItemGroups':
      [
        {
          'title': '单据',
          'elMenuItem': [
            {'title': '公司管理', 'name': 'newPage', 'url': '/'},
            {'title': '仓库管理', 'name': 'newPage', 'url': '/'},
            {'title': '职员管理', 'name': 'newPage', 'url': '/'},
            {'title': '账户管理', 'name': 'newPage', 'url': '/'},
            {'title': '发货地址管理', 'name': 'newPage', 'url': '/'}]},
        {
          'title': '辅助属性',
          'elMenuItem': [
            {'title': '公司类别', 'name': 'companyCategory', 'url': '/'},
            {'title': '商品类别', 'name': 'newPage', 'url': '/'},
            {'title': '支出类别', 'name': 'newPage', 'url': '/'},
            {'title': '收入类别', 'name': 'newPage', 'url': '/'},
            {'title': '计量单位', 'name': 'newPage', 'url': '/'},
            {'title': '结算方式', 'name': 'newPage', 'url': '/'},
            {'title': '产品基材', 'name': 'newPage', 'url': '/'},
            {'title': '生产类型', 'name': 'newPage', 'url': '/'},
            {'title': '部门', 'name': 'newPage', 'url': '/'},
            {'title': '学历', 'name': 'newPage', 'url': '/'}
          ]
        }
      ]
  }, {
    'title': '设 置',
    'url': '/',
    'icon': 'el-icon-setting',
    'elMenuItemGroups':
      [
        {'title': '系统设置',
          'elMenuItem':
            [
              {'title': '用户管理', 'name': 'newPage', 'url': '/user'},
              {'title': '角色管理', 'name': 'newPage', 'url': '/'},
              {'title': '权限列表', 'name': 'newPage', 'url': '/'},
              {'title': '系统操作日志', 'name': 'newPage', 'url': '/'},
              {'title': '在线用户管理', 'name': 'newPage', 'url': '/'}
            ]}
      ]
  }
]
