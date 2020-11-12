import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    toys:[]
  },
  mutations: {
    UPDATE_USER(state, user){
      state.currentUser = user
    },
    GET_TOYS(state,toys){
      state.toys = toys
    },
  },
  actions: {
    updateUser({commit}, user){
      commit("UPDATE_USER", user)
    },
    getToys({commit}){
      const url = "https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys";
      axios.get(`${url}`).then(response => commit("GET_TOYS", response.data))
    },
    crearToy({dispatch},toy){
      const url = "https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys";
      axios.post(`${url}`,toy).then(() => dispatch("getToys"))
    }
  },
  modules: {
  }
})
