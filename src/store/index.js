import Vue            from 'vue'
import Vuex           from 'vuex'
import user           from './modules/user.js'
import plugins        from './plugins/plugins.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    user: user
  },
  plugins,
  strict: debug
})
