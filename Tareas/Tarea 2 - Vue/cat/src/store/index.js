import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    ranpost: {},
    post: {}
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_RANPOST(state, ranpost) {
      state.ranpost = ranpost;
    },
    SET_POST(state, post){
      state.post = post;
    },
  },
  actions: {
    getPosts({ commit }) {
      axios.get('https://cat-fact.herokuapp.com/facts/')
      .then( res => {
        commit('SET_POSTS', res.data);
      })
      .catch( err => console.log(err))
    },
    getRanPost({ commit }) {
      axios.get('https://cat-fact.herokuapp.com/facts/random')
      .then( res => {
        commit('SET_RANPOST', res.data);
      })
      .catch( err => console.log(err))
    },
    getPost({ commit }, payload){
      axios.get(`https://cat-fact.herokuapp.com/facts/${payload}`)
      .then( res => {
        commit('SET_POST', res.data);
      })
      .catch( err => console.log(err))
    },
  },
  modules: {
  }
})
