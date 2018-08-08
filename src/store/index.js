import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    post_img: '',
    scrTop: 0
  },
  mutations: {
    setPostImg (state, {post_img}) {
      state.post_img = post_img
    },
    setPosition (state, {scrTop}) {
      state.scrTop = scrTop
    }
  },
  actions: {
    setPostImg ({commit}, {post_img}) {
      commit('setPostImg', {post_img})
    },
    setPosition ({commit}, {scrTop}) {
      commit('setPosition', {scrTop})
    }
  }
})
export default store
