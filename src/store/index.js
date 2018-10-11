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
  ],
  selectTabIndex: '1'
}

const mutations = {
  example (state, payload) {
    // payload为参数
    console.log(state)
    console.log(payload)
  },
  pushTabs (state, tab) {
    state.tabsData.push(tab)
    state.selectTabIndex = tab.index
  },
  deleteTabs (state, indexs) {
    state.tabsData = state.tabsData.filter(item => {
      return indexs.indexOf(item.index) === -1
    })
  },
  changeTabIndex (state, index) {
    state.selectTabIndex = index
  }
}

const actions = {
  example: ({ commit }, payload) => commit('example', payload),
  pushTabs: ({ commit }, payload) => commit('pushTabs', payload),
  deleteTabs: ({ commit }, payload) => commit('deleteTabs', payload),
  changeTabIndex: ({ commit }, payload) => commit('changeTabIndex', payload)
}

const getters = {
  haslogin: state => {
    return !!state.currentUser
  },
  tabsData: state => {
    return state.tabsData
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
