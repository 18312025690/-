import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment:function(state) {
      state.count++;
      console.log(state.count)
    }
  }
})

export default store