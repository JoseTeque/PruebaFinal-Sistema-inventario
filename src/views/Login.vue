<template>
  <div class="login">
    <v-app>
      <v-card width="450px" class="mx-auto my-5">
        <v-card-title class="pb-0">
          <h1 class="mx-auto mb-5">Sistema de Inventario</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Usuario"
              prepend-icon="mdi-account-circle"
              v-model="user"
              color="green"
            />
            <v-text-field
              label="Contraseña"
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              color="green"
            />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" @click.prevent="login">Login</v-btn>
        </v-card-actions>
      </v-card>
  </v-app>
  </div>
</template>

<script>

import firebase from 'firebase'
import {mapState, mapActions} from 'vuex'
export default {

  data(){
    return{
      user:"",
      password:"",
      showPassword:false
    }
  },
  computed:{
    ...mapState(["currentUser"])
  },
  methods:{
    ...mapActions(["updateUser"]),
    login(){
        if(this.user != "" && this.password != ""){
                  firebase.auth().signInWithEmailAndPassword(this.user, this.password)
                  .then(() => {
                    this.updateUser(firebase.auth().currentUser)
                    this.$router.push("/home");
                })
                .catch((e)=> {
                  console.log("Error :", e)
                })
              } else{ 
                alert("Debe ingresar usuario y password") 
            }
        }
    }
}
</script>

