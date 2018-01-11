import Vue          from 'vue'
import Router       from 'vue-router'
import Index        from './pages/index.vue'
import Index1        from './pages/index1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/index', component: Index },
    { path: '/index1', component: Index1 }
  ]
})
