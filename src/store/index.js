import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './action'
Vue.use(Vuex)

const state = {
  isLogin: false
}

export default new Vuex.Store({
  state,
  action,
  mutations
})
