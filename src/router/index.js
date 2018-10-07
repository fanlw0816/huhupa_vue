import Vue from 'vue'
import Router from 'vue-router'
import huhupaHome from '~/components/huhupaHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'huhupaHome',
      component: huhupaHome
    }
  ]
})
