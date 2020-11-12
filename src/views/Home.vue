<template>
  <div class="home">
    <v-main>
      <div class="header-toy">
         <h2 class="text-listado">Listado de Juguetes</h2>
         <v-btn class="ml-5" color="green" @click.prevent="addToy">Agregar</v-btn>
      </div>
      <v-row>
        <v-col md="4" v-for="toy in toys" :key="toy.id">
          <v-card class="mx-auto" max-width="400">
            <v-card-text><span>Codigo: </span>{{toy.data.code}}</v-card-text>
            <v-card-text><span>Nombre: </span>{{toy.data.name}}</v-card-text>
            <v-card-text><span>Precio: </span>{{toy.data.price}}</v-card-text>
            <v-card-text><span>Stock: </span>{{toy.data.stock}}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" @click.prevent="login">Eliminar</v-btn>
                <v-btn color="yellow" @click.prevent="login">Editar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions,mapState} from 'vuex'

export default {
  name: 'Home',
  computed:{
    ...mapState(["toys"])
  },
  methods:{
    ...mapActions(["getToys"]),
    addToy(){
      this.$router.push('/addToy')
    }
  },
  created(){
    this.getToys();
  }
}
</script>

<style scoped>
  span{
    font-weight: 900;
  }
  .text-listado{
    text-align: center;
  }

  .header-toy{
    display: flex;
    justify-content: center;
  }
</style>
