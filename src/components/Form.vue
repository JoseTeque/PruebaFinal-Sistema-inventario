<template>
  <div>
    <v-card v-if="!loading"  width="450px" class="mx-auto my-5">
      <v-card-title class="pb-0">
        <h1 class="mx-auto mb-5">{{ add_edit }}</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Codigo" v-model="Nuevotoy.code" color="green" />
          <v-text-field label="Nombre" v-model="Nuevotoy.name" color="green" />
          <v-text-field
            label="Precio"
            v-model="Nuevotoy.price"
            color="green"
            type="number"
          />
          <v-text-field
            label="Stock"
            v-model="Nuevotoy.stock"
            color="green"
            type="number"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue" @click.prevent="volver">volver</v-btn>
        <v-btn color="green" @click.prevent="agregar">{{ btn_add_edit }}</v-btn>
      </v-card-actions>
    </v-card>
    <Modal />
    <div class="progress">
      <Progress />
   </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Modal from "@/components/Modal";
import Progress from '@/components/Progress'
export default {
  components: {
    Modal,
    Progress
  },
  data() {
    return {
      Nuevotoy: {
        code: null,
        name: null,
        price: null,
        stock: null,
      },
      editToy:{}
    };
  },
  computed: {
    ...mapState(["add_edit", "btn_add_edit", "dialog", "loading", "toy"]),
  },
  methods: {
    ...mapActions(["crearToy", "openDialog", "agregarMensaje", "agregarToy"]),
    agregar() {
      if (this.isValidToy()) {
        if(this.btn_add_edit == "Agregar"){
          this.agregarToy(this.Nuevotoy)
          this.openDialog(true);
          this.agregarMensaje(this.btn_add_edit);
        }else{
           this.editToy.id = this.toy.id;
           this.editToy.data = this.Nuevotoy
           this.agregarToy(this.editToy)
           this.openDialog(true);
           this.agregarMensaje(this.btn_add_edit);
        }
        
      } else {
        alert("Todos los campos son obligatorios");
      }
    },
    isValidToy() {
      return (
        this.Nuevotoy.code !== null &&
        this.Nuevotoy.name !== "" &&
        this.Nuevotoy.price !== 0 &&
        this.Nuevotoy.stock !== 0
      );
    },
    volver(){
      this.$router.push('/home')
    }
  },
  created(){

     if(this.toy.data != undefined){
       this.Nuevotoy.code = this.toy.data.code
       this.Nuevotoy.name = this.toy.data.name
       this.Nuevotoy.price = this.toy.data.price
       this.Nuevotoy.stock = this.toy.data.stock
     }
  }
};
</script>
<style scoped>
  .progress{
    display:flex;
    justify-content:center;
    align-items: center;
  }
</style>