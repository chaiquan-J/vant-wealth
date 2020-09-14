import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	username:""
  },
  mutations: {
	getName(state,id){
		state.username = id.name
	}
  },
  actions: {
  },
  modules: {
  }
})
