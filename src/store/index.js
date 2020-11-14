import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    toys:[],
    loading:false,
    dialog:false,
    mensaje:"",
    add_edit:"",
    btn_add_edit:"",
    toy:{},
    IdToy: ""
  },
  mutations: {
    UPDATE_USER(state, user){
      state.currentUser = user
    },
    GET_TOYS(state,toys){
      state.toys = toys
    },
    LOADING_LOGIN(state, loading){
      state.loading = loading
    },
    OPEN_DIALOG(state,dialog){
      state.dialog = dialog
    },
    ADD_EDIT(state,add_edit){
      state.add_edit = add_edit
    },
    BTN_ADD_EDIT(state,btn_add_edit){
      state.btn_add_edit = btn_add_edit
    },
    AGREGAR_MENSAJE(state,mensaje){
      state.mensaje = mensaje
    },
    AGREGAR_TOY(state,toy){
      state.toy = toy
    },
    LIMPIAR_TOY(state,toy){
      state.toy = toy
    },
    AGREGAR_ID(state,id){
      state.IdToy = id
    }
  },
  actions: {
    updateUser({commit}, user){
      commit("UPDATE_USER", user)
    },
    getToys({commit}){
      const url = "https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys";
      axios.get(`${url}`).then(response => commit("GET_TOYS", response.data))
    },
    crearToy({commit,dispatch},toy){
      const url = "https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys";
      axios.post(`${url}`,toy).then(() => {
        commit("LOADING_LOGIN",false)
        dispatch("getToys")
      })
    },
    loadingLogin({commit},loading){
      commit("LOADING_LOGIN",loading)
    },
    openDialog({commit}, dialog){
      commit("OPEN_DIALOG",dialog)
    },
    addEdit({commit},add_edit){
      commit("ADD_EDIT", add_edit)
    },
    btnAddEdit({commit}, btnAddEdit){
      commit("BTN_ADD_EDIT", btnAddEdit)
    },
    agregarMensaje({commit},mensaje){
      commit("AGREGAR_MENSAJE", mensaje)
    },
    agregarToy({commit}, toy){
      commit("AGREGAR_TOY",toy)
    },
    limpiarToy({commit}, toy){
      commit("LIMPIAR_TOY", toy)
    },
    eliminarToy({commit,dispatch}, Idtoy){
      const url = "https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys";
      setTimeout(() => {
        axios.delete(`${url}/${Idtoy}`).then(() => {
          commit("LOADING_LOGIN",false)
          dispatch("getToys")
        })
      },2000)
    },
    agregarId({commit},id){
      commit("AGREGAR_ID",id)
    },
    editarToy({commit,dispatch},toy){

      console.log("TOY: ", toy)
      const url = "https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys";
      axios.put(`${url}/${toy.id}`,toy.data).then(() => {
        commit("LOADING_LOGIN",false)
        dispatch("getToys")
      }).catch(err => {
        console.log("ERROR: ", err)
      })
    }
  },
  modules: {
  }
})
