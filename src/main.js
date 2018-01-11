import Vue            from 'vue'
import store          from './store'
import App            from './base/App'
import router         from './router.js'
import axios          from './gloable/http.js'
import vueUI          from './modules/vue-ui/index.js'
import { DatePicker } from 'element-ui'

// 引入全局统一样式
import './gloable/style.less'

Vue.use(vueUI)
Vue.use(DatePicker)

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
