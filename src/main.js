import Vue            from 'vue'
import store          from './store'
import App            from './base/App'
import router         from './router.js'
import axios          from './gloable/http.js'
import myUI           from './modules/components/index.js'
import ElementUI      from 'element-ui'

// 引入全局统一样式
import './gloable/style.less'

Vue.use(myUI)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
