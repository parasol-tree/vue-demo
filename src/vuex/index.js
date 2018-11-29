import Vue from 'vue'
import Vuex from 'vuex'

// vuex root 数据
import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

// vuex 模块化 数据
import modulesA from './modules/modulesA/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations,
  modules: {
    ...modulesA
  }
})

// vuex Hot Reloading
if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations',
    './modules/modulesA/'
  ], () => {
    const newGetters = require('./getters.js').default
    const newActions = require('./actions').default
    const newMutations = require('./mutations').default
    const modulesAChildOne = require('./modules/modulesA/modulesA_ChildOne').default

    store.hotUpdate({
      getters: newGetters,
      actions: newActions,
      mutations: newMutations,
      modules: {
        modulesAChildOne
      }
    })
  })
}

export default store
