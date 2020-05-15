import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  getters: {
    isLoggedIn (state) {
      return state.isLoggedIn
    }
  },
  mutations: {
    setLogin (state, status) {
      state.isLoggedIn = status
    },
    revokeLogin (state) {
      state.login = null
    }
  },
  actions: {
  },
  modules: {
  }
})
