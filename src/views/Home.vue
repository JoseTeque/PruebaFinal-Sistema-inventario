<template>
  <div class="home">
    <div class="progress">
      <Progress />
   </div>
    <v-main v-if="!loading">
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
                <v-btn color="red"  @click.prevent="eliminar(toy.id)">Eliminar</v-btn>
                <v-btn color="yellow" @click.prevent="editar(toy)">Editar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
    <Modal />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions,mapState} from 'vuex'
import Modal from '@/components/Modal'
import Progress from '@/components/Progress'
export default {
  name: 'Home',
  components:{
    Modal,
    Progress
  },
  computed:{
    ...mapState(["toys","add_edit", "loading"])
  },
  methods:{
    ...mapActions(["getToys", "addEdit", "btnAddEdit", "openDialog", "agregarMensaje","agregarId", "agregarToy"]),
    addToy(){
      this.addEdit("Agregando juguete")
      this.btnAddEdit("Agregar")
      this.$router.push('/addToy')
    },
    editar(toy){
       this.agregarToy(toy)
       this.addEdit("Editar juguete")
       this.btnAddEdit("Editar")
       this.$router.push('/addToy')
    },
    eliminar(id){
      this.agregarId(id)
      this.agregarMensaje("Eliminar")
      this.openDialog(true)
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
    color: white;
  }

  .header-toy{
    display: flex;
    justify-content: center;
  }
  .progress{
    display:flex;
    justify-content:center;
    align-items: center;
  }
</style>
