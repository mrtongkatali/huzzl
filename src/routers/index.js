import Vue from 'vue'
import Router from 'vue-router'

import Home from 'components/home/home.vue'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    { path: '', component: Home }
  ]
});


export default router