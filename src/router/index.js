import Vue from 'vue'
import Router from 'vue-router'
import huhupaHome from '~/views/common/huhupaHome'
import Layout from '~/views/layout/Layout'
import panePage from '~/views/common/panePage'
import companyCategory from '~/views/category/companyCategory'
// import Layout from '~/views/layout/Layout.vue'
// import Home from '~/views/home/Home.vue'
// import User from '~/views/manage/user/User.vue'

Vue.use(Router)

export const normalRouters = [
  {
    path: '/',
    component: Layout,
    meta: {
      title: '呼呼趴ERP',
      requiresAuth: false
    },
    redirect: '/panePage',
    children: [
      {
        path: 'panePage',
        name: 'panePage',
        components: {
          home: huhupaHome,
          newPage: panePage,
          companyCategory: companyCategory
        },
        meta: {
          title: '呼呼趴ERP',
          requiresAuth: false
        }
      }
      // {
      //   path: '/user',
      //   name: 'user',
      //   component: User
      // }
    ]
  }
]

var router = new Router({
  mode: 'history',
  routes: normalRouters
})

// 路由前执行
router.beforeEach((to, from, next) => {
  if (to.path === '/login') { // 如果即将进入登录路由，则直接放行
    next()
  } else { // 否则验证是否登录
    if (to.meta.requiresAuth && !sessionStorage.getItem('accessToken')) {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

// 路由后执行
router.afterEach((to, from, next) => {
  document.title = to.matched[to.matched.length - 1].meta.title
})

export default router
