import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@pages/Login'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Edit from '@/pages/Edit'
import Add from '@/pages/Add'
import Print from '@/pages/Print'
// 增强原方法，好处是旧的业务模块不需要任何变动 配合页面跳转动画
Router.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // },

    {path: '/', redirect: 'home'},
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }, {
      path: '/add',
      name: 'Add',
      component: Add
    }, {
      path: '/print',
      name: 'Print',
      component: Print
    }
  ]
})
