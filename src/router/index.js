import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'  // 导入组件Home
import CreateActivity from '../components/createActivity.vue'  // 导入组件News
import EditActivity from '../components/editTemplate.vue'  // 导入组件News
Vue.use(Router)

export default new Router({
  // base:'/event/',
  //   mode: 'history', // 使用HTML5 History默认是哈希值的方式 打包要去掉
    routes: [
      {path: '/home', component: Home},
      {path: '/createActivity', component: CreateActivity},
      {path: '/editActivity', component: EditActivity},
      {path: '*', redirect: '/home'}
    ]
})
