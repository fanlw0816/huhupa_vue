import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentUser: null,
  tabsData: [
    {
      title: '首页',
      name: 'home',
      index: '1',
      isClosable: false
    }
  ]
}

const muatations = {
  example (state, payload) {
    // payload为参数
    console.log(state)
    console.log(payload)
  }
}

const actions = {
  example: ({ commit }, payload) => commit('example', payload)
}

const getters = {
  haslogin: state => {
    return !!state.currentUser
  }
}

export default new Vuex.Store({
  state,
  muatations,
  actions,
  getters
})
