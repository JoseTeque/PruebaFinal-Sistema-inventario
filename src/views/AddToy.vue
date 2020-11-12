<template>
  <div class="addToy">
    <v-app>
      <v-card width="450px" class="mx-auto my-5">
        <v-card-title class="pb-0">
          <h1 class="mx-auto mb-5">Agregar juguete</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Codigo"
              v-model="toy.code"
              color="green"
            />
            <v-text-field
              label="Nombre"
              v-model="toy.name"
              color="green"
            />
            <v-text-field
              label="Precio"
              v-model="toy.price"
              color="green"
              type="number"
            />
            <v-text-field
              label="Stock"
              v-model="toy.stock"
              color="green"
               type="number"
            />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" @click.prevent="agregar">Agregar</v-btn>
        </v-card-actions>
      </v-card>
  </v-app>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
data(){
  return{
    toy:{
      code: null,
      name: null,
      price: null,
      stock: null
    }
  }
},
methods:{
  ...mapActions(["crearToy"]),
  agregar(){
    if(this.isValidToy()){
        this.crearToy(this.toy)
        this.$router.push("/home")
    }else {
        alert('Todos los campos son obligatorios')
    }
    
  },
  isValidToy(){
     return this.toy.code !== null && this.toy.name !== "" && this.toy.price !== 0 && this.toy.stock !== 0 
  }
}
}
</script>

<style>

</style>