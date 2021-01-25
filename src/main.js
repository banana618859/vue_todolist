/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-11-15 20:07:25
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2020-11-16 23:49:39
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

console.log('1.main.js首先加载');

// 引入axios
import axios from 'axios';
Vue.prototype.$axios = axios;

// 创建了一个Vue的实例 并且 $mount挂载 #app的div上面
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
