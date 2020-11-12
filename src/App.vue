<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5UKQ6DC-wJOqsWyFMiLGFpkgGFLUtSrgR2g&usqp=CAU"
          transition="scale-transition"
          width="60"
        />

        <h4 class="text-logo">OTTO KLAUS</h4>
      </div>

      <v-spacer></v-spacer>

      <h4 class="text-user" v-if="currentUser">{{currentUser.email}}</h4>
      <v-btn v-if="currentUser" @click.prevent="logout"  text>
        <span class="mr-2">cerrar sesión</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import firebase from 'firebase'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed:{
    ...mapState(['currentUser'])
  },
  methods:{
    ...mapActions(["updateUser"]),
    logout(){
      firebase.auth().signOut().then(() => {
          this.updateUser(null)
          this.$router.push('/login')
    })
  }
}
}
</script>

<style scoped>
  .text-logo{
    font-size: 2rem;
  }
  .text-user{
    color: lawngreen;
  }
</style>
