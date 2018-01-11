import $$ from '../plugins/local'

$$.setNamespace('user')

const state = {
  info: $$.get('info') || {},
  isLogin: $$.get('isLogin') || false
}

const mutations = {
  info (state, value) {
    state.info = value
  },
  isLogin (state, value) {
    state.isLogin = value
  }
}

const getters = {
  _user: state => {
    return state.info
  },
  _isLogin: state => state.isLogin
}

const actions = {
  _Login ({ commit, state }, userInfo) {
    if (!state.isLogin) {
      commit('isLogin', true)
      commit('info', userInfo)
    }
  },
  _Logout ({ commit, state }) {
    if (state.isLogin) {
      commit('isLogin', false)
      commit('info', {})
    }
  }
}

export default { namespaced: true, state, mutations, getters, actions }
