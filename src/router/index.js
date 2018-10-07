import Vue from 'vue'
import Router from 'vue-router'
import huhupaHome from '~/components/huhupaHome'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'huhupaHome',
      component: huhupaHome,
      meta: {
        title: '呼呼趴首页',
        requiresAuth: false
      }
    }
  ]
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
