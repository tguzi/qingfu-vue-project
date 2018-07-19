import Vue            from 'vue'
import store          from './store'
import App            from './base/App'
import router         from './router.js'

// 引入全局样式
import './gloable/style.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
