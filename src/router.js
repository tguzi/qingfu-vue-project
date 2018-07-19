import Vue          from 'vue'
import Router       from 'vue-router'
import Login        from './pages/login.vue'
import Index        from './pages/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/index', component: Index }
  ]
})
