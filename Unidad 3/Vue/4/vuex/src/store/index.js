import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total:110,
    suma: 0
  },
  mutations: {
    aumentar(state){
      state.total++;
    }
  },
  actions: {
     accionAumentar({ commit }){
      commit('aumentar');
     }
  },
})
