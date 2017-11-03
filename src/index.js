import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import index_page from './pages/index.vue';

import style from './style/style.less';

var router = new VueRouter({
  routes: [
    { path: '/index', component: index_page },
  ]
})
router.replace({ path: '/index', redirect: '/' })

new Vue({
    el: "#app",
    router: router
})