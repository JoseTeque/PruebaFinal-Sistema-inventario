<template>
  <div class="login">
   <div class="progress">
      <Progress />
   </div>
    <v-card v-if="!loading" width="450px" class="mx-auto my-5">
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
        <v-btn color="green" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapState, mapActions } from "vuex";
import Progress from '@/components/Progress'
export default {
  components:{
    Progress
  },
  data() {
    return {
      user: "",
      password: "",
      showPassword: false,
    };
  },
  computed: {
    ...mapState(["currentUser", "loading"]),
  },
  methods: {
    ...mapActions(["updateUser","loadingLogin"]),
    login() {
      this.loadingLogin(true);
      setTimeout(() => {
        if (this.user != "" && this.password != "") {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.user, this.password)
            .then(() => {
             this.loadingLogin(false);
              this.updateUser(firebase.auth().currentUser);
              this.$router.push("/home");
            })
            .catch((e) => {
              console.log("Error :", e);
            });
        } else {
          alert("Debe ingresar usuario y password");
        }
      }, 3000);
    },
  },
};
</script>

<style scoped>
  .progress{
    display:flex;
    justify-content:center;
    align-items: center;
  }
</style>