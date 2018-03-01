// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import "babel-polyfill";
import router from './router/index';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery'



import axios from 'axios'
Vue.prototype.$axios=axios;

Vue.use(ElementUI);

// router.beforeEach((to, from, next) => {
//   console.log(to.fullPath);
//   next();
// })

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render(h){
        return h(App);
    }
})

