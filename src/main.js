// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import Vuex from 'vuex';
import store from '@/vuex/index'
import VueLazyload from 'vue-lazyload'
Vue.use(Vuex);
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  //error: 'dist/error.png',//这个是请求失败后显示的图片
  loading: require('@/assets/images/loading.gif'),//这个是加载的loading过渡效果
  try: 2 // 这个是加载图片数量
  })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
